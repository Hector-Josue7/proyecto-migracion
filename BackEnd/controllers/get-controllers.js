const { Pool } = require('pg');

// conexion a base de datos
const { credenciales } = require('../config')
const pool = new Pool(credenciales)
pool.connect()


const listaExpedientes = async (req, res) =>{
    try{
        let datos = [req.params.id]
        let consulta = `select p.genero , p.ininacionalidad, p.fechanacimiento, pn.gidpersona, pn.nombre, pn.segnombre, pn.apellido, pn.segapellido, pex.gidexpediente , pex.encalidad, pex.expnna, pex.gidpersona, ex.numero_expediente, ex.tiposinstrumentos, ex.fechacreacion, ex.numanterior, ex.numanterioranio, ex.sfecha, ex.fehavulneracion,
        epv.fechacreacion, epv.tipovulneracion, tpv.tipologia, u.unidad, u.gidcentros, c.nombre, s.gidtipocustodio, s.fechainicio, s.referencias, s.sfecha, s.tipogestion, s.tipo, tc.tipocustodio, tc.descripcion, tc.sfecha
        FROM public.persona p 
        inner join personanombres pn on (p.id = pn.id)
        inner join personasexpediente pex on (p.id=pex.gidpersona) 
        inner join expediente ex ON (pex.gidexpediente= ex.numero_expediente)
        inner join expedientevulneracion epv on (epv.numero_instrumento = ex.numero_expediente )
        inner join tipovulneracionhijo tpv ON (epv.tipovulneracion=tpv.id)
        inner join unidades u ON ( ex.unidadapertura = u.gidunidades )
        inner join centros c ON ( u.gidcentros = c.gidcentros )
        inner join seguimiento s ON (ex.id = s.id)
        inner join tipocustodio tc ON (s.gidtipocustodio = tc.gidtipocustodio)
        where pex.expnna = 'nna'  and ex.numero_expediente = $1`
        let respuesta = await pool.query(consulta, datos)
        res.json(respuesta.rows)
        res.end();
      } catch(err) {
        res.status(500).send({message: err})
        res.end();
      }
}

module.exports = {
    listaExpedientes
}