import db from "../database/connection.js";
export default async function listarServicos(req, res) {
  try {
    //busca serviços
    const sql = `SELECT * from servicos;`;
    const promise = (sql) => {
      return new Promise((resolve, reject) => {
        db.query(sql, async (err, result) => {
          if (err) {
            reject(new Error());
          } else {
            resolve(result);
          }
        });
      });
    };
    const servicos = await promise(sql);
    //buscar datas respectivos servicos
    const buscarDatas = servicos.map(async (servico, index) => {
      const sqlData = `SELECT * FROM datasExecucao where servicoID = ${servico.id}`;
      const datas = await promise(sqlData);
      const arrDatas = datas.map((data) => data.data);
      await Promise.all(arrDatas);
      servicos[index].dataExecucao = arrDatas;
    });
    await Promise.all(buscarDatas);
    return res.status(200).send(servicos);
  } catch (err) {
    console.error(err);
    return res.status(500).send({
      Mensagem: "Erro ao listar serviços",
    });
  }
}
