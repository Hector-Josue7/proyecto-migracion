-- uso la siguiente nomenclatura, para campos de tablas en minuscula y para palabras reservadas en mayuscula
-- llaves foraneas llevan el mismo nombre que la clave primaria pero con el numero 1 al final
-- esta tabla se encuentra en la base de datos original de sismo 
CREATE TABLE tbl_usuarios_migracion(
            codigo_usuario SERIAL PRIMARY KEY, -- id_usuario en base de datos sismo
           nombre_persona VARCHAR(200),
           apellido_persona VARCHAR(200),
           nombre_usuario VARCHAR(100) NOT NULL,
           clave_usuario VARCHAR(200) NOT NULL,
          fecha_registro TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP  -- sfecha en base de datos sismo
        
);

-- Creamos un indice unico por el campo nombre_usuario
CREATE UNIQUE INDEX I_tbl_usuarios_migracion_nombreUsuario ON tbl_usuarios_migracion (nombre_usuario);


CREATE TABLE tbl_nacionalidades(
  codigo_nacionalidad SERIAL PRIMARY KEY,
  nombre_nacionalidad VARCHAR(50)
)

--CREATE TYPE languajes AS ENUM ('INGLES', 'FRANCES', 'PORTUGUES', 'ESPAÑOL');
CREATE TYPE estadosCiviles AS ENUM ('SOLTERO/A', 'CASADO/A', 'DIVORCIADO/A', 'VIUDO/A', 'UNION LIBRE');
CREATE TABLE tbl_solicitantes(
  codigo_solicitante SERIAL PRIMARY KEY,
  codigo_nacionalidad1 INTEGER, -- llave foranea tabla tbl_nacionalidades
  fecha_nacimiento_solicitante DATE, 
  pasaporte_solicitante VARCHAR(20),
  idiomas VARCHAR(50), -- puede ser un dato de tipo SET que es una lista con multiples opciones pero en postgresql no existe tal tipo de dato
  viajar_pais_encuentra_nna CHAR(2),
  estado_civil estadosCiviles,
  direccion VARCHAR(100),
  telefonos VARCHAR(100),
  correo_electronico VARCHAR(50),
  nro_identidad VARCHAR(25)  -- este campo podria ser la clave primaria tambien 

);


CREATE TABLE tbl_ninos_ninas_adolescentes(
  codigo_nna SERIAL PRIMARY KEY, 
  codigo_solicitante1 INTEGER,  -- llave foranea tabla tbl_solicitantes
  codigo_nacionalidad1 VARCHAR(50), -- llave foranea tabla tbl_nacionalidades
  nombreCompleto_nna VARCHAR(400),
  fecha_nacimiento_nna DATE,
 -- edad SMALLINT,        -- a partir de la fecha de nacimiento se puede determinar la edad
  lugar_nacimiento VARCHAR(50),
  fecha_cumplir_edad_16 DATE,
  problemas_salud VARCHAR(500),
  pasaporte_o_identidad_nna VARCHAR(20), -- INTEGER  o  BIGINT
  cicatrices_o_marcas_nacimiento VARCHAR(400),
  direccion_residia_antes VARCHAR(100),
  direccion_actual_nna VARCHAR(100),
  telefono_actual VARCHAR(20),   -- INTEGER  o  BIGINT
  actividades_entretenimientos_actuales_NNA VARCHAR(200),
  peso DECIMAL(5,2),
  altura DECIMAL(5,2),
  color_ojos VARCHAR(30),
  color_cabello VARCHAR(30),
  
  FOREIGN KEY codigo_solicitante1 REFERENCES tbl_solicitantes(codigo_solicitante) ON DELETE CASCADE
);



