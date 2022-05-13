<h1>Como rodar projeto e testar </h1>

1. Precisa ter o mysql e preencher com os dados de acesso em: src/database/connection.js (Criação de database e tabelas é automatico, como usuario e tipos de serviços)<br>
2. clonar repo
3. cd repo
4. npm install
5. npm start

<p>Para testar com o POSTMAN utilizar a collection.json e importar no seu POSTMAN</p>

<h2>POST - /servicos</h2>
<br>
<br>
<h3>1. Com Data Limite Agendando Dias da Semana<h3>
<br>
<img src="./imgsPostman/postdatalimite.png">
<br>
<br>
<h3>2. Uma data de execucao<h3>
<br>
<img src="./imgsPostman/postumadata.png">
<br>
<br>
<h2>GET - /servicos</h2>
<br>
<br>
<h3>1. Listar todos Serviços <h3>
<br>
<img src="./imgsPostman/getservicos.png">
<br>
<br>
<h3>2. Listar com filtros<h3>
<br>
<img src="./imgsPostman/getfilters.png">
<br>
<br>
<h2>DELETE - /servicos</h2>
<br>
<br>
<h3>1. Deletar um serviço <h3>
<br>
<img src="./imgsPostman/deleteservico.png">
