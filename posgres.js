const Pool = require('pg').Pool

const pool = new Pool({
    user: 'gizehgarcia', 
    host: 'localhost',
    database: 'ironccv',
    password: '123',
    port: 5432,
})

// api=>
// create table departamentos (
//      
//   nombre varchar(0)
// );


const findAllDepartamentos = (request, response) => {
    pool.query('select * from departamento', (error, data) => {
        if (error) {
            throw error
        }
        response.status(200).json(data.rows)
    })
}

const findOneDepartamento = (request, response) => {
    const cod_depto = parseInt(request.params.cod_depto)
    pool.query('select * from departamento where cod_depto = $1', [cod_depto], (error, data) => {
        if (error) {
            throw error
        }
        response.status(200).json(data.rows)
    })
}

const insertDepartamento = (request, response) => {
    const { cod_depto, nombre } = request.body
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    pool.query('insert into departamento (cod_depto, nombre) values ($1, $2)', [cod_depto, nombre], (error, data) => {
        if (error) {
            throw error
        }
        response.status(201).send('Se agrego el departamento')
    })
}

const updateDepartamento = (request, response) => {
    const cod_depto = parseInt(request.params.cod_depto)
    const { nombre } = request.body
    pool.query(
        'update departamento set nombre = $1 where cod_depto = $2',
        [nombre, cod_depto],
        (error, data) => {
            if (error) {
                throw error
            }
            response.status(200).send('Departamento modificado con exito')
        }
    )
}

const deleteDepartamento = (request, response) => {
    const cod_depto = parseInt(request.params.cod_depto)
    pool.query('delete from departamento where cod_depto = $1', [cod_depto], (error, data) => {
        if (error) {
            throw error
        }
        response.status(200).send('Departamento eliminado')
    })
}


//-------------------------EMPLEADOS--------------------------
const findAllEmpleados = (request, response) => {
    pool.query('select * from empleado_departamento_jornada', (error, data) => {
        if (error) {
            throw error
        }
        response.status(200).json(data.rows)
    })
}

const findOneEmpleado = (request, response) => {
    const cod_empleado = parseInt(request.params.cod_empleado)
    pool.query('select * from empleado_departamento_jornada where cod_empleado = $1', [cod_empleado], (error, data) => {
        if (error) {
            throw error
        }
        response.status(200).json(data.rows)
    })
}

const insertEmpleado = (request, response) => {
    const { cod_empleado, nombre, cod_jornada, cod_depto } = request.body
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    pool.query('insert into empleado_departamento_jornada (cod_empleado, nombre, cod_jornada, cod_depto) values ($1, $2, $3, $4)', [cod_empleado, nombre, cod_jornada, cod_depto], (error, data) => {
        if (error) {
            throw error
        }
        response.status(201).send('Se agrego el empleado')
    })
}

const updateEmpleado = (request, response) => {
    const cod_empleado = parseInt(request.params.cod_empleado)
    const { nombre } = request.body
    pool.query(
        'update empleado_departamento_jornada set nombre = $1 where cod_empleado = $2',
        [cod_empleado, nombre, cod_jornada, cod_depto],
        (error, data) => {
            if (error) {
                throw error
            }
            response.status(200).send('Empleado modificado con exito')
        }
    )
}

const deleteEmpleado = (request, response) => {
    const cod_empleado = parseInt(request.params.cod_empleado)
    pool.query('delete from empleado_departamento_jornada where cod_empleado = $1', [cod_empleado], (error, data) => {
        if (error) {
            throw error
        }
        response.status(200).send('Empleado eliminado')
    })
}

//-------------------------JORNADAS--------------------------

const findAllJornadas = (request, response) => {
    pool.query('select * from jornada', (error, data) => {
        if (error) {
            throw error
        }
        response.status(200).json(data.rows)
    })
}

const findOneJornada = (request, response) => {
    const cod_jornada = parseInt(request.params.cod_jornada)
    pool.query('select * from jornada where cod_jornada = $1', [cod_jornada], (error, data) => {
        if (error) {
            throw error
        }
        response.status(200).json(data.rows)
    })
}

const insertJornada = (request, response) => {
    const { cod_jornada, nombre, hora_entrada , hora_salida } = request.body
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    pool.query('insert into jornada (cod_jornada, nombre, hora_entrada , hora_salida) values ($1, $2, $3, $4)', [cod_jornada, nombre, hora_entrada , hora_salida], (error, data) => {
        if (error) {
            throw error
        }
        response.status(201).send('Se agrego la jornada')
    })
}

const updateJornada = (request, response) => {
    const cod_jornada = parseInt(request.params.cod_jornada)
    const { nombre } = request.body
    pool.query(
        'update jornada set nombre = $1 where cod_jornada = $2',
        [cod_jornada, nombre, hora_entrada , hora_salida],
        (error, data) => {
            if (error) {
                throw error
            }
            response.status(200).send('Jornada modificada con exito')
        }
    )
}

const deleteJornada = (request, response) => {
    const cod_jornada = parseInt(request.params.cod_jornada)
    pool.query('delete from jornada where cod_empleado = $1', [cod_jornada], (error, data) => {
        if (error) {
            throw error
        }
        response.status(200).send('Jornada eliminada')
    })
}

//-------------------------MARCAS--------------------------

const findAllMarcas = (request, response) => {
    pool.query('select * from marca_empleado', (error, data) => {
        if (error) {
            throw error
        }
        response.status(200).json(data.rows)
    })
}

const findOneMarca = (request, response) => {
    const marcaCorrelativo = parseInt(request.params.marcaCorrelativo)
    pool.query('select * from marca_empleado where marcaCorrelativo = $1', [marcaCorrelativo], (error, data) => {
        if (error) {
            throw error
        }
        response.status(200).json(data.rows)
    })
}

const insertMarca = (request, response) => {
    const { marcaCorrelativo, fecha, hora, entrada_salida, cod_empleado } = request.body
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    pool.query('insert into marca_empleado (marcaCorrelativo, fecha, hora, entrada_salida, cod_empleado) values ($1, $2, $3, $4, $5)', [marcaCorrelativo, fecha, hora, entrada_salida, cod_empleado], (error, data) => {
        if (error) {
            throw error
        }
        response.status(201).send('Se agrego la marca')
    })
}

const updateMarca = (request, response) => {
    const marcaCorrelativo = parseInt(request.params.marcaCorrelativo)
    const { nombre } = request.body
    pool.query(
        'update marca_empleado set nombre = $1 where marcaCorrelativo = $2',
        [marcaCorrelativo, fecha, hora, entrada_salida, cod_empleado],
        (error, data) => {
            if (error) {
                throw error
            }
            response.status(200).send('Marca modificada con exito')
        }
    )
}

const deleteMarca = (request, response) => {
    const marcaCorrelativo = parseInt(request.params.marcaCorrelativo)
    pool.query('delete from marca_empleado where cod_empleado = $1', [marcaCorrelativo], (error, data) => {
        if (error) {
            throw error
        }
        response.status(200).send('Marca eliminada')
    })
}


//-------------------------PERMISOS--------------------------
const findAllPermisos = (request, response) => {
    pool.query('select * from permiso_empleado', (error, data) => {
        if (error) {
            throw error
        }
        response.status(200).json(data.rows)
    })
}

const findOnePermiso = (request, response) => {
    const p_correlativo = parseInt(request.params.p_correlativo)
    pool.query('select * from permiso_empleado where p_correlativo = $1', [p_correlativo], (error, data) => {
        if (error) {
            throw error
        }
        response.status(200).json(data.rows)
    })
}

const insertPermiso = (request, response) => {
    const { fecha_perm, motivo, cod_empleado } = request.body
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    pool.query('insert into permiso_empleado (p_correlativo, fecha_perm, motivo, cod_empleado ) values (DEFAULT, $1, $2, $3)', [ fecha_perm, motivo, cod_empleado ], (error, data) => {
        if (error) {
            throw error
        }
        response.status(201).send('Se agrego el permiso')
    })
}

const updatePermiso = (request, response) => {
    const p_correlativo = parseInt(request.params.p_correlativo)
    const { nombre } = request.body
    pool.query(
        'update permiso_empleado set nombre = $1 where p_correlativo = $2',
        [p_correlativo, fecha_perm, motivo, cod_empleado ],
        (error, data) => {
            if (error) {
                throw error
            }
            response.status(200).send('Permiso modificado con exito')
        }
    )
}

const deletePermiso = (request, response) => {
    const p_correlativo = parseInt(request.params.p_correlativo)
    pool.query('delete from permiso_empleado where p_correlativo = $1', [p_correlativo], (error, data) => {
        if (error) {
            throw error
        }
        response.status(200).send('Permiso eliminado')
    })
}


module.exports = {
    findAllDepartamentos,
    findOneDepartamento,
    insertDepartamento,
    updateDepartamento,
    deleteDepartamento,

    findAllEmpleados,
    findOneEmpleado,
    insertEmpleado,
    updateEmpleado,
    deleteEmpleado,

    findAllJornadas,
    findOneJornada,
    insertJornada,
    updateJornada,
    deleteJornada,

    findAllMarcas,
    findOneMarca,
    insertMarca,
    updateMarca,
    deleteMarca,

    findAllPermisos,
    findOnePermiso,
    insertPermiso,
    updatePermiso,
    deletePermiso

}