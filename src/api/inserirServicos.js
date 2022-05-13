import schema from "../schema/servico.js";
import db from "../database/connection.js";
import verifyDateExecution from "../functions/verifyDateExecution.js";
export default function inserirServicos(req, res) {
  try {
    const isValidParams = schema.validate(req.body);
    if (isValidParams.error) return res.status(404).send(isValidParams.error);
    //Verifica se é de data limite ou 1 data de execução
    let arrDatasExecucao;
    if (req.body.dataLimite && req.body.diasExecucao) {
      const diasExecucao = req.body.diasExecucao;
      const dataLimite = `${req.body.dataLimite}T20:10:43.368Z`;
      const hoje = new Date();
      arrDatasExecucao = verifyDateExecution(dataLimite, hoje, diasExecucao);
    } else if (req.body.dataExecucao) {
      const arr = [req.body.dataExecucao];
      arrDatasExecucao = arr;
    } else {
      return res.status(404).send({
        Mensagem:
          "Adicione uma data limite e também os dias da semana ou uma dataExucacao caso seja apenas uma data",
      });
    }

    // inserir primeiro o servico, pegar a chave PK
    // inserir na tabelas datas, todas as datas de agendamento com a PK do Servico
    const SQL = `INSERT INTO servicos(titulo, descricao, tiposervicoID, userID) VALUES('${req.body.tituloServico}', '${req.body.descricao}', ${req.body.idTipoServico}, ${req.body.idUsuario})`;
    db.query(SQL, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }
      const idServico = result.insertId;
      for (let i = 0; i < arrDatasExecucao.length; i++) {
        const SQLDatasExecucao = `INSERT INTO datasExecucao(data, servicoID) VALUES('${arrDatasExecucao[i]}', ${idServico});`;
        db.query(SQLDatasExecucao, (err, result) => {
          if (err) {
            console.error(err);
            return res.status(500).send(err);
          }
        });
      }
      return res.status(200).send({ Mensagem: "Sucesso ao postar serviço" });
    });
  } catch (err) {
    return res.status(500).send(err);
  }
}
