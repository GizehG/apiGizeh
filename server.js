const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./posgres')
const port = 3000

const cors = require('cors');
app.use(cors());

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({ 
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Postgres API' })
})

app.get('/departamentos', db.findAllDepartamentos )
app.get('/departamentos/:cod_depto', db.findOneDepartamento)
app.post('/departamentos', db.insertDepartamento)
app.put('/departamentos/:cod_depto', db.updateDepartamento)
app.delete('/departamentos/:cod_depto', db.deleteDepartamento)

 
app.get('/empleados', db.findAllEmpleados )
app.get('/empleados/:cod_empleado', db.findAllEmpleados)
app.post('/empleados', db.insertEmpleado)
app.put('/empleados/:cod_empleado', db.updateEmpleado)
app.delete('/empleados/:cod_empleado', db.deleteEmpleado)


app.get('/jornadas', db.findAllJornadas )
app.get('/jornadas/:cod_jornada', db.findOneJornada)
app.post('/jornadas', db.insertJornada)
app.put('/jornadas/:cod_jornada', db.updateJornada)
app.delete('/jornadas/:cod_jornada', db.deleteJornada)


app.get('/marcas', db.findAllMarcas)
app.get('/marcas/:marcaCorrelativo', db.findOneMarca)
app.post('/marcas', db.insertMarca)
app.put('/marcas/:marcaCorrelativo', db.updateMarca)
app.delete('/marcas/:marcaCorrelativo', db.deleteMarca)


app.get('/permisos', db.findAllPermisos )
app.get('/permisos/:p_correlativo', db.findOnePermiso)
app.post('/permisos', db.insertPermiso)
app.put('/permisos/:p_correlativo', db.updatePermiso)
app.delete('/permisos/:p_correlativo', db.deletePermiso)

app.listen(port, () => {
  console.log(`API running on port ${port}.`)
})