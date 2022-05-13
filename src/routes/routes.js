import express from "express";
import listarServicos from "../api/listarServicos.js";
import inserirServicos from "../api/inserirServicos.js";
import deletarServico from "../api/deletarServico.js";
import buscarServico from "../api/buscarServico.js";
const app = express.Router();
app.get("/servicos/:descricao/:titulo/:tipo_servicoID", (req, res) =>
  buscarServico(req, res)
);
app.get("/servicos", (req, res) => listarServicos(req, res));
app.post("/servicos", (req, res) => inserirServicos(req, res));
app.delete("/servicos", (req, res) => deletarServico(req, res));

export default app;
