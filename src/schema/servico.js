import Joi from 'joi'

const schema =  Joi.object({
  tituloServico: Joi.string().required(),
  descricao: Joi.string().required(),
  dataExecucao: Joi.date().min('now'),
  dataLimite: Joi.date().min('now'),
  diasExecucao: Joi.array().items(Joi.string()),
  idTipoServico: Joi.number().required(),
  idUsuario: Joi.number().required()
})


export default schema