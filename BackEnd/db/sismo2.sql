--CREATE DATABASE sismo2;
--USE sismo2

-- uso la siguiente nomenclatura, para campos de tablas en minuscula y para palabras reservadas en mayuscula
-- llaves foraneas llevan el mismo nombre que la clave primaria pero con el numero 1 al final

-- en la base de datos de sismo esta tabla se llama usuarioslogin


-- esta tabla se encuentra en la base de datos original de sismo 
CREATE TABLE tbl_usuarios_migracion(
            codigo_usuario SERIAL PRIMARY KEY, -- id_usuario en base de datos sismo
           nombre_persona VARCHAR(200),
           apellido_persona VARCHAR(200),
           nombre_usuario VARCHAR(100) NOT NULL,
           clave_usuario VARCHAR(200) NOT NULL,
          fecha_registro TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP  -- sfecha en base de datos sismo
        
);

INSERT INTO tbl_personas (nombre_persona, usuario_persona, clave_persona) VALUES 
('John Carter Two', 'johnCarter', 'password1'), 
('fulanoDeTal', 'FulanoDeTalThree','e38ad214943daad1d64c102faec29de4afe9da3d'), 
('Alex Gallardo', 'alexGallardo5','asd.123'),
('Victoria Guifarro', 'vickyGuifarro1', 'asd.456');

 -- tabla de roles 
CREATE TABLE tbl_roles (
             codigo_rol SERIAL PRIMARY KEY, 
             nombre_rol VARCHAR(50)
);

INSERT INTO tbl_roles (nombre_rol) VALUES 
  ('JEFE DE INFORMATICA'),
  ('PROGRAMADOR WEB'),
  ('ABOGADO'),
  ('GUARDIA DE SEGURIDAD'),
  ('ASEADOR'),
  ('TECNICO INFORMATICO'),
  ('JEFE RECURSOS HUMANOS'),
  ('ADMINISTRADOR FINANCIERO');

-- tabla intermedia entre usuarioslogin y tbl_roles
CREATE TABLE tbl_usuarios_x_roles(
             codigo_persona1 INTEGER,
             codigo_rol1 INTEGER,
             FOREIGN KEY(codigo_persona1) REFERENCES tbl_personas(codigo_persona) ON DELETE CASCADE, 
             FOREIGN KEY(codigo_rol1) REFERENCES tbl_roles(codigo_rol) ON DELETE CASCADE 
);

INSERT INTO tbl_usuarios_x_roles (codigo_persona1, codigo_rol1) VALUES 
(1, 2),
(1, 1),
(1, 8),
(2, 4),
(2, 5),
(3, 6),
(4, 7);


CREATE TABLE tbl_ninos_ninas_adolescentes(
   codigo_nna SERIAL PRIMARY KEY,
   nombre_nna VARCHAR(200),
   direccion_nna VARCHAR(200),
   vulneracion_nna VARCHAR(200),
   atenciones_nna VARCHAR(200),
   nombre_padres_nna VARCHAR(200),
   telefono VARCHAR(50) -- el telefono es un dato que no se ocupa para sumar tambien se puede usar el tipo de dato INTEGER o BIGINT
);

INSERT INTO tbl_ninos_ninas_adolescentes(nombre_nna, direccion_nna, vulneracion_nna, atenciones_nna, nombre_padres_nna, telefono) VALUES  
('Kevin Mateo Rodriguez Dias', 'Colonia el carrizal, Bloque D, Casa #5', 'Le pegaron con un chilillo y lo dejaron malherido', 'La licenciada Olga lo remitio al seguro social para revisiones medicas', 'Padre: Simon Bolivar, Madre: Petronila Carrasco', '99001188'),
('Yemille Michelle Zarruk Velasquez', 'Colonia venecia, bloque f, casa #21', 'Se quemo las manos manipulando un mortero', 'Se remitio al hospital materno infantil a la sala de niños quemados para recibir atencion medica', 'Padre: Sicomoro Panchame, Madre: Federica Peluche', '+504 22112211'),
('Alejandra Lopez Guevara', 'Colonia Santo Domingo. Bloque C, Casa #6', 'Su papá la violo en casa', 'Se remitio a un psicologo para recibir tratamiento', 'Padre: Alejandro Lopeza, Madre: Yuliana Guevara', '99001122')


-- precio decimal(5,2)