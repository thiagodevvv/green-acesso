export default function createTables(db) {
  db.query("CREATE DATABASE IF NOT EXISTS servicos;");
  db.query("use servicos;");
  db.query(
    "CREATE TABLE IF NOT EXISTS users (id int NOT NULL AUTO_INCREMENT, name varchar(150), login varchar(30) NOT NULL, password varchar(300), UNIQUE(login), PRIMARY KEY(id));"
  );
  db.query(
    "CREATE TABLE IF NOT EXISTS tipos_servicos (id int NOT NULL AUTO_INCREMENT, tipo_servico varchar(200), PRIMARY KEY(id));"
  );
  db.query(
    "CREATE TABLE IF NOT EXISTS servicos (id int NOT NULL AUTO_INCREMENT, titulo varchar(100) NOT NULL, descricao varchar(200) NOT NULL, tiposervicoID int, userID int, FOREIGN KEY(tiposervicoID) REFERENCES tipos_servicos(id), FOREIGN KEY(userid) REFERENCES users(id), PRIMARY KEY(id));"
  );
  db.query(
    "CREATE TABLE IF NOT EXISTS datasExecucao (id int NOT NULL AUTO_INCREMENT, data varchar(15) NOT NULL, servicoID int, FOREIGN KEY(servicoID) REFERENCES servicos(id) ON DELETE CASCADE, PRIMARY KEY(id));"
  );

  //inserir dados de usuario e tipo servico para teste
  db.query(
    `INSERT IGNORE INTO users(name, login, password) VALUES('usuarioSilva', 'usuarioTeste', '1234');`
  );
  db.query(
    `INSERT IGNORE INTO tipos_servicos(tipo_servico) VALUES('repositor');`
  );
  db.query(
    `INSERT IGNORE INTO tipos_servicos(tipo_servico) VALUES('pesquisa_precos');`
  );
  db.query(`INSERT IGNORE INTO tipos_servicos(tipo_servico) VALUES('caixa');`);
}
