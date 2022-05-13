import express from 'express'
import cors from 'cors'
import routes from './src/routes/routes.js'
import db from './src/database/connection.js'
import createTables from './src/database/createTables.js'
const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)


const PORT = 3000
db.connect(err => {
  if(err) console.error(`Erro ao se conectar com banco de dados : ${err}`)
  console.log('Conectado com Banco de Dados')
  createTables(db)
})
app.listen(PORT, () => console.log('Servidor iniciado'))


