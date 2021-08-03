-- IMPORTANTE LEER LOS COMENTARIOS
-- AÑADIR TODAS ESTAS TABLAS A LA BASE DE DATOS ORIGINAL DE SISMO
-- uso la siguiente nomenclatura, para campos de tablas en minuscula y para palabras reservadas en mayuscula
-- llaves foraneas llevan el mismo nombre que la clave primaria pero con el numero 1 al final


-- TABLAS INDEPENDIENTES: SON TABLAS QUE NO DEPENDEN DE UNA CLAVE FORANEA, EXCEPTO SI LA RELACION ES DE MUCHOS A MUCHOS, AÑADIR UNA TABLA EN ESTA SECCION
CREATE TABLE tbl_usuarios_migracion(
            codigo_usuario SERIAL PRIMARY KEY, -- id_usuario en base de datos sismo
            nombre_persona VARCHAR(200),
            apellido_persona VARCHAR(200),
            nombre_usuario VARCHAR(100) NOT NULL,
            clave_usuario VARCHAR(200) NOT NULL,
            fecha_registro TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP  -- sfecha en base de datos sismo
);


CREATE UNIQUE INDEX I_tbl_usuarios_migracion_nombreUsuario ON tbl_usuarios_migracion (nombre_usuario); -- Creamos un indice unico por el campo nombre_usuario

CREATE TABLE tbl_nacionalidades(
  codigo_nacionalidad SERIAL PRIMARY KEY,
  nombre_nacionalidad VARCHAR(50)
);

INSERT INTO tbl_nacionalidades(nombre_nacionalidad) VALUES
('HONDUREAÑA'),('ESTADO UNIDENSE'),('MEXICANA'), ('GUATEMALTECA'), ('SALVADOREÑA'), ('NICARAGUENSE'), ('COSTA RICENSE'), ('PANAMEÑA');


CREATE TABLE tbl_idiomas(
  codigo_idioma SERIAL PRIMARY KEY,
  nombre_idioma VARCHAR(45)
);
INSERT INTO tbl_idiomas(nombre_idioma) VALUES 
('ESPAÑOL'), ('INGLES'), ('FRANCES'), ('PORTUGUES');


CREATE TABLE tbl_idiomas_por_solicitantes(
  codigo_idioma1 INTEGER,
  codigo_solicitante1 INTEGER, 

  FOREIGN KEY(codigo_idioma1) REFERENCES tbl_idiomas(codigo_idioma) ON DELETE CASCADE,
  FOREIGN KEY(codigo_solicitante1) REFERENCES tbl_solicitantes(codigo_solicitante) ON DELETE CASCADE,
);

-- TABLAS DEPENDIENTES: SON TABLAS QUE DEPENDEN DE UNA CLAVE FORANEA, AÑADIR UNA TABLA EN ESTA SECCION QUE DEPENDA DE LAS TABLAS INDEPENDIENTES
-- un solicitante puede tener muchos hijos, por ejemplo un padre o madre puede tener muchos hijos o incluso el encargado, creo que es alguien que esta a cargo y cuida del NNA
--CREATE TYPE languajes AS ENUM ('INGLES', 'FRANCES', 'PORTUGUES', 'ESPAÑOL');
CREATE TYPE estadosCiviles AS ENUM ('SOLTERO/A', 'CASADO/A', 'DIVORCIADO/A', 'VIUDO/A', 'UNION LIBRE');








CREATE TABLE tbl_personas(
  codigo_persona SERIAL PRIMARY KEY,
  codigo_nacionalidad1 INTEGER, -- llave foranea, primaria en tbl_nacionalidades
  nombre_completo VARCHAR(400),
  fecha_nacimiento DATE, 
  

   pasaporte_o_identidad_nna VARCHAR(20), -- INTEGER  o  BIGINT
  -- edad SMALLINT,        -- a partir de la fecha de nacimiento se puede determinar la edad, esta columna es propia de un NNA

   FOREIGN KEY codigo_nacionalidad1 REFERENCES tbl_nacionalidades(codigo_nacionalidad1) ON DELETE CASCADE,

);



