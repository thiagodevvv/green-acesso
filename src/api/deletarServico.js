import db from "../database/connection.js";
export default async function deletarServico(req, res) {
  try {
    if (!req.body.id)
      return res
        .status(404)
        .send({ Mensagem: "Erro ao deletar serviço por favor informe O ID" });
    const sqlDeleteDatas = `DELETE FROM datasExecucao where id = ${req.body.id}`;
    db.query(sqlDeleteDatas, (err, result) => {
      if (err)
        return res
          .status(500)
          .send({ Mensagem: "Erro ao deletar serviço", Error: err });
      const sqlDeleteServico = `DELETE FROM servicos where id = ${req.body.id} `;
      db.query(sqlDeleteServico, (err, result) => {
        if (err)
          return res
            .status(500)
            .send({ Mensagem: "Erro ao deletar serviço", Error: err });
        return res
          .status(200)
          .send({ Mensagem: "Serviço deletado com sucesso", data: result });
      });
    });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send({ Mensagem: "Erro ao deletar serviço", Error: err });
  }
}
