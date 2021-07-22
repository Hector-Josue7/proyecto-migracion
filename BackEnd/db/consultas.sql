SELECT a.id_usuario as idUsuario, a.usr_username as usrName, a.usr_password as usrPassword, b.codigo_rol1 as codigoRol
FROM usuarioslogin a INNER JOIN tbl_usuarios_x_roles b
ON a.id_usuario = b.id_usuario1
WHERE a.usr_username = 'alexGallardo5' AND a.usr_password ='asd.123'