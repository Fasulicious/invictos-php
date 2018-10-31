-- phpMyAdmin SQL Dump
-- version 2.8.0.1
-- http://www.phpmyadmin.net
-- 
-- Servidor: custsql-ipg82.eigbox.net
-- Tiempo de generación: 25-08-2016 a las 00:02:55
-- Versión del servidor: 5.6.31
-- Versión de PHP: 4.4.9
-- 
-- Base de datos: `invictos`
-- 

-- --------------------------------------------------------

-- 
-- Estructura de tabla para la tabla `archivo`
-- 

CREATE TABLE `archivo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) DEFAULT NULL,
  `nombre_ruta` varchar(200) DEFAULT NULL,
  `num_descargas` int(11) DEFAULT NULL,
  `id_biblioteca` int(11) DEFAULT NULL,
  `ext_archivo` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

-- 
-- Volcar la base de datos para la tabla `archivo`
-- 

INSERT INTO `archivo` VALUES (1, 'TRABAJO DESARROLLADO BLA BLA', 'imagen', 5, 1, 'png');
INSERT INTO `archivo` VALUES (2, 'Examen desarollado', 'examen', 3, 1, 'txt');

-- --------------------------------------------------------

-- 
-- Estructura de tabla para la tabla `aviso_contactos`
-- 

CREATE TABLE `aviso_contactos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_aviso` int(11) DEFAULT NULL,
  `id_contacto` int(11) DEFAULT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `mensaje` varchar(300) DEFAULT NULL,
  `correo` varchar(50) DEFAULT NULL,
  `telefono` varchar(15) DEFAULT NULL,
  `leido` tinyint(1) DEFAULT '0',
  `respondido` tinyint(1) DEFAULT '0',
  `respuesta` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8 AUTO_INCREMENT=20 ;

-- 
-- Volcar la base de datos para la tabla `aviso_contactos`
-- 

INSERT INTO `aviso_contactos` VALUES (1, 4, 0, 'dante vidal', 'mensaje', 'dante_vidal_tueros@hotmail.com', '123456789', 1, 0, NULL);
INSERT INTO `aviso_contactos` VALUES (2, 6, 0, 'dross', 'Hola que tal dros', 'dros@hotmail.com', '123456789', 1, 0, NULL);
INSERT INTO `aviso_contactos` VALUES (3, 1, 0, 'El mas bruto', 'Quiero clases de mate', 'bruto@jomeil.com', '555 5555', 0, 0, NULL);
INSERT INTO `aviso_contactos` VALUES (4, 8, 0, 'bill gates', '', '1321', '65465', 1, 0, NULL);
INSERT INTO `aviso_contactos` VALUES (5, 5, 0, 'gfgfg', 'fgfgf', 'fgfgf', 'gfgfg', 0, 0, NULL);
INSERT INTO `aviso_contactos` VALUES (6, 13, 0, 'hola', 'hola', 'kdkdkd', 'dmsfksdk', 1, 1, 'hola\n');
INSERT INTO `aviso_contactos` VALUES (7, 15, 0, 'Yoooo', 'hola esto es una prueba', 'manuel@hotmail.com', '1235487966', 1, 0, NULL);
INSERT INTO `aviso_contactos` VALUES (8, 16, 0, 'hhdfdfdf', 'hhhh', 'mfigueroa@uni.pe', '5447782', 1, 0, NULL);
INSERT INTO `aviso_contactos` VALUES (9, 19, 0, 'hola', 'hola', 'hola@hotmail.com', '995777841', 0, 0, NULL);
INSERT INTO `aviso_contactos` VALUES (10, 17, 0, 'Manuel F', 'hola quiero clases', 'manuel.f27@hotmail.com', '956411224', 0, 0, NULL);
INSERT INTO `aviso_contactos` VALUES (11, 21, 0, 'Manuel F', 'Hola quiero clases de matematica', 'manuel.f27@hotmail.com', '956411224', 1, 1, 'Buenas tardes ;  dime en que temas necesitas apoyo y en d');
INSERT INTO `aviso_contactos` VALUES (12, 22, 0, 'Manuel', 'hola quiero clases', 'manuel@hotmail.com', '999999999', 1, 0, NULL);
INSERT INTO `aviso_contactos` VALUES (13, 21, 0, 'Pablo ', 'Buenas noches, Ayudas en Calculo Integral ?', 'pablo_15_95@hotmail.com', '989313232', 0, 0, NULL);
INSERT INTO `aviso_contactos` VALUES (14, 27, 0, 'esto se va a descontrolar', 'Oie zhy, khe zukulemto\nkhe rikashu', 'crisostomo@hotmail.com', '123456789', 0, 0, NULL);
INSERT INTO `aviso_contactos` VALUES (15, 58, 0, 'Manuel', 'hola esto es una prueba', 'manuel@correo.com', '987456321', 1, 0, NULL);
INSERT INTO `aviso_contactos` VALUES (16, 58, 0, 'juan', 'hola', 'juan@correo.com', '987654321', 1, 0, NULL);
INSERT INTO `aviso_contactos` VALUES (17, 60, 0, 'alfonso', 'hola', 'alfonso@gmail,com', '986253489', 1, 0, NULL);
INSERT INTO `aviso_contactos` VALUES (18, 64, 0, 'asdasd', 'sadasd', 'aadd@gmail.com', '9856221456', 0, 0, NULL);
INSERT INTO `aviso_contactos` VALUES (19, 61, 0, 'asdasd', 'asda', 'asdasd@gmail.com', '986326456', 0, 0, NULL);

-- --------------------------------------------------------

-- 
-- Estructura de tabla para la tabla `aviso_fotos`
-- 

CREATE TABLE `aviso_fotos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_img` varchar(20) DEFAULT NULL,
  `ext_img` varchar(10) DEFAULT NULL,
  `id_profesor` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8 AUTO_INCREMENT=37 ;

-- 
-- Volcar la base de datos para la tabla `aviso_fotos`
-- 

INSERT INTO `aviso_fotos` VALUES (7, '16_34189', 'jpeg', 16);
INSERT INTO `aviso_fotos` VALUES (8, '21_37811', 'jpeg', 21);
INSERT INTO `aviso_fotos` VALUES (9, '25_24075', 'jpeg', 25);
INSERT INTO `aviso_fotos` VALUES (10, '27_19113', 'jpeg', 27);
INSERT INTO `aviso_fotos` VALUES (11, '27_44945', 'jpeg', 27);
INSERT INTO `aviso_fotos` VALUES (12, '27_33608', 'jpeg', 27);
INSERT INTO `aviso_fotos` VALUES (13, '27_43961', 'jpeg', 27);
INSERT INTO `aviso_fotos` VALUES (14, '37_36852', 'png', 37);
INSERT INTO `aviso_fotos` VALUES (15, '38_30447', 'png', 38);
INSERT INTO `aviso_fotos` VALUES (16, '39_24143', 'png', 39);
INSERT INTO `aviso_fotos` VALUES (17, '40_10512', 'jpeg', 40);
INSERT INTO `aviso_fotos` VALUES (18, '43_13074', 'jpeg', 43);
INSERT INTO `aviso_fotos` VALUES (19, '44_40259', 'jpeg', 44);
INSERT INTO `aviso_fotos` VALUES (20, '45_45471', 'jpeg', 45);
INSERT INTO `aviso_fotos` VALUES (21, '46_41393', 'jpeg', 46);
INSERT INTO `aviso_fotos` VALUES (22, '47_30518', 'jpeg', 47);
INSERT INTO `aviso_fotos` VALUES (23, '48_35845', 'jpeg', 48);
INSERT INTO `aviso_fotos` VALUES (24, '44_28318', 'jpeg', 44);
INSERT INTO `aviso_fotos` VALUES (25, '49_20372', 'jpeg', 49);
INSERT INTO `aviso_fotos` VALUES (26, '50_19515', 'jpeg', 50);
INSERT INTO `aviso_fotos` VALUES (27, '44_33286', 'jpeg', 44);
INSERT INTO `aviso_fotos` VALUES (28, '51_38008', 'jpeg', 51);
INSERT INTO `aviso_fotos` VALUES (29, '54_25154', 'png', 54);
INSERT INTO `aviso_fotos` VALUES (30, '54_30204', 'png', 54);
INSERT INTO `aviso_fotos` VALUES (31, '25_22159', 'jpeg', 25);
INSERT INTO `aviso_fotos` VALUES (32, '56_17126', 'jpeg', 56);
INSERT INTO `aviso_fotos` VALUES (33, '0_22347', 'jpeg', 0);
INSERT INTO `aviso_fotos` VALUES (34, '0_49781', 'png', 0);
INSERT INTO `aviso_fotos` VALUES (35, '0_33514', 'png', 0);
INSERT INTO `aviso_fotos` VALUES (36, '57_16130', 'png', 57);

-- --------------------------------------------------------

-- 
-- Estructura de tabla para la tabla `avisos`
-- 

CREATE TABLE `avisos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_text` varchar(100) DEFAULT NULL,
  `referencia` varchar(200) DEFAULT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `img_previa` varchar(15) DEFAULT NULL,
  `img_previa_ext` varchar(5) DEFAULT NULL,
  `coor_latitud` double(13,10) DEFAULT NULL,
  `coor_longitud` double(13,10) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `contador_vistas` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8 AUTO_INCREMENT=71 ;

-- 
-- Volcar la base de datos para la tabla `avisos`
-- 

INSERT INTO `avisos` VALUES (17, 'Programacion_General', 'Programacion General', 'Av. 2 de mayo los Olivos', '17_18807', '', -11.9709820000, -77.0730670000, '2015-11-10 22:48:36', 21, 40);
INSERT INTO `avisos` VALUES (18, 'Clases_de_matematica', 'Metodolog', 'Av. Las Flores pdo. 19', '18_16349', '', -11.9902098658, -77.0152223836, '2015-11-11 07:20:06', 23, 2);
INSERT INTO `avisos` VALUES (19, 'Fisico', 'Estudiante de ing electronica', 'av. chimu', '19_14507', '', -12.0243786587, -76.9912112485, '2015-11-12 22:20:06', 29, 6);
INSERT INTO `avisos` VALUES (20, 'Fisico', 'Estudiante uni', 'av. Chimu', '20_13463', '', -12.0285760000, -77.0100940000, '2015-11-12 22:20:54', 29, 22);
INSERT INTO `avisos` VALUES (21, 'Clases_Particulares_de_Matematica__Fisica_', 'Matem', 'cruce avenida mayolo con universitaria ', '21_15720', '', -11.9964644610, -77.0868103531, '2015-11-14 11:38:38', 26, 16);
INSERT INTO `avisos` VALUES (22, 'Clase_de_Fisica_para_Universitarios', 'Clases de F', 'Universidad Nacional de Ingenier', '22_12457', '', -12.0238957677, -77.0474539920, '2015-11-14 11:47:53', 26, 22);
INSERT INTO `avisos` VALUES (23, 'Clases_particulares_de_Mate_1234_', 'Tengo m', 'Cruce de Jir', '23_15731', '', -12.0607671918, -77.0462354696, '2015-11-15 17:22:49', 11, 24);
INSERT INTO `avisos` VALUES (24, 'Clases_de_Circuitos_', 'Circuitos El', 'avenida mayolo con universitaria ', '24_15050', '', -11.9934840000, -77.0962410000, '2015-11-15 22:08:41', 26, 3);
INSERT INTO `avisos` VALUES (25, 'MATEMATICA_FISICA_UNI', 'soy estudiante de la UNIVERSIDAD NACIONAL DE INGENIER', 'jr. eloy espinoza ', '25_16684', 'jpeg', -11.9934840000, -77.0962410000, '2015-11-15 22:29:37', 32, 220);
INSERT INTO `avisos` VALUES (26, 'CLASES_PRACTICAS_Y_TEORICAS__EXITO_GARANTIZADO', 'Estudiante universitario de la carrera de Ingenier', 'AV. CANADA 301', '26_18192', '', -12.0676920000, -77.0170060000, '2015-11-15 23:34:00', 34, 11);
INSERT INTO `avisos` VALUES (27, 'PROFESOR_DE_MATEMATICAS', 'SOY ESTUDIANTE DE MATEMATICAS EN LA FACULTAD DE CIENCIAS MATEMATICAS DE LA UNMSM Y ADMINISTRADOR UNICO DEL GRUPO DE FACEBOOK: COMUNIDAD MATEMATICA PERUANA Y EL GRUPO DE ESTUDIO MEGACADEMIA.BRINDO CLAS', 'ASOC. PARAISO DORADO MZ B LT 3', '27_15593', 'jpeg', -11.9934840000, -77.0962410000, '2015-11-16 12:47:06', 36, 11);
INSERT INTO `avisos` VALUES (28, 'Profesor_particular_a_domicilio', 'Saludos, soy un profesor y dicto clases en todos los niveles acad', 'Av javier prado', '28_18166', '', -12.0859679594, -76.9729455461, '2015-11-16 17:49:16', 37, 4);
INSERT INTO `avisos` VALUES (29, 'Clases_a_domicilio', 'Saludos, soy un profesor y dicto clases en todos los niveles acad', 'Surco, San Borja,La Molina y alrededores', '29_19888', '', -12.1497670000, -77.0107810000, '2015-11-16 17:54:28', 37, 15);
INSERT INTO `avisos` VALUES (30, 'Fisica_preuniversitaria_y_de_colegio', 'Ense', 'Av Alfonso Ugarte S/N (Por Metro de Bre', '30_15915', 'jpeg', -12.0539263117, -77.0426627672, '2015-11-17 08:30:45', 39, 5);
INSERT INTO `avisos` VALUES (31, 'Fisica_1', 'Ense', 'Av Alfonso Ugarte S/N (por Metro de Bre', '31_11212', 'jpeg', -12.0610190000, -77.0486280000, '2015-11-17 08:33:28', 39, 5);
INSERT INTO `avisos` VALUES (32, 'Fisica_2', 'Ense', 'Av. Alfonso Ugarte S/N (por Metro de Bre', '32_12704', 'jpeg', -12.0610190000, -77.0486280000, '2015-11-17 08:34:07', 39, 5);
INSERT INTO `avisos` VALUES (33, 'Fisica_3', 'Ense', 'Av Alfonso Ugarte S/N (por Metro de Bre', '33_18518', 'jpeg', -12.0610190000, -77.0486280000, '2015-11-17 08:34:59', 39, 3);
INSERT INTO `avisos` VALUES (34, 'Termodinamica_', 'Ense', 'Av Alfonso Ugarte S/N (por Metro de Bre', '34_13648', 'jpeg', -12.0610190000, -77.0486280000, '2015-11-17 08:43:14', 39, 2);
INSERT INTO `avisos` VALUES (35, 'Estatica', 'Ense', 'Av Alfonso Ugarte S/N (por Metro de Bre', '35_19616', 'jpeg', -12.0610190000, -77.0486280000, '2015-11-17 08:45:26', 39, 4);
INSERT INTO `avisos` VALUES (37, 'Branco_Canales_Castillon', 'Aprender', 'Av. Cesar Vallejo 376 Urb. Lucyana, Carabayllo', '37_19394', 'png', -11.8492070000, -77.0306930000, '2015-11-17 18:20:46', 40, 1);
INSERT INTO `avisos` VALUES (38, 'Branco_Canales', 'aaaaaaaaaaaaaaaaaaaa', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaa', '38_12556', 'png', -11.8492070000, -77.0306930000, '2015-11-17 18:22:27', 40, 0);
INSERT INTO `avisos` VALUES (39, 'Yo', 'Me quiero', 'Av. Cesar Vallejo', '39_14815', 'png', -11.8492070000, -77.0306930000, '2015-11-17 18:24:11', 40, 1);
INSERT INTO `avisos` VALUES (41, 'Tutor_particular', 'Hola, soy un tutor particular especializado en reforzamientos para alumnos de todos los niveles acad', 'Surco, Miraflores, San Borja, La Molina, Chorrillos y distritos aleda', '41_11189', 'jpeg', -12.1497670000, -77.0107810000, '2015-11-17 21:55:10', 41, 9);
INSERT INTO `avisos` VALUES (42, 'Tutor_particular', 'Hola, soy un tutor particular que se especializa en dar clases de reforzamiento y ense', 'Surco, Miraflores, San Borja, La Molina, Chorrilllos y distritos aleda', '42_11911', 'jpeg', -12.1497670000, -77.0107810000, '2015-11-17 22:06:46', 41, 3);
INSERT INTO `avisos` VALUES (43, 'Experto_Matematico', 'Soy matem', 'Todo Lima', '43_15895', 'jpeg', -12.0786030000, -76.9137650000, '2015-11-20 10:38:19', 43, 2);
INSERT INTO `avisos` VALUES (44, 'matematico', '2922755', 'todo lima', '44_10449', 'jpeg', -12.1507730000, -76.9740450000, '2015-11-20 10:40:09', 43, 3);
INSERT INTO `avisos` VALUES (47, 'Matematico', 'Matematico profesional XD 2922755', 'Mz t lote 3 laderas de villa S.J.M.', '47_17291', 'jpeg', -12.1497670000, -77.0107810000, '2015-11-20 10:49:13', 43, 5);
INSERT INTO `avisos` VALUES (48, 'Matematico', 'Matem', 'Todo Lima', '48_14284', 'jpeg', -12.1497670000, -77.0107810000, '2015-11-20 12:24:38', 43, 1);
INSERT INTO `avisos` VALUES (49, 'matematico', 'matem', 'todo Lima', '49_19157', 'jpeg', -12.1173760000, -77.0394210000, '2015-11-20 12:33:18', 43, 7);
INSERT INTO `avisos` VALUES (50, 'matematico', '2922755', 'todo Lima', '50_19408', 'jpeg', -12.0786030000, -76.9137650000, '2015-11-20 12:37:03', 43, 2);
INSERT INTO `avisos` VALUES (51, 'Matematico', '2922755', 'todo lima', '51_16261', 'jpeg', -12.2064820000, -76.9535910000, '2015-11-20 12:40:57', 43, 1);
INSERT INTO `avisos` VALUES (52, 'Apoyo_academico', 'Todo sobre an', 'Lima 35', '52_15803', '', -12.1497670000, -77.0107810000, '2015-11-23 23:02:31', 20, 2);
INSERT INTO `avisos` VALUES (53, 'APOYO_ACADEMICO_Y_CLASES_PARTICULARES', 'APOYO ACAD', 'Todo Lima', '53_11075', '', -12.2064820000, -76.9535910000, '2015-11-23 23:03:10', 20, 0);
INSERT INTO `avisos` VALUES (54, 'Dicto_clases_de_Fisica_y_matematica', 'Soy estudiante de la PUCP de f', 'av. benavides 560', '54_16469', '', -12.1173760000, -77.0394210000, '2015-12-13 22:24:33', 45, 5);
INSERT INTO `avisos` VALUES (55, 'Aviso', 'Dicto clases de Matem', 'Av. Tom', '55_11354', '', -11.9915530000, -77.0512520000, '2016-03-26 20:02:10', 19, 0);
INSERT INTO `avisos` VALUES (56, 'matematica_fisica_UNI', 'estudiante de ing fisica de la UNIVERSIDAD NACIONAL DE INGENIERIA dicto clases a todo nivel en los siguientes cursos:FISICAaritmeticaalgebratrigonometriageometriaFISICA I,II,IIIcalculo IyIImatematica ', 'santa anita ', '56_15908', 'jpeg', -12.1886970000, -77.0128760000, '2016-04-28 14:18:23', 32, 0);
INSERT INTO `avisos` VALUES (58, '', 'Av. M&eacute;xico', 'Av. M&eacute;xico', '58_13851', 'png', -11.9603259432, -77.0678059539, '2016-05-09 13:34:35', 50, 5);
INSERT INTO `avisos` VALUES (59, '', 'UNI', 'Av. Habich cruce con Av. Tupac Amaru', '59_18833', 'png', -12.0234601559, -77.0502157743, '2016-05-09 13:36:53', 50, 4);
INSERT INTO `avisos` VALUES (60, '', 'Av. Tupac Amaru Km 7 1/2 altura al paredero La Merced. Parque Cruz de Motupe.', 'Urb. Carabayllo calle 18 N&deg;140 Lote 11', '60_18079', '', -11.9299805000, -77.0535410000, '2016-05-16 15:43:18', 51, 5);
INSERT INTO `avisos` VALUES (61, '', 'Avenida Tupac Amaru Km 7 1/2', 'Urbanizaci&ograve;n Carabayllo calle 18 numero 140 Lote 11', '61_15053', '', -11.9299805000, -77.0535410000, '2016-05-16 16:23:00', 51, 3);
INSERT INTO `avisos` VALUES (62, '', 'Paradero del metropolitano', 'Av Canaval y Moreyra 205', '62_19367', '', -12.0965954265, -77.0253752222, '2016-05-24 21:07:51', 50, 0);
INSERT INTO `avisos` VALUES (64, '', 'Comas - Urbanizaci&oacute;n carabayllo calle 18', 'Comas - Urbanizaci&oacute;n carabayllo calle 18', '64_16133', '', -11.9299805000, -77.0535410000, '2016-07-03 15:35:44', 51, 2);
INSERT INTO `avisos` VALUES (65, '', 'A 1 cuadra de la Via Expresa', 'Jr. Los Amatistas 201', '65_15963', '', -12.0773944814, -77.0271903974, '2016-08-23 15:25:33', 33, 1);
INSERT INTO `avisos` VALUES (66, '', 'A 1 cuadra de la Via Expresa', 'Jr. Los Amatistas 201', '66_12716', '', -12.0773944814, -77.0271903974, '2016-08-23 15:25:41', 33, 0);
INSERT INTO `avisos` VALUES (67, '', 'A 1 cuadra de la Via Expresa', 'Jr. Los Amatistas 201', '67_16242', '', -12.0773944814, -77.0271903974, '2016-08-23 15:28:14', 33, 0);
INSERT INTO `avisos` VALUES (68, '', 'A 1 cuadra de la Via Expresa', 'Jr. Los Amatistas 201', '68_10874', '', -12.0773944814, -77.0271903974, '2016-08-23 15:28:45', 33, 0);
INSERT INTO `avisos` VALUES (69, '', 'a 2 cuadras de la av arequipa', 'Jr. Carlos Arrieta 281', '69_18553', '', -12.0772621508, -77.0320210074, '2016-08-23 15:32:27', 33, 0);
INSERT INTO `avisos` VALUES (70, '', 'a 2 cuadras de la av arequipa', 'Jr. Carlos Arrieta 281', '70_11255', '', -12.0772621508, -77.0320210074, '2016-08-23 15:32:33', 33, 1);

-- --------------------------------------------------------

-- 
-- Estructura de tabla para la tabla `biblioteca`
-- 

CREATE TABLE `biblioteca` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `num_archivos` int(11) DEFAULT NULL,
  `id_img` varchar(15) DEFAULT NULL,
  `ext_img` varchar(5) DEFAULT NULL,
  `descripcion` varchar(200) DEFAULT NULL,
  `id_titulo` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

-- 
-- Volcar la base de datos para la tabla `biblioteca`
-- 

INSERT INTO `biblioteca` VALUES (1, 'Matematicas', 2, '1', 'png', 'matematicas pezweon', 'Matematicas');
INSERT INTO `biblioteca` VALUES (2, 'Computacion', 2, '2', 'png', 'computacion pezweon', 'Computacion');
INSERT INTO `biblioteca` VALUES (3, 'Fisica', 3, '3', 'jpg', 'fisica pezweon', 'Fisica');

-- --------------------------------------------------------

-- 
-- Estructura de tabla para la tabla `conocimiento_profe`
-- 

CREATE TABLE `conocimiento_profe` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_profesor` int(11) DEFAULT NULL,
  `id_conocimiento` int(11) DEFAULT NULL,
  `nivel` int(11) DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `cosntr_conocimiento` (`id_profesor`,`id_conocimiento`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8 AUTO_INCREMENT=66 ;

-- 
-- Volcar la base de datos para la tabla `conocimiento_profe`
-- 

INSERT INTO `conocimiento_profe` VALUES (1, 10, 1, 8);
INSERT INTO `conocimiento_profe` VALUES (2, 11, 1, 8);
INSERT INTO `conocimiento_profe` VALUES (3, 12, 1, 8);
INSERT INTO `conocimiento_profe` VALUES (4, 13, 1, 8);
INSERT INTO `conocimiento_profe` VALUES (5, 14, 1, 8);
INSERT INTO `conocimiento_profe` VALUES (6, 15, 1, 8);
INSERT INTO `conocimiento_profe` VALUES (7, 16, 1, 8);
INSERT INTO `conocimiento_profe` VALUES (8, 17, 1, 8);
INSERT INTO `conocimiento_profe` VALUES (9, 18, 1, 8);
INSERT INTO `conocimiento_profe` VALUES (10, 19, 1, 8);
INSERT INTO `conocimiento_profe` VALUES (11, 20, 1, 8);
INSERT INTO `conocimiento_profe` VALUES (12, 21, 1, 8);
INSERT INTO `conocimiento_profe` VALUES (13, 22, 1, 8);
INSERT INTO `conocimiento_profe` VALUES (14, 23, 1, 8);
INSERT INTO `conocimiento_profe` VALUES (15, 24, 1, 8);
INSERT INTO `conocimiento_profe` VALUES (16, 25, 1, 8);
INSERT INTO `conocimiento_profe` VALUES (17, 26, 1, 8);
INSERT INTO `conocimiento_profe` VALUES (18, 27, 1, 8);
INSERT INTO `conocimiento_profe` VALUES (19, 28, 1, 8);
INSERT INTO `conocimiento_profe` VALUES (20, 29, 1, 8);
INSERT INTO `conocimiento_profe` VALUES (21, 30, 1, 8);
INSERT INTO `conocimiento_profe` VALUES (22, 31, 1, 8);
INSERT INTO `conocimiento_profe` VALUES (23, 32, 1, 8);
INSERT INTO `conocimiento_profe` VALUES (24, 33, 1, 10);
INSERT INTO `conocimiento_profe` VALUES (25, 34, 1, 8);
INSERT INTO `conocimiento_profe` VALUES (26, 35, 1, 8);
INSERT INTO `conocimiento_profe` VALUES (27, 36, 1, 8);
INSERT INTO `conocimiento_profe` VALUES (28, 37, 1, 8);
INSERT INTO `conocimiento_profe` VALUES (29, 38, 1, 8);
INSERT INTO `conocimiento_profe` VALUES (30, 39, 1, 8);
INSERT INTO `conocimiento_profe` VALUES (31, 40, 1, 8);
INSERT INTO `conocimiento_profe` VALUES (32, 41, 1, 8);
INSERT INTO `conocimiento_profe` VALUES (33, 42, 1, 8);
INSERT INTO `conocimiento_profe` VALUES (34, 43, 1, 8);
INSERT INTO `conocimiento_profe` VALUES (35, 44, 1, 8);
INSERT INTO `conocimiento_profe` VALUES (36, 45, 1, 8);
INSERT INTO `conocimiento_profe` VALUES (37, 46, 1, 8);
INSERT INTO `conocimiento_profe` VALUES (38, 47, 1, 8);
INSERT INTO `conocimiento_profe` VALUES (39, 48, 1, 8);
INSERT INTO `conocimiento_profe` VALUES (40, 49, 1, 8);
INSERT INTO `conocimiento_profe` VALUES (41, 50, 42, 8);
INSERT INTO `conocimiento_profe` VALUES (43, 50, 3, 9);
INSERT INTO `conocimiento_profe` VALUES (44, 50, 33, 8);
INSERT INTO `conocimiento_profe` VALUES (45, 50, 45, 9);
INSERT INTO `conocimiento_profe` VALUES (46, 50, 44, 9);
INSERT INTO `conocimiento_profe` VALUES (47, 10, 46, 1);
INSERT INTO `conocimiento_profe` VALUES (49, 10, 47, 1);
INSERT INTO `conocimiento_profe` VALUES (51, 10, 49, 6);
INSERT INTO `conocimiento_profe` VALUES (52, 50, 39, 9);
INSERT INTO `conocimiento_profe` VALUES (53, 50, 49, 9);
INSERT INTO `conocimiento_profe` VALUES (54, 51, 7, 1);
INSERT INTO `conocimiento_profe` VALUES (55, 51, 2, 1);
INSERT INTO `conocimiento_profe` VALUES (56, 51, 3, 1);
INSERT INTO `conocimiento_profe` VALUES (58, 33, 51, 10);
INSERT INTO `conocimiento_profe` VALUES (59, 33, 44, 10);
INSERT INTO `conocimiento_profe` VALUES (60, 33, 54, 10);
INSERT INTO `conocimiento_profe` VALUES (61, 33, 4, 8);
INSERT INTO `conocimiento_profe` VALUES (62, 33, 13, 8);
INSERT INTO `conocimiento_profe` VALUES (63, 33, 55, 8);
INSERT INTO `conocimiento_profe` VALUES (64, 33, 56, 8);
INSERT INTO `conocimiento_profe` VALUES (65, 33, 39, 8);

-- --------------------------------------------------------

-- 
-- Estructura de tabla para la tabla `conocimientos`
-- 

CREATE TABLE `conocimientos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `nombre_busqueda` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `const_nombre_busqueda` (`nombre_busqueda`)
) ENGINE=MyISAM AUTO_INCREMENT=60 DEFAULT CHARSET=utf8 AUTO_INCREMENT=60 ;

-- 
-- Volcar la base de datos para la tabla `conocimientos`
-- 

INSERT INTO `conocimientos` VALUES (1, 'Matematicas', 'matematicas');
INSERT INTO `conocimientos` VALUES (2, 'F&iacute;sica', 'fisica');
INSERT INTO `conocimientos` VALUES (3, 'Matem&aacute;tica B&aacute;sica', 'matematica basica');
INSERT INTO `conocimientos` VALUES (4, 'F&iacute;sica Elemental', 'fisica elemental');
INSERT INTO `conocimientos` VALUES (5, 'Ciencias', 'Ciencias');
INSERT INTO `conocimientos` VALUES (7, 'Matem&aacute;tica 2', 'matematica 2');
INSERT INTO `conocimientos` VALUES (8, 'Lenguaje', 'Lenguaje');
INSERT INTO `conocimientos` VALUES (9, 'Historia', 'Historia');
INSERT INTO `conocimientos` VALUES (10, 'Historia del Per&uacute;', 'historia del peru');
INSERT INTO `conocimientos` VALUES (11, 'Psicolog&iacute;a', 'psicologia');
INSERT INTO `conocimientos` VALUES (13, 'Qu&iacute;mica', 'quimica');
INSERT INTO `conocimientos` VALUES (50, '&Aacute;lgebra Lineal', 'Algebra Lineal');
INSERT INTO `conocimientos` VALUES (39, 'C&aacute;lculo Multivariable', 'calculo multivariable');
INSERT INTO `conocimientos` VALUES (51, '&Aacute;lgebra', 'Algebra');
INSERT INTO `conocimientos` VALUES (43, 'Ecuaciones Diferenciales', 'Ecuaciones Diferenciales');
INSERT INTO `conocimientos` VALUES (44, 'Trigonometr&iacute;a', 'trigonometria');
INSERT INTO `conocimientos` VALUES (49, 'Geometr&iacute;a', 'Geometria');
INSERT INTO `conocimientos` VALUES (52, 'Geometr&iacute;a Anal&iacute;tica', 'Geometria Analitica');
INSERT INTO `conocimientos` VALUES (53, 'L&oacute;gica y Teor&iacute;a de Conjuntos', 'Logica y Teoria de Conjuntos');
INSERT INTO `conocimientos` VALUES (54, 'Aritm&eacute;tica', 'Aritmetica');
INSERT INTO `conocimientos` VALUES (55, 'C&aacute;lculo Diferencial', 'Calculo Diferencial');
INSERT INTO `conocimientos` VALUES (56, 'C&aacute;lculo Integral', 'Calculo Integral');
INSERT INTO `conocimientos` VALUES (57, 'Number Theory', 'Number Theory');
INSERT INTO `conocimientos` VALUES (58, 'Teor&iacute;a de los N&uacute;meros', 'Teoria de los Numeros');
INSERT INTO `conocimientos` VALUES (59, 'Filosof&iacute;a', 'Filosofia');

-- --------------------------------------------------------

-- 
-- Estructura de tabla para la tabla `contacto`
-- 

CREATE TABLE `contacto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `direccion` varchar(50) DEFAULT NULL,
  `telefono` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

-- 
-- Volcar la base de datos para la tabla `contacto`
-- 

INSERT INTO `contacto` VALUES (1, 'Lima - Per&uacute;', '+51 960 678 016', 'contacto@invictos.la');

-- --------------------------------------------------------

-- 
-- Estructura de tabla para la tabla `distritos`
-- 

CREATE TABLE `distritos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_provincia` int(11) NOT NULL DEFAULT '0',
  `id_departamento` int(11) NOT NULL DEFAULT '0',
  `nombre` varchar(60) DEFAULT NULL,
  `coor_latitud` double(13,10) DEFAULT NULL,
  `coor_longitud` double(13,10) DEFAULT NULL,
  PRIMARY KEY (`id`,`id_provincia`,`id_departamento`)
) ENGINE=InnoDB AUTO_INCREMENT=97 DEFAULT CHARSET=utf8 AUTO_INCREMENT=97 ;

-- 
-- Volcar la base de datos para la tabla `distritos`
-- 

INSERT INTO `distritos` VALUES (49, 1, 1, 'Ancon', -11.7725870000, -77.1553190000);
INSERT INTO `distritos` VALUES (50, 1, 1, 'Ate', -12.0215240000, -76.8662420000);
INSERT INTO `distritos` VALUES (51, 1, 1, 'Barranco', -12.1416690000, -77.0163980000);
INSERT INTO `distritos` VALUES (52, 1, 1, 'Bellavista', -12.0582390000, -77.1056040000);
INSERT INTO `distritos` VALUES (53, 1, 1, 'Bre&ntilde;a', -12.0610190000, -77.0486280000);
INSERT INTO `distritos` VALUES (54, 1, 1, 'Carabayllo', -11.8492070000, -77.0306930000);
INSERT INTO `distritos` VALUES (55, 1, 1, 'Cercado del Callao', -12.0335280000, -77.1316760000);
INSERT INTO `distritos` VALUES (56, 1, 1, 'Cercado de Lima', -12.0475470000, -77.0643120000);
INSERT INTO `distritos` VALUES (57, 1, 1, 'Chaclacayo', -11.9844160000, -76.7704280000);
INSERT INTO `distritos` VALUES (58, 1, 1, 'Chorrillos', -12.1858030000, -77.0223210000);
INSERT INTO `distritos` VALUES (59, 1, 1, 'Carmen de la Legua', -12.0399500000, -77.0954490000);
INSERT INTO `distritos` VALUES (60, 1, 1, 'Comas', -11.9331960000, -77.0672530000);
INSERT INTO `distritos` VALUES (61, 1, 1, 'El Agustino', -12.0346200000, -76.9925580000);
INSERT INTO `distritos` VALUES (62, 1, 1, 'Independencia', -11.9915530000, -77.0512520000);
INSERT INTO `distritos` VALUES (63, 1, 1, 'Jesus Mar&iacute;a', -12.0779730000, -77.0483700000);
INSERT INTO `distritos` VALUES (64, 1, 1, 'La Punta', -12.0714270000, -77.1628010000);
INSERT INTO `distritos` VALUES (65, 1, 1, 'Lince', -12.0828410000, -77.0369120000);
INSERT INTO `distritos` VALUES (66, 1, 1, 'Lurigancho-Chosica', -12.0024470000, -76.9174280000);
INSERT INTO `distritos` VALUES (67, 1, 1, 'Lurin', -12.2732510000, -76.8705060000);
INSERT INTO `distritos` VALUES (68, 1, 1, 'Miraflores', -12.1173760000, -77.0394210000);
INSERT INTO `distritos` VALUES (69, 1, 1, 'Magdalena del Mar', -12.0957240000, -77.0642920000);
INSERT INTO `distritos` VALUES (70, 1, 1, 'La Molina', -12.0786030000, -76.9137650000);
INSERT INTO `distritos` VALUES (71, 1, 1, 'Los Olivos', -11.9709820000, -77.0730670000);
INSERT INTO `distritos` VALUES (72, 1, 1, 'Pachacamac', -12.2301380000, -76.8601930000);
INSERT INTO `distritos` VALUES (73, 1, 1, 'Pueblo Libre', -12.0704620000, -77.0630900000);
INSERT INTO `distritos` VALUES (74, 1, 1, 'La Perla', -12.0703780000, -77.1172070000);
INSERT INTO `distritos` VALUES (75, 1, 1, 'Puente Piedra', -11.8670990000, -77.0774080000);
INSERT INTO `distritos` VALUES (76, 1, 1, 'Pucusana', -12.4639830000, -76.7699790000);
INSERT INTO `distritos` VALUES (77, 1, 1, 'Punta Hermosa', -12.3138400000, -76.8014070000);
INSERT INTO `distritos` VALUES (78, 1, 1, 'Punta Negra', -12.3654900000, -76.7911080000);
INSERT INTO `distritos` VALUES (79, 1, 1, 'R&iacute;mac', -12.0352910000, -77.0278140000);
INSERT INTO `distritos` VALUES (80, 1, 1, 'Santa Maria del mar', -12.4144480000, -76.7642480000);
INSERT INTO `distritos` VALUES (81, 1, 1, 'San Bartolo', -12.3876230000, -76.7683950000);
INSERT INTO `distritos` VALUES (82, 1, 1, 'San Borja', -12.1008440000, -76.9946040000);
INSERT INTO `distritos` VALUES (83, 1, 1, 'Santa Anita', -12.1886970000, -77.0128760000);
INSERT INTO `distritos` VALUES (84, 1, 1, 'Santa Rosa', -11.8077070000, -77.1645620000);
INSERT INTO `distritos` VALUES (85, 1, 1, 'San Isidro', -12.0992490000, -77.0352020000);
INSERT INTO `distritos` VALUES (86, 1, 1, 'San Juan de Lurigancho', -12.0285760000, -77.0100940000);
INSERT INTO `distritos` VALUES (87, 1, 1, 'San Juan de Miraflores', -12.1507730000, -76.9740450000);
INSERT INTO `distritos` VALUES (88, 1, 1, 'San Luis', -12.0754560000, -76.9953270000);
INSERT INTO `distritos` VALUES (89, 1, 1, 'San Miguel', -12.0773440000, -77.0920220000);
INSERT INTO `distritos` VALUES (90, 1, 1, 'San Mart&iacute;n de Porres', -11.9934840000, -77.0962410000);
INSERT INTO `distritos` VALUES (91, 1, 1, 'Surco', -12.1497670000, -77.0107810000);
INSERT INTO `distritos` VALUES (92, 1, 1, 'Surquillo', -12.1162010000, -77.0193230000);
INSERT INTO `distritos` VALUES (93, 1, 1, 'Ventanilla', -11.8878450000, -77.1268240000);
INSERT INTO `distritos` VALUES (94, 1, 1, 'La Victoria', -12.0676920000, -77.0170060000);
INSERT INTO `distritos` VALUES (95, 1, 1, 'Villa Mar&iacute;a del Triunfo', -12.1591640000, -76.9287260000);
INSERT INTO `distritos` VALUES (96, 1, 1, 'Villa el Salvador', -12.2064820000, -76.9535910000);

-- --------------------------------------------------------

-- 
-- Estructura de tabla para la tabla `grl_tbl_users`
-- 

CREATE TABLE `grl_tbl_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_fb` varchar(20) DEFAULT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `correo` varchar(50) DEFAULT NULL,
  `password` blob,
  `cod_activacion` varchar(15) DEFAULT NULL,
  `usuario_activo` tinyint(1) DEFAULT NULL,
  `id_img` varchar(10) DEFAULT NULL,
  `ext_img` varchar(10) DEFAULT NULL,
  `presentacion` varchar(200) DEFAULT NULL,
  `profesion` varchar(50) DEFAULT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `firma` varchar(200) DEFAULT NULL,
  `moneda` varchar(10) DEFAULT NULL,
  `costo` float DEFAULT NULL,
  `especialidad` int(11) DEFAULT NULL,
  `video` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8 AUTO_INCREMENT=56 ;

-- 
-- Volcar la base de datos para la tabla `grl_tbl_users`
-- 

INSERT INTO `grl_tbl_users` VALUES (10, NULL, 'Dante Vidal', 'dantejeffar@gmail.com', '0��|��/;M�h�AG�', '123456789', 1, '10_41891', 'jpeg', 'Si me contratas te hago aprobar hasta los ex&aacute;menes de sangre.', 'Ingeniero', '1989-12-13', 'BLA', 'soles', 50, NULL, 'youtube');
INSERT INTO `grl_tbl_users` VALUES (11, NULL, 'José Asencio Soto', 'asenciosoto.jose@gmail.com', '��3o�i�b��s�5�H', '465276272867438', 1, NULL, NULL, 'Alumno de ing. industrial de la UNI, ocupé primeros puestos en el ex de admisión. Tengo más de 3 años de experiencia dictando cursos, es algo que me gusta hacer y se que conmigo aprenderás. Aprende ya', NULL, NULL, NULL, 'soles', 25, NULL, '');
INSERT INTO `grl_tbl_users` VALUES (12, NULL, 'Nuevo Usuario', 'manuel@hotmail.com', '0��|��/;M�h�AG�', '423982355984632', 0, NULL, NULL, NULL, NULL, NULL, NULL, 'soles', 25, NULL, '');
INSERT INTO `grl_tbl_users` VALUES (13, NULL, 'Nuevo Usuario', 'dfdsfds', 'U8�� ;��C���5l�', '815897696036770', 0, NULL, NULL, NULL, NULL, NULL, NULL, 'soles', 25, NULL, '');
INSERT INTO `grl_tbl_users` VALUES (17, NULL, 'Nuevo Usuario', 'knawercomunity@gmail.com', '0��|��/;M�h�AG�', '858161543733649', 1, NULL, NULL, NULL, NULL, NULL, NULL, 'soles', 25, NULL, '');
INSERT INTO `grl_tbl_users` VALUES (18, NULL, 'Manuel F', 'manuel.f27@hotmail.com', 'j�r�� ;�.e���5', '319315453418736', 1, '18_11291', 'jpeg', 'Fundador y creador de Invictos.', NULL, NULL, NULL, 'soles', 25, NULL, '');
INSERT INTO `grl_tbl_users` VALUES (19, NULL, 'Nuevo Usuario', 'mfigueroa@uni.pe', '0��|��/;M�h�AG�', '486134758270893', 1, NULL, NULL, NULL, NULL, NULL, NULL, 'soles', 25, NULL, '');
INSERT INTO `grl_tbl_users` VALUES (20, NULL, 'Nuevo Usuario', 'daniel.chirre.uni@gmail.com', '3u²�"�!|�x��� ', '285961301358291', 1, NULL, NULL, NULL, NULL, NULL, NULL, 'soles', 25, NULL, '');
INSERT INTO `grl_tbl_users` VALUES (21, NULL, 'Nuevo Usuario', 'oscar_chinga@hotmail.com', '0��|��/;M�h�AG�', '594223072548834', 1, NULL, NULL, NULL, NULL, NULL, NULL, 'soles', 25, NULL, '');
INSERT INTO `grl_tbl_users` VALUES (22, NULL, 'Nuevo Usuario', 'abraham_hermit@hotmail.com', '�F<o�@�''�|�c�+', '606867331517986', 0, NULL, NULL, NULL, NULL, NULL, NULL, 'soles', 25, NULL, '');
INSERT INTO `grl_tbl_users` VALUES (23, NULL, 'Nuevo Usuario', 'luiseduardolopezfuster18@hotmail.com', 'WX X�f�����Etuщ(#$o���C��U�u�', '276213357539008', 1, NULL, NULL, NULL, NULL, NULL, NULL, 'soles', 25, NULL, '');
INSERT INTO `grl_tbl_users` VALUES (24, NULL, 'Nuevo Usuario', 'jpalacios@hotmail.com', '���S��v	AV7''*�', '807376415741560', 0, NULL, NULL, NULL, NULL, NULL, NULL, 'soles', 25, NULL, '');
INSERT INTO `grl_tbl_users` VALUES (25, NULL, 'Nuevo Usuario', 'jlpc2080@gmail.com', '���S��v	AV7''*�', '335221392856665', 1, NULL, NULL, NULL, NULL, NULL, NULL, 'soles', 25, NULL, '');
INSERT INTO `grl_tbl_users` VALUES (26, NULL, 'Juan Chinga', 'j0bj4n@gmail.com', 'Ww�gE_I�x�t�VɌ', '152943384153868', 1, '26_48320', 'jpeg', 'Especialista en dictado de cursos para universitarios :Matemática Física Química Circuitos EléctricosCircuitos ElectrónicosEstadística y Probabilidades', NULL, NULL, NULL, 'soles', 25, NULL, '');
INSERT INTO `grl_tbl_users` VALUES (27, NULL, 'Nuevo Usuario', 'vanez.19@hotmail.com', '���ޞKZ?�w��nb', '133511348870761', 1, '27_31352', 'jpeg', NULL, NULL, NULL, NULL, 'soles', 25, NULL, '');
INSERT INTO `grl_tbl_users` VALUES (28, NULL, 'Nuevo Usuario', 'rosshg999@gmail.com', 'o����ü���F��}', '824831993453487', 1, NULL, NULL, NULL, NULL, NULL, NULL, 'soles', 25, NULL, '');
INSERT INTO `grl_tbl_users` VALUES (29, NULL, 'Nuevo Usuario', 'rafael048@hotmail.com', '���{~�pL[K�N��', '545107814141898', 1, NULL, NULL, NULL, NULL, NULL, NULL, 'soles', 25, NULL, '');
INSERT INTO `grl_tbl_users` VALUES (30, NULL, 'Nuevo Usuario', 'alex_lopezvega_97@hotmai.com', '�W����ɜ�ґA%m', '656214897530905', 0, NULL, NULL, NULL, NULL, NULL, NULL, 'soles', 25, NULL, '');
INSERT INTO `grl_tbl_users` VALUES (31, NULL, 'Nuevo Usuario', 'crisrapero.12@hotmail.com', '��|�ۮ�\r���^�', '368047070654673', 0, NULL, NULL, NULL, NULL, NULL, NULL, 'soles', 25, NULL, '');
INSERT INTO `grl_tbl_users` VALUES (32, NULL, 'kewin', 'roou_23@hotmail.com', '�=\0�R���<����D', '268426030714414', 1, '32_38959', 'jpeg', 'estudiante de la facultad de ciencia especialista como profesor a domicilio de matemática y ciencias responsable y puntual. ', NULL, NULL, NULL, 'soles', 25, NULL, '');
INSERT INTO `grl_tbl_users` VALUES (33, NULL, 'Gino &Ntilde;aupari', 'xxgino999xx@gmail.com', '=X}�ٟ������M\r�z', '469726179449291', 1, NULL, NULL, '', 'Ingeniero', NULL, '', 'soles', 15, NULL, '');
INSERT INTO `grl_tbl_users` VALUES (34, NULL, 'Nuevo Usuario', 'alvaro2792@gmail.com', 'JXb��K�SV\\����', '723688202171652', 1, NULL, NULL, NULL, NULL, NULL, NULL, 'soles', 25, NULL, '');
INSERT INTO `grl_tbl_users` VALUES (35, NULL, 'Nuevo Usuario', 'briguit18@gmail.com', '��2?�|���4�g[', '867377208154113', 0, NULL, NULL, NULL, NULL, NULL, NULL, 'soles', 25, NULL, '');
INSERT INTO `grl_tbl_users` VALUES (36, NULL, 'SERGIO FERNANDEZ', 'gianfran2108@gmail.com', 'I�''YA��4�|q5�t��', '388552723423946', 1, '36_27469', 'jpeg', NULL, NULL, NULL, NULL, 'soles', 25, NULL, 'https://www.youtube.com/watch?v=7bcDj_0R3Vs&list=UUVKcpxU5DnJYID0j-Gs7J0A');
INSERT INTO `grl_tbl_users` VALUES (37, NULL, 'Nuevo Usuario', 'miguel_543_gd@hotmail.com', ';��FB"���t�i6�f�', '203847311520877', 1, NULL, NULL, NULL, NULL, NULL, NULL, 'soles', 25, NULL, '');
INSERT INTO `grl_tbl_users` VALUES (38, NULL, 'Nuevo Usuario', 'oscar123_729@hotmail.com', 'ud�)�u������Fn�', '617426093634815', 0, NULL, NULL, NULL, NULL, NULL, NULL, 'soles', 25, NULL, '');
INSERT INTO `grl_tbl_users` VALUES (39, NULL, 'Paul García', 'jdonayregarcia@hotmail.com', '�][@�\Z����e$UJ', '490752288438238', 1, '39_16736', 'jpeg', 'Físico e Ingeniero Mecánico de profesión.Amplia experiencia en la enseñanza de Física a todo nivel y de temas de especialidad.', NULL, NULL, NULL, 'soles', 25, NULL, '');
INSERT INTO `grl_tbl_users` VALUES (40, NULL, 'Nuevo Usuario', 'branco_cc@hotmail.com', '�v����:@��\0K5O', '491017496974735', 1, NULL, NULL, NULL, NULL, NULL, NULL, 'soles', 25, NULL, '');
INSERT INTO `grl_tbl_users` VALUES (41, NULL, 'Denmark Abanto', '92.denmark.92@gmail.com', '�Wy��q�?a��', '824904982346281', 1, '41_49971', 'jpeg', 'Soy un alumno cursando la mitad de la carrera de ingeniería mecánica en la UNI que se dedica a las clases particulares del área de matemáticas  en general.', NULL, NULL, NULL, 'soles', 25, NULL, '');
INSERT INTO `grl_tbl_users` VALUES (42, NULL, 'Nuevo Usuario', 'miyeve', '�$O�\r���؍�A��', '608704023160945', 0, NULL, NULL, NULL, NULL, NULL, NULL, 'soles', 25, NULL, '');
INSERT INTO `grl_tbl_users` VALUES (43, NULL, 'Miguel Yépez', 'miyeve_18@hotmail.com', '�[��Sm���>!�y��', '113235901733827', 1, '43_37185', 'jpeg', 'Matemático profesional 2922755', NULL, NULL, NULL, 'soles', 25, NULL, '');
INSERT INTO `grl_tbl_users` VALUES (44, NULL, 'Nuevo Usuario', 'tauro_24_97@hotmail.com', '����\0�Kl-5�G�[��', '573811837659935', 1, NULL, NULL, NULL, NULL, NULL, NULL, 'soles', 25, NULL, '');
INSERT INTO `grl_tbl_users` VALUES (45, NULL, 'Javier', 'Javier.irigoyen@pucp.pe ', '�ݚb���	�''��o��', '229803493164092', 1, NULL, NULL, 'Soy estudiante de Fisica en la PUCP de 6to ciclo', NULL, NULL, NULL, 'soles', 25, NULL, '');
INSERT INTO `grl_tbl_users` VALUES (46, NULL, 'Nuevo Usuario', 'profesor@correo.com', '0��|��/;M�h�AG�', '210767483670430', 0, NULL, NULL, NULL, NULL, NULL, NULL, 'soles', 25, NULL, '');
INSERT INTO `grl_tbl_users` VALUES (47, NULL, 'Nuevo Usuario', 'docente@correo.com', '0��|��/;M�h�AG�', '778697059524762', 0, NULL, NULL, NULL, NULL, NULL, NULL, 'soles', 25, NULL, '');
INSERT INTO `grl_tbl_users` VALUES (48, NULL, 'Nuevo Usuario', 'rensoedduar@gmail.com', 'M�4T#��j{��O8k', '140633819629469', 1, NULL, NULL, NULL, NULL, NULL, NULL, 'soles', 25, NULL, '');
INSERT INTO `grl_tbl_users` VALUES (49, NULL, 'Nuevo Usuario', 'alexander.villar@hotmail.com', '�\Z{�@t/Nǖ;:3�', '319986613511755', 1, NULL, NULL, NULL, NULL, NULL, NULL, 'soles', 25, NULL, '');
INSERT INTO `grl_tbl_users` VALUES (50, NULL, 'Manuel F', 'mfigueroa@uni.edu.pe', '0��|��/;M�h�AG�', '751336854563307', 1, '50_34105', 'png', 'Me gusta compartir conocimientos y construir tecnolog&iacute;a.', '', NULL, '', 'soles', 25, NULL, '');
INSERT INTO `grl_tbl_users` VALUES (51, NULL, 'Nuevo Usuario', 'SaravErick@gmail.com', '?_��88�9�Og\\D�', '654187762445613', 1, NULL, NULL, '', 'Matematica', NULL, '', 'soles', 25, NULL, '');
INSERT INTO `grl_tbl_users` VALUES (52, NULL, 'Nuevo Usuario', 'manuel@email.com', '0��|��/;M�h�AG�', '146925899766359', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `grl_tbl_users` VALUES (53, NULL, 'Nuevo Usuario', 'jonathangerson13@gmail.com', '+��c:P�Ï�coĎ', '147767781527637', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `grl_tbl_users` VALUES (54, NULL, 'Nuevo Usuario', 'igonzalesp@uni.pe', '�qOv�80�T���g�', '682508178310551', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `grl_tbl_users` VALUES (55, NULL, 'Nuevo Usuario', 'estrella.encalada@gmail.com', '�qnt��(�[c�V', '682004970618365', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

-- 
-- Estructura de tabla para la tabla `info_empresa`
-- 

CREATE TABLE `info_empresa` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quienes_somos` varchar(1000) DEFAULT NULL,
  `mision` varchar(1000) DEFAULT NULL,
  `vision` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

-- 
-- Volcar la base de datos para la tabla `info_empresa`
-- 

INSERT INTO `info_empresa` VALUES (1, 'Apasionados por compartir conocimiento y construir tecnolog&iacute;a.\r\n', 'Facilitar la difusi&oacute;n de conocimientos, generando experiencias positivas entre nuestros usuarios a nivel global.\r\n', 'Construimos tecnolog&iacute;a protagonista del gran cambio en la educaci&oacute;n.\r\n');

-- --------------------------------------------------------

-- 
-- Estructura de tabla para la tabla `lugares_profesor`
-- 

CREATE TABLE `lugares_profesor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_profesor` int(11) DEFAULT NULL,
  `coor_latitud` double(13,10) DEFAULT NULL,
  `coor_longitud` double(13,10) DEFAULT NULL,
  `referencia` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_profesor` (`id_profesor`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- 
-- Volcar la base de datos para la tabla `lugares_profesor`
-- 


-- --------------------------------------------------------

-- 
-- Estructura de tabla para la tabla `profesor_fotos`
-- 

CREATE TABLE `profesor_fotos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_img` varchar(20) DEFAULT NULL,
  `ext_img` varchar(10) DEFAULT NULL,
  `id_profesor` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_profesor` (`id_profesor`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- 
-- Volcar la base de datos para la tabla `profesor_fotos`
-- 


-- --------------------------------------------------------

-- 
-- Estructura de tabla para la tabla `prueba`
-- 

CREATE TABLE `prueba` (
  `campo1` int(11) DEFAULT NULL,
  `campo2` int(11) DEFAULT NULL,
  `campo3` varchar(20) DEFAULT NULL,
  `campo4` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 
-- Volcar la base de datos para la tabla `prueba`
-- 

INSERT INTO `prueba` VALUES (123, NULL, NULL, NULL);
INSERT INTO `prueba` VALUES (123, NULL, NULL, NULL);

-- --------------------------------------------------------

-- 
-- Estructura de tabla para la tabla `rangos_costos`
-- 

CREATE TABLE `rangos_costos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `min` int(11) DEFAULT NULL,
  `max` int(11) DEFAULT NULL,
  `texto` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

-- 
-- Volcar la base de datos para la tabla `rangos_costos`
-- 

INSERT INTO `rangos_costos` VALUES (1, 0, 400, 'Desde S/.400');
INSERT INTO `rangos_costos` VALUES (2, 400, 800, 'Desde S./400 hasta S');
INSERT INTO `rangos_costos` VALUES (3, 800, 1200, 'Desde S/.800 hasta S');
INSERT INTO `rangos_costos` VALUES (4, 1200, 1600, 'Desde S/.1200 hasta ');
INSERT INTO `rangos_costos` VALUES (5, 1600, 2000, 'Desde S/.1600 hasta ');
INSERT INTO `rangos_costos` VALUES (6, 2000, 2400, 'Desde S/.2000 hasta ');

-- --------------------------------------------------------

-- 
-- Estructura de tabla para la tabla `recurso_profesor`
-- 

CREATE TABLE `recurso_profesor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_profesor` int(11) DEFAULT NULL,
  `titulo` varchar(100) DEFAULT NULL,
  `descripcion` varchar(500) DEFAULT NULL,
  `link_externo` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=90 DEFAULT CHARSET=utf8 AUTO_INCREMENT=90 ;

-- 
-- Volcar la base de datos para la tabla `recurso_profesor`
-- 

INSERT INTO `recurso_profesor` VALUES (65, 28, 'prueba', 'pruebate este', 'www.youtube.com');
INSERT INTO `recurso_profesor` VALUES (68, 50, 'DEL VALLE - &Aacute;lgebra Lineal - 1&ordm; Ed.', 'Libro en PDF', 'https://drive.google.com/uc?export=download&amp;confirm=no_antivirus&amp;id=0ByJGw5Vl7ldCVW9nWm1LaXhDdUE');
INSERT INTO `recurso_profesor` VALUES (69, 50, 'GROSSMAN - &Aacute;lgebra Lineal - 6&ordm; Ed.', 'GROSSMAN - &Aacute;lgebra Lineal - 6&ordm; Ed.', 'https://drive.google.com/uc?export=download&amp;confirm=no_antivirus&amp;id=0ByJGw5Vl7ldCeURYR0ZkTjFERU0');
INSERT INTO `recurso_profesor` VALUES (70, 50, 'GROSSMAN - &Aacute;lgebra Lineal - 7&ordm; Ed.', 'GROSSMAN - &Aacute;lgebra Lineal - 7&ordm; Ed.', 'https://drive.google.com/uc?export=download&amp;confirm=no_antivirus&amp;id=0ByJGw5Vl7ldCTXNYY25DbzE1VmM');
INSERT INTO `recurso_profesor` VALUES (71, 50, 'GROSSMAN, FLORES - &Aacute;lgebra Lineal - 7&ordm; Ed.', 'GROSSMAN, FLORES - &Aacute;lgebra Lineal - 7&ordm; Ed.', 'https://drive.google.com/uc?export=download&amp;confirm=no_antivirus&amp;id=0ByJGw5Vl7ldCMlZnUlNtbEVYY2s');
INSERT INTO `recurso_profesor` VALUES (72, 50, 'JOHNSSON, STEFFENSEN - Algebra y Trigonometria con Aplicaciones', 'JOHNSSON, STEFFENSEN - Algebra y Trigonometria con Aplicaciones', 'https://drive.google.com/uc?export=download&amp;confirm=no_antivirus&amp;id=0ByJGw5Vl7ldCX0xyckt0U013U0k');
INSERT INTO `recurso_profesor` VALUES (73, 50, 'KOLMAN, HILL - &Aacute;lgebra Lineal - 8&ordm; Ed.', 'KOLMAN, HILL - &Aacute;lgebra Lineal - 8&ordm; Ed.', 'https://drive.google.com/uc?export=download&amp;confirm=no_antivirus&amp;id=0ByJGw5Vl7ldCU2NoYl9JbDktUmc');
INSERT INTO `recurso_profesor` VALUES (74, 50, 'LAY - &Aacute;lgebra Lineal - 3&ordm; Ed.', 'LAY - &Aacute;lgebra Lineal - 3&ordm; Ed.', 'https://drive.google.com/uc?export=download&amp;confirm=no_antivirus&amp;id=0ByJGw5Vl7ldCbU1KbndlQjJZbE0');
INSERT INTO `recurso_profesor` VALUES (75, 50, 'POOLE - &Aacute;lgebra Lineal - 3&ordm; Ed.', 'POOLE - &Aacute;lgebra Lineal - 3&ordm; Ed.', 'https://drive.google.com/uc?export=download&amp;confirm=no_antivirus&amp;id=0ByJGw5Vl7ldCZE9uNGRqQk5IM28');
INSERT INTO `recurso_profesor` VALUES (76, 50, 'SWOKOWSKI, COLE - &Aacute;lgebra y Trigonometr&iacute;a con geometr&iacute;a analitica - 12&ordm; Ed', 'SWOKOWSKI, COLE - &Aacute;lgebra y Trigonometr&iacute;a con geometr&iacute;a analitica - 12&ordm; Ed.', 'https://drive.google.com/uc?export=download&amp;confirm=no_antivirus&amp;id=0ByJGw5Vl7ldCeXEwaHp1b1h6cVk');
INSERT INTO `recurso_profesor` VALUES (77, 50, 'CARLOS IVORRA CASTILLO - Logica y teor&iacute;a de conjuntos', 'CARLOS IVORRA CASTILLO - Logica y teor&iacute;a de conjuntos', 'https://drive.google.com/uc?export=download&amp;confirm=no_antivirus&amp;id=0ByJGw5Vl7ldCTmJmN3FhTldWZUU');
INSERT INTO `recurso_profesor` VALUES (78, 50, 'CONAMAT - &Aacute;lgebra - 1&ordm; Ed.', 'CONAMAT - &Aacute;lgebra - 1&ordm; Ed.', 'https://drive.google.com/uc?export=download&amp;confirm=no_antivirus&amp;id=0ByJGw5Vl7ldCWDNKdnFYMUNHbW8');
INSERT INTO `recurso_profesor` VALUES (79, 50, 'CONAMAT - Aritm&eacute;tica y &Aacute;lgebra - 1&ordm; Ed.', 'CONAMAT - Aritm&eacute;tica y &Aacute;lgebra - 1&ordm; Ed.', 'https://drive.google.com/uc?export=download&amp;amp;confirm=no_antivirus&amp;amp;id=0ByJGw5Vl7ldCaTJkM0F0NGUySlE');
INSERT INTO `recurso_profesor` VALUES (80, 50, 'CONAMAT - Matem&aacute;ticas simplificadas - 2&ordm; Ed.', 'CONAMAT - Matem&aacute;ticas simplificadas - 2&ordm; Ed.', 'https://drive.google.com/uc?export=download&amp;confirm=no_antivirus&amp;id=0ByJGw5Vl7ldCN1NWeEtsY3RoaWM');
INSERT INTO `recurso_profesor` VALUES (81, 50, 'HOWARD ANTON - Introducci&oacute;n al &Aacute;lgebra Lineal - 3&ordm; Ed.', 'HOWARD ANTON - Introducci&oacute;n al &Aacute;lgebra Lineal - 3&ordm; Ed.', 'https://drive.google.com/uc?export=download&amp;confirm=no_antivirus&amp;id=0ByJGw5Vl7ldCRkdybDVLQm95djg');
INSERT INTO `recurso_profesor` VALUES (82, 50, 'IBORT, RODRIGUEZ - Notas de &aacute;lgebra lineal', 'IBORT, RODRIGUEZ - Notas de &aacute;lgebra lineal', 'https://drive.google.com/uc?export=download&amp;confirm=no_antivirus&amp;id=0ByJGw5Vl7ldCQlNxSkd3bFVuakU');
INSERT INTO `recurso_profesor` VALUES (83, 50, 'ISAACS, SABOGAL - Aproximaci&oacute;n al &aacute;lgebra lineal', 'ISAACS, SABOGAL - Aproximaci&oacute;n al &aacute;lgebra lineal', 'https://drive.google.com/uc?export=download&amp;confirm=no_antivirus&amp;id=0ByJGw5Vl7ldCRGVqcE9jX3Z1RGM');
INSERT INTO `recurso_profesor` VALUES (84, 50, 'NIVEN, ZUCKERMAN - Introducci&oacute;n a la Teor&iacute;a de los Numeros', 'NIVEN, ZUCKERMAN - Introducci&oacute;n a la Teor&iacute;a de los Numeros', 'https://drive.google.com/uc?export=download&amp;amp;confirm=no_antivirus&amp;amp;id=0ByJGw5Vl7ldCQXhpclpTSTZpMk0');
INSERT INTO `recurso_profesor` VALUES (86, 50, 'STANLEY I. GROSSMAN - &Aacute;lgebra lineal - 6&ordm; Ed.', 'STANLEY I. GROSSMAN - &Aacute;lgebra lineal - 6&ordm; Ed.', 'https://drive.google.com/uc?export=download&amp;confirm=no_antivirus&amp;id=0ByJGw5Vl7ldCRFFFaFVuemFudzA');
INSERT INTO `recurso_profesor` VALUES (88, 50, 'TOM M. APOSTOL - Introduction to Analytic Number Theory', 'TOM M. APOSTOL - Introduction to Analytic Number Theory', 'https://drive.google.com/uc?export=download&amp;confirm=no_antivirus&amp;id=0ByJGw5Vl7ldCM1o1Z20yR2VlVjA');
INSERT INTO `recurso_profesor` VALUES (89, 50, 'WALTER MORA - Introducci&oacute;n a la teoria numeros', 'WALTER MORA - Introducci&oacute;n a la teoria numeros', 'https://drive.google.com/uc?export=download&amp;confirm=no_antivirus&amp;id=0ByJGw5Vl7ldCZDRveG4tOUp5cVE');

-- --------------------------------------------------------

-- 
-- Estructura de tabla para la tabla `recurso_profesor_etiqueta`
-- 

CREATE TABLE `recurso_profesor_etiqueta` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_recurso` int(11) DEFAULT NULL,
  `id_conocimiento` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `const_etiqueta` (`id_recurso`,`id_conocimiento`)
) ENGINE=InnoDB AUTO_INCREMENT=116 DEFAULT CHARSET=utf8 AUTO_INCREMENT=116 ;

-- 
-- Volcar la base de datos para la tabla `recurso_profesor_etiqueta`
-- 

INSERT INTO `recurso_profesor_etiqueta` VALUES (80, 66, 39);
INSERT INTO `recurso_profesor_etiqueta` VALUES (79, 67, 44);
INSERT INTO `recurso_profesor_etiqueta` VALUES (81, 68, 50);
INSERT INTO `recurso_profesor_etiqueta` VALUES (82, 69, 50);
INSERT INTO `recurso_profesor_etiqueta` VALUES (83, 70, 50);
INSERT INTO `recurso_profesor_etiqueta` VALUES (84, 71, 50);
INSERT INTO `recurso_profesor_etiqueta` VALUES (86, 72, 44);
INSERT INTO `recurso_profesor_etiqueta` VALUES (85, 72, 51);
INSERT INTO `recurso_profesor_etiqueta` VALUES (87, 73, 50);
INSERT INTO `recurso_profesor_etiqueta` VALUES (88, 74, 50);
INSERT INTO `recurso_profesor_etiqueta` VALUES (89, 75, 50);
INSERT INTO `recurso_profesor_etiqueta` VALUES (91, 76, 44);
INSERT INTO `recurso_profesor_etiqueta` VALUES (90, 76, 51);
INSERT INTO `recurso_profesor_etiqueta` VALUES (92, 76, 52);
INSERT INTO `recurso_profesor_etiqueta` VALUES (93, 77, 53);
INSERT INTO `recurso_profesor_etiqueta` VALUES (94, 78, 51);
INSERT INTO `recurso_profesor_etiqueta` VALUES (97, 79, 51);
INSERT INTO `recurso_profesor_etiqueta` VALUES (98, 79, 54);
INSERT INTO `recurso_profesor_etiqueta` VALUES (101, 80, 49);
INSERT INTO `recurso_profesor_etiqueta` VALUES (100, 80, 51);
INSERT INTO `recurso_profesor_etiqueta` VALUES (102, 80, 52);
INSERT INTO `recurso_profesor_etiqueta` VALUES (99, 80, 54);
INSERT INTO `recurso_profesor_etiqueta` VALUES (103, 80, 55);
INSERT INTO `recurso_profesor_etiqueta` VALUES (104, 80, 56);
INSERT INTO `recurso_profesor_etiqueta` VALUES (105, 81, 50);
INSERT INTO `recurso_profesor_etiqueta` VALUES (106, 82, 50);
INSERT INTO `recurso_profesor_etiqueta` VALUES (107, 83, 50);
INSERT INTO `recurso_profesor_etiqueta` VALUES (115, 84, 58);
INSERT INTO `recurso_profesor_etiqueta` VALUES (110, 86, 50);
INSERT INTO `recurso_profesor_etiqueta` VALUES (112, 88, 57);
INSERT INTO `recurso_profesor_etiqueta` VALUES (113, 88, 58);
INSERT INTO `recurso_profesor_etiqueta` VALUES (114, 89, 58);

-- --------------------------------------------------------

-- 
-- Estructura de tabla para la tabla `registro_visitas_anuncios`
-- 

CREATE TABLE `registro_visitas_anuncios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_anuncio` int(11) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=521 DEFAULT CHARSET=utf8 AUTO_INCREMENT=521 ;

-- 
-- Volcar la base de datos para la tabla `registro_visitas_anuncios`
-- 

INSERT INTO `registro_visitas_anuncios` VALUES (1, 5, '2015-09-19 13:46:11');
INSERT INTO `registro_visitas_anuncios` VALUES (2, 3, '2015-09-19 13:53:12');
INSERT INTO `registro_visitas_anuncios` VALUES (3, 3, '2015-09-20 16:36:57');
INSERT INTO `registro_visitas_anuncios` VALUES (4, 3, '2015-09-20 16:42:49');
INSERT INTO `registro_visitas_anuncios` VALUES (5, 3, '2015-09-20 16:47:02');
INSERT INTO `registro_visitas_anuncios` VALUES (6, 3, '2015-09-20 16:52:24');
INSERT INTO `registro_visitas_anuncios` VALUES (7, 3, '2015-09-20 23:09:02');
INSERT INTO `registro_visitas_anuncios` VALUES (8, 3, '2015-09-20 23:09:31');
INSERT INTO `registro_visitas_anuncios` VALUES (9, 3, '2015-09-21 01:18:14');
INSERT INTO `registro_visitas_anuncios` VALUES (10, 3, '2015-09-21 01:19:06');
INSERT INTO `registro_visitas_anuncios` VALUES (11, 3, '2015-09-21 01:20:54');
INSERT INTO `registro_visitas_anuncios` VALUES (12, 3, '2015-09-21 01:21:36');
INSERT INTO `registro_visitas_anuncios` VALUES (13, 3, '2015-09-21 01:21:57');
INSERT INTO `registro_visitas_anuncios` VALUES (14, 3, '2015-09-21 01:23:10');
INSERT INTO `registro_visitas_anuncios` VALUES (15, 3, '2015-09-21 01:23:27');
INSERT INTO `registro_visitas_anuncios` VALUES (16, 3, '2015-09-21 01:26:43');
INSERT INTO `registro_visitas_anuncios` VALUES (17, 3, '2015-09-21 01:27:54');
INSERT INTO `registro_visitas_anuncios` VALUES (18, 3, '2015-09-21 01:28:38');
INSERT INTO `registro_visitas_anuncios` VALUES (19, 3, '2015-09-21 01:38:01');
INSERT INTO `registro_visitas_anuncios` VALUES (20, 3, '2015-09-21 01:42:52');
INSERT INTO `registro_visitas_anuncios` VALUES (21, 3, '2015-11-07 01:00:25');
INSERT INTO `registro_visitas_anuncios` VALUES (22, 3, '2015-11-07 01:02:15');
INSERT INTO `registro_visitas_anuncios` VALUES (23, 8, '2015-11-07 09:15:56');
INSERT INTO `registro_visitas_anuncios` VALUES (24, 3, '2015-11-07 11:19:34');
INSERT INTO `registro_visitas_anuncios` VALUES (25, 6, '2015-11-07 11:47:15');
INSERT INTO `registro_visitas_anuncios` VALUES (26, 5, '2015-11-07 14:21:28');
INSERT INTO `registro_visitas_anuncios` VALUES (27, 5, '2015-11-07 18:48:29');
INSERT INTO `registro_visitas_anuncios` VALUES (28, 8, '2015-11-07 19:00:33');
INSERT INTO `registro_visitas_anuncios` VALUES (29, 5, '2015-11-07 19:02:35');
INSERT INTO `registro_visitas_anuncios` VALUES (30, 5, '2015-11-07 19:07:53');
INSERT INTO `registro_visitas_anuncios` VALUES (31, 13, '2015-11-07 20:15:20');
INSERT INTO `registro_visitas_anuncios` VALUES (32, 13, '2015-11-08 18:40:30');
INSERT INTO `registro_visitas_anuncios` VALUES (33, 15, '2015-11-08 20:51:41');
INSERT INTO `registro_visitas_anuncios` VALUES (34, 15, '2015-11-08 20:52:53');
INSERT INTO `registro_visitas_anuncios` VALUES (35, 16, '2015-11-08 20:59:38');
INSERT INTO `registro_visitas_anuncios` VALUES (36, 3, '2015-11-09 19:04:08');
INSERT INTO `registro_visitas_anuncios` VALUES (37, 16, '2015-11-09 22:23:43');
INSERT INTO `registro_visitas_anuncios` VALUES (38, 17, '2015-11-10 23:06:52');
INSERT INTO `registro_visitas_anuncios` VALUES (39, 17, '2015-11-11 13:17:59');
INSERT INTO `registro_visitas_anuncios` VALUES (40, 17, '2015-11-11 13:25:17');
INSERT INTO `registro_visitas_anuncios` VALUES (41, 17, '2015-11-11 13:43:19');
INSERT INTO `registro_visitas_anuncios` VALUES (42, 17, '2015-11-11 14:03:47');
INSERT INTO `registro_visitas_anuncios` VALUES (43, 18, '2015-11-11 14:04:20');
INSERT INTO `registro_visitas_anuncios` VALUES (44, 17, '2015-11-11 15:09:02');
INSERT INTO `registro_visitas_anuncios` VALUES (45, 17, '2015-11-12 10:29:59');
INSERT INTO `registro_visitas_anuncios` VALUES (46, 17, '2015-11-12 22:23:25');
INSERT INTO `registro_visitas_anuncios` VALUES (47, 17, '2015-11-12 22:30:34');
INSERT INTO `registro_visitas_anuncios` VALUES (48, 20, '2015-11-13 02:10:06');
INSERT INTO `registro_visitas_anuncios` VALUES (49, 17, '2015-11-13 08:32:33');
INSERT INTO `registro_visitas_anuncios` VALUES (50, 17, '2015-11-13 11:02:51');
INSERT INTO `registro_visitas_anuncios` VALUES (51, 19, '2015-11-13 11:04:20');
INSERT INTO `registro_visitas_anuncios` VALUES (52, 18, '2015-11-13 12:00:58');
INSERT INTO `registro_visitas_anuncios` VALUES (53, 17, '2015-11-13 15:13:05');
INSERT INTO `registro_visitas_anuncios` VALUES (54, 19, '2015-11-13 15:14:50');
INSERT INTO `registro_visitas_anuncios` VALUES (55, 20, '2015-11-13 15:49:22');
INSERT INTO `registro_visitas_anuncios` VALUES (56, 17, '2015-11-14 11:38:23');
INSERT INTO `registro_visitas_anuncios` VALUES (57, 17, '2015-11-14 11:38:23');
INSERT INTO `registro_visitas_anuncios` VALUES (58, 17, '2015-11-14 11:38:23');
INSERT INTO `registro_visitas_anuncios` VALUES (59, 17, '2015-11-14 11:38:23');
INSERT INTO `registro_visitas_anuncios` VALUES (60, 17, '2015-11-14 11:42:30');
INSERT INTO `registro_visitas_anuncios` VALUES (61, 17, '2015-11-14 11:42:30');
INSERT INTO `registro_visitas_anuncios` VALUES (62, 17, '2015-11-14 11:42:30');
INSERT INTO `registro_visitas_anuncios` VALUES (63, 21, '2015-11-14 11:44:22');
INSERT INTO `registro_visitas_anuncios` VALUES (64, 21, '2015-11-14 11:49:05');
INSERT INTO `registro_visitas_anuncios` VALUES (65, 22, '2015-11-14 11:52:39');
INSERT INTO `registro_visitas_anuncios` VALUES (66, 22, '2015-11-14 13:09:15');
INSERT INTO `registro_visitas_anuncios` VALUES (67, 22, '2015-11-14 13:09:15');
INSERT INTO `registro_visitas_anuncios` VALUES (68, 22, '2015-11-14 13:09:15');
INSERT INTO `registro_visitas_anuncios` VALUES (69, 17, '2015-11-14 18:58:45');
INSERT INTO `registro_visitas_anuncios` VALUES (70, 17, '2015-11-15 11:03:38');
INSERT INTO `registro_visitas_anuncios` VALUES (71, 20, '2015-11-15 13:17:26');
INSERT INTO `registro_visitas_anuncios` VALUES (72, 17, '2015-11-15 14:48:39');
INSERT INTO `registro_visitas_anuncios` VALUES (73, 20, '2015-11-15 14:50:15');
INSERT INTO `registro_visitas_anuncios` VALUES (74, 21, '2015-11-15 16:09:33');
INSERT INTO `registro_visitas_anuncios` VALUES (75, 21, '2015-11-15 16:10:07');
INSERT INTO `registro_visitas_anuncios` VALUES (76, 21, '2015-11-15 17:13:53');
INSERT INTO `registro_visitas_anuncios` VALUES (77, 23, '2015-11-15 17:24:43');
INSERT INTO `registro_visitas_anuncios` VALUES (78, 23, '2015-11-15 17:26:55');
INSERT INTO `registro_visitas_anuncios` VALUES (79, 23, '2015-11-15 17:27:23');
INSERT INTO `registro_visitas_anuncios` VALUES (80, 23, '2015-11-15 17:28:18');
INSERT INTO `registro_visitas_anuncios` VALUES (81, 23, '2015-11-15 19:20:14');
INSERT INTO `registro_visitas_anuncios` VALUES (82, 23, '2015-11-15 19:44:39');
INSERT INTO `registro_visitas_anuncios` VALUES (83, 23, '2015-11-15 19:46:06');
INSERT INTO `registro_visitas_anuncios` VALUES (84, 21, '2015-11-15 19:54:39');
INSERT INTO `registro_visitas_anuncios` VALUES (85, 23, '2015-11-15 20:24:08');
INSERT INTO `registro_visitas_anuncios` VALUES (86, 20, '2015-11-15 20:30:27');
INSERT INTO `registro_visitas_anuncios` VALUES (87, 17, '2015-11-15 21:04:26');
INSERT INTO `registro_visitas_anuncios` VALUES (88, 17, '2015-11-15 21:46:08');
INSERT INTO `registro_visitas_anuncios` VALUES (89, 17, '2015-11-15 21:57:31');
INSERT INTO `registro_visitas_anuncios` VALUES (90, 23, '2015-11-15 22:09:03');
INSERT INTO `registro_visitas_anuncios` VALUES (91, 17, '2015-11-15 22:09:08');
INSERT INTO `registro_visitas_anuncios` VALUES (92, 20, '2015-11-15 22:20:13');
INSERT INTO `registro_visitas_anuncios` VALUES (93, 23, '2015-11-15 22:25:21');
INSERT INTO `registro_visitas_anuncios` VALUES (94, 20, '2015-11-15 22:35:01');
INSERT INTO `registro_visitas_anuncios` VALUES (95, 22, '2015-11-15 22:39:24');
INSERT INTO `registro_visitas_anuncios` VALUES (96, 20, '2015-11-15 22:50:08');
INSERT INTO `registro_visitas_anuncios` VALUES (97, 20, '2015-11-15 22:51:09');
INSERT INTO `registro_visitas_anuncios` VALUES (98, 20, '2015-11-15 22:51:18');
INSERT INTO `registro_visitas_anuncios` VALUES (99, 20, '2015-11-15 22:53:14');
INSERT INTO `registro_visitas_anuncios` VALUES (100, 21, '2015-11-15 23:51:22');
INSERT INTO `registro_visitas_anuncios` VALUES (101, 20, '2015-11-15 23:55:23');
INSERT INTO `registro_visitas_anuncios` VALUES (102, 20, '2015-11-16 00:34:39');
INSERT INTO `registro_visitas_anuncios` VALUES (103, 22, '2015-11-16 00:44:15');
INSERT INTO `registro_visitas_anuncios` VALUES (104, 25, '2015-11-16 00:45:05');
INSERT INTO `registro_visitas_anuncios` VALUES (105, 17, '2015-11-16 00:45:35');
INSERT INTO `registro_visitas_anuncios` VALUES (106, 21, '2015-11-16 00:45:48');
INSERT INTO `registro_visitas_anuncios` VALUES (107, 24, '2015-11-16 00:46:00');
INSERT INTO `registro_visitas_anuncios` VALUES (108, 22, '2015-11-16 00:46:14');
INSERT INTO `registro_visitas_anuncios` VALUES (109, 23, '2015-11-16 00:46:23');
INSERT INTO `registro_visitas_anuncios` VALUES (110, 25, '2015-11-16 00:46:41');
INSERT INTO `registro_visitas_anuncios` VALUES (111, 17, '2015-11-16 01:15:28');
INSERT INTO `registro_visitas_anuncios` VALUES (112, 20, '2015-11-16 01:28:49');
INSERT INTO `registro_visitas_anuncios` VALUES (113, 25, '2015-11-16 01:29:36');
INSERT INTO `registro_visitas_anuncios` VALUES (114, 22, '2015-11-16 01:29:42');
INSERT INTO `registro_visitas_anuncios` VALUES (115, 25, '2015-11-16 01:29:51');
INSERT INTO `registro_visitas_anuncios` VALUES (116, 21, '2015-11-16 02:12:08');
INSERT INTO `registro_visitas_anuncios` VALUES (117, 20, '2015-11-16 02:55:31');
INSERT INTO `registro_visitas_anuncios` VALUES (118, 19, '2015-11-16 02:57:49');
INSERT INTO `registro_visitas_anuncios` VALUES (119, 21, '2015-11-16 11:50:34');
INSERT INTO `registro_visitas_anuncios` VALUES (120, 21, '2015-11-16 11:58:19');
INSERT INTO `registro_visitas_anuncios` VALUES (121, 17, '2015-11-16 12:06:21');
INSERT INTO `registro_visitas_anuncios` VALUES (122, 21, '2015-11-16 12:54:52');
INSERT INTO `registro_visitas_anuncios` VALUES (123, 27, '2015-11-16 12:55:30');
INSERT INTO `registro_visitas_anuncios` VALUES (124, 27, '2015-11-16 12:59:32');
INSERT INTO `registro_visitas_anuncios` VALUES (125, 27, '2015-11-16 13:00:47');
INSERT INTO `registro_visitas_anuncios` VALUES (126, 26, '2015-11-16 13:09:02');
INSERT INTO `registro_visitas_anuncios` VALUES (127, 27, '2015-11-16 14:11:25');
INSERT INTO `registro_visitas_anuncios` VALUES (128, 23, '2015-11-16 14:23:35');
INSERT INTO `registro_visitas_anuncios` VALUES (129, 17, '2015-11-16 17:38:57');
INSERT INTO `registro_visitas_anuncios` VALUES (130, 28, '2015-11-16 17:50:46');
INSERT INTO `registro_visitas_anuncios` VALUES (131, 29, '2015-11-16 19:11:57');
INSERT INTO `registro_visitas_anuncios` VALUES (132, 20, '2015-11-16 19:13:35');
INSERT INTO `registro_visitas_anuncios` VALUES (133, 29, '2015-11-16 21:37:10');
INSERT INTO `registro_visitas_anuncios` VALUES (134, 17, '2015-11-16 23:36:14');
INSERT INTO `registro_visitas_anuncios` VALUES (135, 17, '2015-11-16 23:57:06');
INSERT INTO `registro_visitas_anuncios` VALUES (136, 22, '2015-11-17 00:58:35');
INSERT INTO `registro_visitas_anuncios` VALUES (137, 17, '2015-11-17 17:52:30');
INSERT INTO `registro_visitas_anuncios` VALUES (138, 31, '2015-11-17 17:54:43');
INSERT INTO `registro_visitas_anuncios` VALUES (139, 32, '2015-11-17 17:55:21');
INSERT INTO `registro_visitas_anuncios` VALUES (140, 23, '2015-11-17 17:55:51');
INSERT INTO `registro_visitas_anuncios` VALUES (141, 35, '2015-11-17 17:58:11');
INSERT INTO `registro_visitas_anuncios` VALUES (142, 37, '2015-11-17 18:32:56');
INSERT INTO `registro_visitas_anuncios` VALUES (143, 39, '2015-11-17 18:33:25');
INSERT INTO `registro_visitas_anuncios` VALUES (144, 29, '2015-11-17 21:24:16');
INSERT INTO `registro_visitas_anuncios` VALUES (145, 29, '2015-11-17 21:31:27');
INSERT INTO `registro_visitas_anuncios` VALUES (146, 29, '2015-11-17 22:16:00');
INSERT INTO `registro_visitas_anuncios` VALUES (147, 41, '2015-11-17 22:16:09');
INSERT INTO `registro_visitas_anuncios` VALUES (148, 17, '2015-11-18 10:58:09');
INSERT INTO `registro_visitas_anuncios` VALUES (149, 34, '2015-11-18 23:42:01');
INSERT INTO `registro_visitas_anuncios` VALUES (150, 27, '2015-11-19 21:07:10');
INSERT INTO `registro_visitas_anuncios` VALUES (151, 30, '2015-11-19 21:08:12');
INSERT INTO `registro_visitas_anuncios` VALUES (152, 33, '2015-11-19 21:09:51');
INSERT INTO `registro_visitas_anuncios` VALUES (153, 26, '2015-11-19 21:10:45');
INSERT INTO `registro_visitas_anuncios` VALUES (154, 28, '2015-11-19 21:11:20');
INSERT INTO `registro_visitas_anuncios` VALUES (155, 41, '2015-11-19 21:12:07');
INSERT INTO `registro_visitas_anuncios` VALUES (156, 26, '2015-11-19 21:12:57');
INSERT INTO `registro_visitas_anuncios` VALUES (157, 30, '2015-11-19 22:03:07');
INSERT INTO `registro_visitas_anuncios` VALUES (158, 20, '2015-11-19 22:04:00');
INSERT INTO `registro_visitas_anuncios` VALUES (159, 20, '2015-11-19 22:04:00');
INSERT INTO `registro_visitas_anuncios` VALUES (160, 21, '2015-11-19 23:52:58');
INSERT INTO `registro_visitas_anuncios` VALUES (161, 23, '2015-11-20 00:01:01');
INSERT INTO `registro_visitas_anuncios` VALUES (162, 47, '2015-11-20 12:26:54');
INSERT INTO `registro_visitas_anuncios` VALUES (163, 48, '2015-11-20 12:30:35');
INSERT INTO `registro_visitas_anuncios` VALUES (164, 47, '2015-11-20 12:31:23');
INSERT INTO `registro_visitas_anuncios` VALUES (165, 47, '2015-11-20 12:31:49');
INSERT INTO `registro_visitas_anuncios` VALUES (166, 42, '2015-11-21 17:26:44');
INSERT INTO `registro_visitas_anuncios` VALUES (167, 29, '2015-11-21 17:27:11');
INSERT INTO `registro_visitas_anuncios` VALUES (168, 47, '2015-11-21 17:32:58');
INSERT INTO `registro_visitas_anuncios` VALUES (169, 41, '2015-11-21 17:33:17');
INSERT INTO `registro_visitas_anuncios` VALUES (170, 22, '2015-11-23 21:48:40');
INSERT INTO `registro_visitas_anuncios` VALUES (171, 22, '2015-11-23 21:48:41');
INSERT INTO `registro_visitas_anuncios` VALUES (172, 22, '2015-11-23 21:48:43');
INSERT INTO `registro_visitas_anuncios` VALUES (173, 22, '2015-11-23 21:48:44');
INSERT INTO `registro_visitas_anuncios` VALUES (174, 22, '2015-11-23 21:48:46');
INSERT INTO `registro_visitas_anuncios` VALUES (175, 22, '2015-11-23 21:48:47');
INSERT INTO `registro_visitas_anuncios` VALUES (176, 22, '2015-11-23 21:48:48');
INSERT INTO `registro_visitas_anuncios` VALUES (177, 22, '2015-11-23 21:48:49');
INSERT INTO `registro_visitas_anuncios` VALUES (178, 22, '2015-11-23 21:48:51');
INSERT INTO `registro_visitas_anuncios` VALUES (179, 22, '2015-11-23 21:48:53');
INSERT INTO `registro_visitas_anuncios` VALUES (180, 22, '2015-11-23 21:48:54');
INSERT INTO `registro_visitas_anuncios` VALUES (181, 22, '2015-11-23 21:48:55');
INSERT INTO `registro_visitas_anuncios` VALUES (182, 22, '2015-11-23 21:48:56');
INSERT INTO `registro_visitas_anuncios` VALUES (183, 20, '2015-11-23 22:15:54');
INSERT INTO `registro_visitas_anuncios` VALUES (184, 17, '2015-11-23 22:17:25');
INSERT INTO `registro_visitas_anuncios` VALUES (185, 19, '2015-11-23 22:56:26');
INSERT INTO `registro_visitas_anuncios` VALUES (186, 43, '2015-11-24 10:17:07');
INSERT INTO `registro_visitas_anuncios` VALUES (187, 23, '2015-11-24 12:02:26');
INSERT INTO `registro_visitas_anuncios` VALUES (188, 44, '2015-11-24 15:40:53');
INSERT INTO `registro_visitas_anuncios` VALUES (189, 42, '2015-11-25 16:09:49');
INSERT INTO `registro_visitas_anuncios` VALUES (190, 51, '2015-11-26 00:59:14');
INSERT INTO `registro_visitas_anuncios` VALUES (191, 41, '2015-11-26 01:01:33');
INSERT INTO `registro_visitas_anuncios` VALUES (192, 29, '2015-11-26 01:02:04');
INSERT INTO `registro_visitas_anuncios` VALUES (193, 47, '2015-11-26 01:02:17');
INSERT INTO `registro_visitas_anuncios` VALUES (194, 52, '2015-11-26 01:02:21');
INSERT INTO `registro_visitas_anuncios` VALUES (195, 20, '2015-11-26 01:02:23');
INSERT INTO `registro_visitas_anuncios` VALUES (196, 44, '2015-11-26 02:04:08');
INSERT INTO `registro_visitas_anuncios` VALUES (197, 41, '2015-11-26 02:05:11');
INSERT INTO `registro_visitas_anuncios` VALUES (198, 17, '2015-11-26 10:05:34');
INSERT INTO `registro_visitas_anuncios` VALUES (199, 49, '2015-11-26 11:42:34');
INSERT INTO `registro_visitas_anuncios` VALUES (200, 50, '2015-11-28 23:42:53');
INSERT INTO `registro_visitas_anuncios` VALUES (201, 50, '2015-11-28 23:42:53');
INSERT INTO `registro_visitas_anuncios` VALUES (202, 49, '2015-11-29 00:02:29');
INSERT INTO `registro_visitas_anuncios` VALUES (203, 29, '2015-11-29 16:00:51');
INSERT INTO `registro_visitas_anuncios` VALUES (204, 41, '2015-11-29 16:01:28');
INSERT INTO `registro_visitas_anuncios` VALUES (205, 17, '2015-11-29 20:00:02');
INSERT INTO `registro_visitas_anuncios` VALUES (206, 17, '2015-11-29 20:04:37');
INSERT INTO `registro_visitas_anuncios` VALUES (207, 25, '2015-11-29 20:54:58');
INSERT INTO `registro_visitas_anuncios` VALUES (208, 43, '2015-11-30 00:50:03');
INSERT INTO `registro_visitas_anuncios` VALUES (209, 20, '2015-12-01 09:34:41');
INSERT INTO `registro_visitas_anuncios` VALUES (210, 24, '2015-12-06 17:41:42');
INSERT INTO `registro_visitas_anuncios` VALUES (211, 31, '2015-12-06 20:50:54');
INSERT INTO `registro_visitas_anuncios` VALUES (212, 21, '2015-12-07 00:35:39');
INSERT INTO `registro_visitas_anuncios` VALUES (213, 24, '2015-12-07 00:36:04');
INSERT INTO `registro_visitas_anuncios` VALUES (214, 27, '2015-12-07 00:36:17');
INSERT INTO `registro_visitas_anuncios` VALUES (215, 26, '2015-12-11 19:46:04');
INSERT INTO `registro_visitas_anuncios` VALUES (216, 49, '2015-12-13 22:30:11');
INSERT INTO `registro_visitas_anuncios` VALUES (217, 54, '2015-12-13 22:31:16');
INSERT INTO `registro_visitas_anuncios` VALUES (218, 54, '2015-12-13 22:35:54');
INSERT INTO `registro_visitas_anuncios` VALUES (219, 52, '2015-12-14 16:07:07');
INSERT INTO `registro_visitas_anuncios` VALUES (220, 41, '2015-12-14 16:07:43');
INSERT INTO `registro_visitas_anuncios` VALUES (221, 41, '2015-12-14 17:13:53');
INSERT INTO `registro_visitas_anuncios` VALUES (222, 17, '2015-12-14 21:12:39');
INSERT INTO `registro_visitas_anuncios` VALUES (223, 17, '2015-12-14 21:12:41');
INSERT INTO `registro_visitas_anuncios` VALUES (224, 41, '2016-01-13 13:47:49');
INSERT INTO `registro_visitas_anuncios` VALUES (225, 28, '2016-01-18 10:01:14');
INSERT INTO `registro_visitas_anuncios` VALUES (226, 44, '2016-01-28 16:04:30');
INSERT INTO `registro_visitas_anuncios` VALUES (227, 29, '2016-01-28 16:07:31');
INSERT INTO `registro_visitas_anuncios` VALUES (228, 33, '2016-02-02 13:11:07');
INSERT INTO `registro_visitas_anuncios` VALUES (229, 42, '2016-02-02 13:11:51');
INSERT INTO `registro_visitas_anuncios` VALUES (230, 30, '2016-02-02 13:42:08');
INSERT INTO `registro_visitas_anuncios` VALUES (231, 25, '2016-02-09 15:17:49');
INSERT INTO `registro_visitas_anuncios` VALUES (232, 29, '2016-02-09 15:22:40');
INSERT INTO `registro_visitas_anuncios` VALUES (233, 29, '2016-02-09 15:25:16');
INSERT INTO `registro_visitas_anuncios` VALUES (234, 29, '2016-02-10 08:43:44');
INSERT INTO `registro_visitas_anuncios` VALUES (235, 19, '2016-02-10 15:23:08');
INSERT INTO `registro_visitas_anuncios` VALUES (236, 29, '2016-02-10 22:30:15');
INSERT INTO `registro_visitas_anuncios` VALUES (237, 29, '2016-02-11 07:40:56');
INSERT INTO `registro_visitas_anuncios` VALUES (238, 29, '2016-02-11 17:42:29');
INSERT INTO `registro_visitas_anuncios` VALUES (239, 25, '2016-02-12 00:22:15');
INSERT INTO `registro_visitas_anuncios` VALUES (240, 25, '2016-02-13 16:24:32');
INSERT INTO `registro_visitas_anuncios` VALUES (241, 25, '2016-02-13 16:24:33');
INSERT INTO `registro_visitas_anuncios` VALUES (242, 25, '2016-02-13 16:24:34');
INSERT INTO `registro_visitas_anuncios` VALUES (243, 25, '2016-02-13 16:24:35');
INSERT INTO `registro_visitas_anuncios` VALUES (244, 25, '2016-02-13 16:24:36');
INSERT INTO `registro_visitas_anuncios` VALUES (245, 25, '2016-02-13 16:24:37');
INSERT INTO `registro_visitas_anuncios` VALUES (246, 25, '2016-02-13 16:24:38');
INSERT INTO `registro_visitas_anuncios` VALUES (247, 25, '2016-02-13 16:24:39');
INSERT INTO `registro_visitas_anuncios` VALUES (248, 25, '2016-02-13 16:24:40');
INSERT INTO `registro_visitas_anuncios` VALUES (249, 25, '2016-02-13 16:24:41');
INSERT INTO `registro_visitas_anuncios` VALUES (250, 25, '2016-02-13 16:24:42');
INSERT INTO `registro_visitas_anuncios` VALUES (251, 25, '2016-02-13 16:24:43');
INSERT INTO `registro_visitas_anuncios` VALUES (252, 25, '2016-02-13 16:24:44');
INSERT INTO `registro_visitas_anuncios` VALUES (253, 25, '2016-02-13 16:24:45');
INSERT INTO `registro_visitas_anuncios` VALUES (254, 25, '2016-02-13 16:24:46');
INSERT INTO `registro_visitas_anuncios` VALUES (255, 25, '2016-02-13 16:24:47');
INSERT INTO `registro_visitas_anuncios` VALUES (256, 25, '2016-02-13 16:24:48');
INSERT INTO `registro_visitas_anuncios` VALUES (257, 25, '2016-02-13 16:24:49');
INSERT INTO `registro_visitas_anuncios` VALUES (258, 25, '2016-02-13 16:24:50');
INSERT INTO `registro_visitas_anuncios` VALUES (259, 25, '2016-02-13 16:24:51');
INSERT INTO `registro_visitas_anuncios` VALUES (260, 25, '2016-02-13 16:24:52');
INSERT INTO `registro_visitas_anuncios` VALUES (261, 25, '2016-02-13 16:24:53');
INSERT INTO `registro_visitas_anuncios` VALUES (262, 25, '2016-02-13 16:24:54');
INSERT INTO `registro_visitas_anuncios` VALUES (263, 25, '2016-02-13 16:24:55');
INSERT INTO `registro_visitas_anuncios` VALUES (264, 25, '2016-02-13 16:24:56');
INSERT INTO `registro_visitas_anuncios` VALUES (265, 25, '2016-02-13 16:24:57');
INSERT INTO `registro_visitas_anuncios` VALUES (266, 25, '2016-02-13 16:24:58');
INSERT INTO `registro_visitas_anuncios` VALUES (267, 25, '2016-02-13 16:24:59');
INSERT INTO `registro_visitas_anuncios` VALUES (268, 25, '2016-02-13 16:25:00');
INSERT INTO `registro_visitas_anuncios` VALUES (269, 25, '2016-02-13 16:25:01');
INSERT INTO `registro_visitas_anuncios` VALUES (270, 25, '2016-02-13 16:25:02');
INSERT INTO `registro_visitas_anuncios` VALUES (271, 25, '2016-02-13 16:25:03');
INSERT INTO `registro_visitas_anuncios` VALUES (272, 25, '2016-02-13 16:25:04');
INSERT INTO `registro_visitas_anuncios` VALUES (273, 25, '2016-02-13 16:25:05');
INSERT INTO `registro_visitas_anuncios` VALUES (274, 25, '2016-02-13 16:25:06');
INSERT INTO `registro_visitas_anuncios` VALUES (275, 25, '2016-02-13 16:25:07');
INSERT INTO `registro_visitas_anuncios` VALUES (276, 25, '2016-02-13 16:25:08');
INSERT INTO `registro_visitas_anuncios` VALUES (277, 25, '2016-02-13 16:25:09');
INSERT INTO `registro_visitas_anuncios` VALUES (278, 25, '2016-02-13 16:25:10');
INSERT INTO `registro_visitas_anuncios` VALUES (279, 25, '2016-02-13 16:25:11');
INSERT INTO `registro_visitas_anuncios` VALUES (280, 25, '2016-02-13 16:25:12');
INSERT INTO `registro_visitas_anuncios` VALUES (281, 25, '2016-02-13 16:25:13');
INSERT INTO `registro_visitas_anuncios` VALUES (282, 25, '2016-02-13 16:25:14');
INSERT INTO `registro_visitas_anuncios` VALUES (283, 25, '2016-02-13 16:25:15');
INSERT INTO `registro_visitas_anuncios` VALUES (284, 25, '2016-02-13 16:25:16');
INSERT INTO `registro_visitas_anuncios` VALUES (285, 25, '2016-02-13 16:25:18');
INSERT INTO `registro_visitas_anuncios` VALUES (286, 25, '2016-02-13 16:25:18');
INSERT INTO `registro_visitas_anuncios` VALUES (287, 25, '2016-02-13 16:25:20');
INSERT INTO `registro_visitas_anuncios` VALUES (288, 25, '2016-02-13 16:25:21');
INSERT INTO `registro_visitas_anuncios` VALUES (289, 25, '2016-02-13 16:25:22');
INSERT INTO `registro_visitas_anuncios` VALUES (290, 25, '2016-02-13 16:25:23');
INSERT INTO `registro_visitas_anuncios` VALUES (291, 25, '2016-02-13 16:25:24');
INSERT INTO `registro_visitas_anuncios` VALUES (292, 25, '2016-02-13 16:25:25');
INSERT INTO `registro_visitas_anuncios` VALUES (293, 25, '2016-02-13 16:25:26');
INSERT INTO `registro_visitas_anuncios` VALUES (294, 25, '2016-02-13 16:25:27');
INSERT INTO `registro_visitas_anuncios` VALUES (295, 25, '2016-02-13 16:25:28');
INSERT INTO `registro_visitas_anuncios` VALUES (296, 25, '2016-02-13 16:25:29');
INSERT INTO `registro_visitas_anuncios` VALUES (297, 25, '2016-02-13 16:25:30');
INSERT INTO `registro_visitas_anuncios` VALUES (298, 25, '2016-02-13 16:25:31');
INSERT INTO `registro_visitas_anuncios` VALUES (299, 25, '2016-02-13 16:25:32');
INSERT INTO `registro_visitas_anuncios` VALUES (300, 25, '2016-02-13 16:25:33');
INSERT INTO `registro_visitas_anuncios` VALUES (301, 25, '2016-02-13 16:25:34');
INSERT INTO `registro_visitas_anuncios` VALUES (302, 25, '2016-02-13 16:25:35');
INSERT INTO `registro_visitas_anuncios` VALUES (303, 25, '2016-02-13 16:25:36');
INSERT INTO `registro_visitas_anuncios` VALUES (304, 25, '2016-02-13 16:25:37');
INSERT INTO `registro_visitas_anuncios` VALUES (305, 25, '2016-02-13 16:25:38');
INSERT INTO `registro_visitas_anuncios` VALUES (306, 25, '2016-02-13 16:25:39');
INSERT INTO `registro_visitas_anuncios` VALUES (307, 25, '2016-02-13 16:25:40');
INSERT INTO `registro_visitas_anuncios` VALUES (308, 25, '2016-02-13 16:25:41');
INSERT INTO `registro_visitas_anuncios` VALUES (309, 25, '2016-02-13 16:25:42');
INSERT INTO `registro_visitas_anuncios` VALUES (310, 25, '2016-02-13 16:25:43');
INSERT INTO `registro_visitas_anuncios` VALUES (311, 25, '2016-02-13 16:25:44');
INSERT INTO `registro_visitas_anuncios` VALUES (312, 25, '2016-02-13 16:25:45');
INSERT INTO `registro_visitas_anuncios` VALUES (313, 25, '2016-02-13 16:25:46');
INSERT INTO `registro_visitas_anuncios` VALUES (314, 25, '2016-02-13 16:25:47');
INSERT INTO `registro_visitas_anuncios` VALUES (315, 25, '2016-02-13 16:25:48');
INSERT INTO `registro_visitas_anuncios` VALUES (316, 25, '2016-02-13 16:25:49');
INSERT INTO `registro_visitas_anuncios` VALUES (317, 25, '2016-02-13 16:25:50');
INSERT INTO `registro_visitas_anuncios` VALUES (318, 25, '2016-02-13 16:25:51');
INSERT INTO `registro_visitas_anuncios` VALUES (319, 25, '2016-02-13 16:25:52');
INSERT INTO `registro_visitas_anuncios` VALUES (320, 25, '2016-02-13 16:25:53');
INSERT INTO `registro_visitas_anuncios` VALUES (321, 25, '2016-02-13 16:25:54');
INSERT INTO `registro_visitas_anuncios` VALUES (322, 25, '2016-02-13 16:25:55');
INSERT INTO `registro_visitas_anuncios` VALUES (323, 25, '2016-02-13 16:25:56');
INSERT INTO `registro_visitas_anuncios` VALUES (324, 25, '2016-02-13 16:25:57');
INSERT INTO `registro_visitas_anuncios` VALUES (325, 25, '2016-02-13 16:25:58');
INSERT INTO `registro_visitas_anuncios` VALUES (326, 25, '2016-02-13 16:25:59');
INSERT INTO `registro_visitas_anuncios` VALUES (327, 25, '2016-02-13 16:26:00');
INSERT INTO `registro_visitas_anuncios` VALUES (328, 25, '2016-02-13 16:26:01');
INSERT INTO `registro_visitas_anuncios` VALUES (329, 25, '2016-02-13 16:26:02');
INSERT INTO `registro_visitas_anuncios` VALUES (330, 25, '2016-02-13 16:26:03');
INSERT INTO `registro_visitas_anuncios` VALUES (331, 25, '2016-02-13 16:26:04');
INSERT INTO `registro_visitas_anuncios` VALUES (332, 25, '2016-02-13 16:26:05');
INSERT INTO `registro_visitas_anuncios` VALUES (333, 25, '2016-02-13 16:26:06');
INSERT INTO `registro_visitas_anuncios` VALUES (334, 25, '2016-02-13 16:26:07');
INSERT INTO `registro_visitas_anuncios` VALUES (335, 25, '2016-02-13 16:26:08');
INSERT INTO `registro_visitas_anuncios` VALUES (336, 25, '2016-02-13 16:26:09');
INSERT INTO `registro_visitas_anuncios` VALUES (337, 25, '2016-02-13 16:26:10');
INSERT INTO `registro_visitas_anuncios` VALUES (338, 25, '2016-02-13 16:26:11');
INSERT INTO `registro_visitas_anuncios` VALUES (339, 25, '2016-02-13 16:26:12');
INSERT INTO `registro_visitas_anuncios` VALUES (340, 25, '2016-02-13 16:26:13');
INSERT INTO `registro_visitas_anuncios` VALUES (341, 25, '2016-02-13 16:26:14');
INSERT INTO `registro_visitas_anuncios` VALUES (342, 25, '2016-02-13 16:26:15');
INSERT INTO `registro_visitas_anuncios` VALUES (343, 25, '2016-02-13 16:26:16');
INSERT INTO `registro_visitas_anuncios` VALUES (344, 25, '2016-02-13 16:26:17');
INSERT INTO `registro_visitas_anuncios` VALUES (345, 25, '2016-02-13 16:26:18');
INSERT INTO `registro_visitas_anuncios` VALUES (346, 25, '2016-02-13 16:26:19');
INSERT INTO `registro_visitas_anuncios` VALUES (347, 25, '2016-02-13 16:26:20');
INSERT INTO `registro_visitas_anuncios` VALUES (348, 25, '2016-02-13 16:26:21');
INSERT INTO `registro_visitas_anuncios` VALUES (349, 25, '2016-02-13 16:26:23');
INSERT INTO `registro_visitas_anuncios` VALUES (350, 25, '2016-02-13 16:26:23');
INSERT INTO `registro_visitas_anuncios` VALUES (351, 25, '2016-02-13 16:26:24');
INSERT INTO `registro_visitas_anuncios` VALUES (352, 25, '2016-02-13 16:26:25');
INSERT INTO `registro_visitas_anuncios` VALUES (353, 25, '2016-02-13 16:26:26');
INSERT INTO `registro_visitas_anuncios` VALUES (354, 25, '2016-02-13 16:26:28');
INSERT INTO `registro_visitas_anuncios` VALUES (355, 25, '2016-02-13 16:26:29');
INSERT INTO `registro_visitas_anuncios` VALUES (356, 25, '2016-02-13 16:26:30');
INSERT INTO `registro_visitas_anuncios` VALUES (357, 25, '2016-02-13 16:26:31');
INSERT INTO `registro_visitas_anuncios` VALUES (358, 25, '2016-02-13 16:26:32');
INSERT INTO `registro_visitas_anuncios` VALUES (359, 25, '2016-02-13 16:26:33');
INSERT INTO `registro_visitas_anuncios` VALUES (360, 25, '2016-02-13 16:26:34');
INSERT INTO `registro_visitas_anuncios` VALUES (361, 25, '2016-02-13 16:26:35');
INSERT INTO `registro_visitas_anuncios` VALUES (362, 25, '2016-02-13 16:26:36');
INSERT INTO `registro_visitas_anuncios` VALUES (363, 25, '2016-02-13 16:26:37');
INSERT INTO `registro_visitas_anuncios` VALUES (364, 25, '2016-02-13 16:26:38');
INSERT INTO `registro_visitas_anuncios` VALUES (365, 25, '2016-02-13 16:26:39');
INSERT INTO `registro_visitas_anuncios` VALUES (366, 25, '2016-02-13 16:26:40');
INSERT INTO `registro_visitas_anuncios` VALUES (367, 25, '2016-02-13 16:26:41');
INSERT INTO `registro_visitas_anuncios` VALUES (368, 25, '2016-02-13 16:26:42');
INSERT INTO `registro_visitas_anuncios` VALUES (369, 25, '2016-02-13 16:26:43');
INSERT INTO `registro_visitas_anuncios` VALUES (370, 25, '2016-02-13 16:26:44');
INSERT INTO `registro_visitas_anuncios` VALUES (371, 25, '2016-02-13 16:26:45');
INSERT INTO `registro_visitas_anuncios` VALUES (372, 25, '2016-02-13 16:26:46');
INSERT INTO `registro_visitas_anuncios` VALUES (373, 25, '2016-02-13 16:26:47');
INSERT INTO `registro_visitas_anuncios` VALUES (374, 25, '2016-02-13 16:26:48');
INSERT INTO `registro_visitas_anuncios` VALUES (375, 25, '2016-02-13 16:26:49');
INSERT INTO `registro_visitas_anuncios` VALUES (376, 25, '2016-02-13 16:26:50');
INSERT INTO `registro_visitas_anuncios` VALUES (377, 25, '2016-02-13 16:26:51');
INSERT INTO `registro_visitas_anuncios` VALUES (378, 25, '2016-02-13 16:26:52');
INSERT INTO `registro_visitas_anuncios` VALUES (379, 25, '2016-02-13 16:26:53');
INSERT INTO `registro_visitas_anuncios` VALUES (380, 25, '2016-02-13 16:26:54');
INSERT INTO `registro_visitas_anuncios` VALUES (381, 25, '2016-02-13 16:26:55');
INSERT INTO `registro_visitas_anuncios` VALUES (382, 25, '2016-02-13 16:26:56');
INSERT INTO `registro_visitas_anuncios` VALUES (383, 25, '2016-02-13 16:26:57');
INSERT INTO `registro_visitas_anuncios` VALUES (384, 25, '2016-02-13 16:26:58');
INSERT INTO `registro_visitas_anuncios` VALUES (385, 25, '2016-02-13 16:26:59');
INSERT INTO `registro_visitas_anuncios` VALUES (386, 25, '2016-02-13 16:27:00');
INSERT INTO `registro_visitas_anuncios` VALUES (387, 25, '2016-02-13 16:27:01');
INSERT INTO `registro_visitas_anuncios` VALUES (388, 25, '2016-02-13 16:27:02');
INSERT INTO `registro_visitas_anuncios` VALUES (389, 25, '2016-02-13 16:27:03');
INSERT INTO `registro_visitas_anuncios` VALUES (390, 25, '2016-02-13 16:27:04');
INSERT INTO `registro_visitas_anuncios` VALUES (391, 25, '2016-02-13 16:27:05');
INSERT INTO `registro_visitas_anuncios` VALUES (392, 25, '2016-02-13 16:27:06');
INSERT INTO `registro_visitas_anuncios` VALUES (393, 25, '2016-02-13 16:27:07');
INSERT INTO `registro_visitas_anuncios` VALUES (394, 25, '2016-02-13 16:27:08');
INSERT INTO `registro_visitas_anuncios` VALUES (395, 25, '2016-02-13 16:27:09');
INSERT INTO `registro_visitas_anuncios` VALUES (396, 25, '2016-02-13 16:27:10');
INSERT INTO `registro_visitas_anuncios` VALUES (397, 25, '2016-02-13 16:27:11');
INSERT INTO `registro_visitas_anuncios` VALUES (398, 25, '2016-02-13 16:27:12');
INSERT INTO `registro_visitas_anuncios` VALUES (399, 25, '2016-02-13 16:27:13');
INSERT INTO `registro_visitas_anuncios` VALUES (400, 25, '2016-02-13 16:27:14');
INSERT INTO `registro_visitas_anuncios` VALUES (401, 25, '2016-02-13 16:27:15');
INSERT INTO `registro_visitas_anuncios` VALUES (402, 25, '2016-02-13 16:27:16');
INSERT INTO `registro_visitas_anuncios` VALUES (403, 25, '2016-02-13 16:27:17');
INSERT INTO `registro_visitas_anuncios` VALUES (404, 25, '2016-02-13 16:27:18');
INSERT INTO `registro_visitas_anuncios` VALUES (405, 25, '2016-02-13 16:27:19');
INSERT INTO `registro_visitas_anuncios` VALUES (406, 25, '2016-02-13 16:27:20');
INSERT INTO `registro_visitas_anuncios` VALUES (407, 25, '2016-02-13 16:27:21');
INSERT INTO `registro_visitas_anuncios` VALUES (408, 25, '2016-02-13 16:27:22');
INSERT INTO `registro_visitas_anuncios` VALUES (409, 25, '2016-02-13 16:27:23');
INSERT INTO `registro_visitas_anuncios` VALUES (410, 25, '2016-02-13 16:27:24');
INSERT INTO `registro_visitas_anuncios` VALUES (411, 25, '2016-02-13 16:27:25');
INSERT INTO `registro_visitas_anuncios` VALUES (412, 25, '2016-02-13 16:27:27');
INSERT INTO `registro_visitas_anuncios` VALUES (413, 25, '2016-02-13 16:27:28');
INSERT INTO `registro_visitas_anuncios` VALUES (414, 25, '2016-02-13 16:27:28');
INSERT INTO `registro_visitas_anuncios` VALUES (415, 25, '2016-02-13 16:27:29');
INSERT INTO `registro_visitas_anuncios` VALUES (416, 25, '2016-02-13 16:27:30');
INSERT INTO `registro_visitas_anuncios` VALUES (417, 25, '2016-02-13 16:27:32');
INSERT INTO `registro_visitas_anuncios` VALUES (418, 25, '2016-02-13 16:27:33');
INSERT INTO `registro_visitas_anuncios` VALUES (419, 25, '2016-02-13 16:27:34');
INSERT INTO `registro_visitas_anuncios` VALUES (420, 25, '2016-02-13 16:27:35');
INSERT INTO `registro_visitas_anuncios` VALUES (421, 25, '2016-02-13 16:27:36');
INSERT INTO `registro_visitas_anuncios` VALUES (422, 25, '2016-02-13 16:27:37');
INSERT INTO `registro_visitas_anuncios` VALUES (423, 25, '2016-02-13 16:27:38');
INSERT INTO `registro_visitas_anuncios` VALUES (424, 25, '2016-02-13 16:27:39');
INSERT INTO `registro_visitas_anuncios` VALUES (425, 25, '2016-02-13 16:27:41');
INSERT INTO `registro_visitas_anuncios` VALUES (426, 25, '2016-02-13 16:27:42');
INSERT INTO `registro_visitas_anuncios` VALUES (427, 25, '2016-02-13 16:27:42');
INSERT INTO `registro_visitas_anuncios` VALUES (428, 25, '2016-02-13 16:27:43');
INSERT INTO `registro_visitas_anuncios` VALUES (429, 25, '2016-02-13 16:27:44');
INSERT INTO `registro_visitas_anuncios` VALUES (430, 25, '2016-02-13 16:27:44');
INSERT INTO `registro_visitas_anuncios` VALUES (431, 25, '2016-02-13 16:27:45');
INSERT INTO `registro_visitas_anuncios` VALUES (432, 25, '2016-02-13 16:27:45');
INSERT INTO `registro_visitas_anuncios` VALUES (433, 25, '2016-02-13 16:27:45');
INSERT INTO `registro_visitas_anuncios` VALUES (434, 25, '2016-02-13 16:27:45');
INSERT INTO `registro_visitas_anuncios` VALUES (435, 25, '2016-02-13 16:27:46');
INSERT INTO `registro_visitas_anuncios` VALUES (436, 25, '2016-02-13 16:27:46');
INSERT INTO `registro_visitas_anuncios` VALUES (437, 25, '2016-02-13 16:27:47');
INSERT INTO `registro_visitas_anuncios` VALUES (438, 25, '2016-02-13 16:27:47');
INSERT INTO `registro_visitas_anuncios` VALUES (439, 25, '2016-02-13 16:27:48');
INSERT INTO `registro_visitas_anuncios` VALUES (440, 25, '2016-02-13 16:27:48');
INSERT INTO `registro_visitas_anuncios` VALUES (441, 25, '2016-02-13 16:27:49');
INSERT INTO `registro_visitas_anuncios` VALUES (442, 25, '2016-02-13 16:27:49');
INSERT INTO `registro_visitas_anuncios` VALUES (443, 25, '2016-02-13 16:27:50');
INSERT INTO `registro_visitas_anuncios` VALUES (444, 25, '2016-02-13 16:27:50');
INSERT INTO `registro_visitas_anuncios` VALUES (445, 25, '2016-02-13 16:27:51');
INSERT INTO `registro_visitas_anuncios` VALUES (446, 25, '2016-02-13 16:27:51');
INSERT INTO `registro_visitas_anuncios` VALUES (447, 25, '2016-02-13 16:27:52');
INSERT INTO `registro_visitas_anuncios` VALUES (448, 25, '2016-02-13 16:27:52');
INSERT INTO `registro_visitas_anuncios` VALUES (449, 25, '2016-02-13 16:27:53');
INSERT INTO `registro_visitas_anuncios` VALUES (450, 25, '2016-02-13 16:27:53');
INSERT INTO `registro_visitas_anuncios` VALUES (451, 25, '2016-02-13 16:27:54');
INSERT INTO `registro_visitas_anuncios` VALUES (452, 20, '2016-02-25 13:50:10');
INSERT INTO `registro_visitas_anuncios` VALUES (453, 25, '2016-02-25 13:50:29');
INSERT INTO `registro_visitas_anuncios` VALUES (454, 31, '2016-03-01 14:07:37');
INSERT INTO `registro_visitas_anuncios` VALUES (455, 23, '2016-03-22 12:27:20');
INSERT INTO `registro_visitas_anuncios` VALUES (456, 28, '2016-03-23 19:55:24');
INSERT INTO `registro_visitas_anuncios` VALUES (457, 26, '2016-03-23 19:56:05');
INSERT INTO `registro_visitas_anuncios` VALUES (458, 26, '2016-03-25 23:29:23');
INSERT INTO `registro_visitas_anuncios` VALUES (459, 26, '2016-03-25 23:29:31');
INSERT INTO `registro_visitas_anuncios` VALUES (460, 19, '2016-03-25 23:32:19');
INSERT INTO `registro_visitas_anuncios` VALUES (461, 32, '2016-03-26 19:42:38');
INSERT INTO `registro_visitas_anuncios` VALUES (462, 23, '2016-03-26 21:26:41');
INSERT INTO `registro_visitas_anuncios` VALUES (463, 32, '2016-03-26 21:27:05');
INSERT INTO `registro_visitas_anuncios` VALUES (464, 23, '2016-03-26 21:28:17');
INSERT INTO `registro_visitas_anuncios` VALUES (465, 26, '2016-03-31 11:47:22');
INSERT INTO `registro_visitas_anuncios` VALUES (466, 49, '2016-04-04 09:16:00');
INSERT INTO `registro_visitas_anuncios` VALUES (467, 54, '2016-04-05 15:54:20');
INSERT INTO `registro_visitas_anuncios` VALUES (468, 54, '2016-04-05 16:10:03');
INSERT INTO `registro_visitas_anuncios` VALUES (469, 21, '2016-04-05 16:17:09');
INSERT INTO `registro_visitas_anuncios` VALUES (470, 49, '2016-04-06 00:55:48');
INSERT INTO `registro_visitas_anuncios` VALUES (471, 54, '2016-04-06 00:56:06');
INSERT INTO `registro_visitas_anuncios` VALUES (472, 49, '2016-04-06 00:56:46');
INSERT INTO `registro_visitas_anuncios` VALUES (473, 27, '2016-04-08 14:01:52');
INSERT INTO `registro_visitas_anuncios` VALUES (474, 27, '2016-04-08 14:03:28');
INSERT INTO `registro_visitas_anuncios` VALUES (475, 23, '2016-04-09 20:13:46');
INSERT INTO `registro_visitas_anuncios` VALUES (476, 32, '2016-04-14 00:59:28');
INSERT INTO `registro_visitas_anuncios` VALUES (477, 21, '2016-04-18 16:47:56');
INSERT INTO `registro_visitas_anuncios` VALUES (478, 27, '2016-04-18 16:48:03');
INSERT INTO `registro_visitas_anuncios` VALUES (479, 49, '2016-04-21 17:35:22');
INSERT INTO `registro_visitas_anuncios` VALUES (480, 30, '2016-04-21 17:36:17');
INSERT INTO `registro_visitas_anuncios` VALUES (481, 35, '2016-05-03 16:45:56');
INSERT INTO `registro_visitas_anuncios` VALUES (482, 35, '2016-05-03 16:46:22');
INSERT INTO `registro_visitas_anuncios` VALUES (483, 27, '2016-05-07 14:27:19');
INSERT INTO `registro_visitas_anuncios` VALUES (484, 27, '2016-05-07 14:28:38');
INSERT INTO `registro_visitas_anuncios` VALUES (485, 26, '2016-05-08 23:49:39');
INSERT INTO `registro_visitas_anuncios` VALUES (486, 23, '2016-05-10 12:42:10');
INSERT INTO `registro_visitas_anuncios` VALUES (487, 23, '2016-05-10 12:47:16');
INSERT INTO `registro_visitas_anuncios` VALUES (488, 26, '2016-05-10 12:47:22');
INSERT INTO `registro_visitas_anuncios` VALUES (489, 30, '2016-05-10 12:47:27');
INSERT INTO `registro_visitas_anuncios` VALUES (490, 31, '2016-05-10 12:47:34');
INSERT INTO `registro_visitas_anuncios` VALUES (491, 32, '2016-05-10 12:47:44');
INSERT INTO `registro_visitas_anuncios` VALUES (492, 33, '2016-05-10 12:47:51');
INSERT INTO `registro_visitas_anuncios` VALUES (493, 34, '2016-05-10 12:47:56');
INSERT INTO `registro_visitas_anuncios` VALUES (494, 35, '2016-05-10 12:48:13');
INSERT INTO `registro_visitas_anuncios` VALUES (495, 23, '2016-05-10 12:51:45');
INSERT INTO `registro_visitas_anuncios` VALUES (496, 59, '2016-05-11 12:00:23');
INSERT INTO `registro_visitas_anuncios` VALUES (497, 59, '2016-05-11 12:47:41');
INSERT INTO `registro_visitas_anuncios` VALUES (498, 23, '2016-05-24 21:02:24');
INSERT INTO `registro_visitas_anuncios` VALUES (499, 31, '2016-05-24 21:02:47');
INSERT INTO `registro_visitas_anuncios` VALUES (500, 58, '2016-05-24 21:19:32');
INSERT INTO `registro_visitas_anuncios` VALUES (501, 58, '2016-05-24 21:20:44');
INSERT INTO `registro_visitas_anuncios` VALUES (502, 58, '2016-05-24 21:21:33');
INSERT INTO `registro_visitas_anuncios` VALUES (503, 58, '2016-05-24 21:29:53');
INSERT INTO `registro_visitas_anuncios` VALUES (504, 59, '2016-06-11 16:11:07');
INSERT INTO `registro_visitas_anuncios` VALUES (505, 23, '2016-06-11 22:00:06');
INSERT INTO `registro_visitas_anuncios` VALUES (506, 60, '2016-07-03 15:38:46');
INSERT INTO `registro_visitas_anuncios` VALUES (507, 60, '2016-07-03 15:40:01');
INSERT INTO `registro_visitas_anuncios` VALUES (508, 64, '2016-07-03 15:40:13');
INSERT INTO `registro_visitas_anuncios` VALUES (509, 60, '2016-07-03 15:40:17');
INSERT INTO `registro_visitas_anuncios` VALUES (510, 61, '2016-07-03 15:40:20');
INSERT INTO `registro_visitas_anuncios` VALUES (511, 60, '2016-07-03 15:40:25');
INSERT INTO `registro_visitas_anuncios` VALUES (512, 61, '2016-07-03 15:40:31');
INSERT INTO `registro_visitas_anuncios` VALUES (513, 60, '2016-07-03 15:40:38');
INSERT INTO `registro_visitas_anuncios` VALUES (514, 64, '2016-07-03 15:41:03');
INSERT INTO `registro_visitas_anuncios` VALUES (515, 61, '2016-07-03 15:41:31');
INSERT INTO `registro_visitas_anuncios` VALUES (516, 59, '2016-07-11 18:34:10');
INSERT INTO `registro_visitas_anuncios` VALUES (517, 58, '2016-07-25 23:05:39');
INSERT INTO `registro_visitas_anuncios` VALUES (518, 26, '2016-08-23 15:22:36');
INSERT INTO `registro_visitas_anuncios` VALUES (519, 65, '2016-08-23 15:33:30');
INSERT INTO `registro_visitas_anuncios` VALUES (520, 70, '2016-08-23 15:33:44');

-- --------------------------------------------------------

-- 
-- Estructura de tabla para la tabla `tipo_inmueble`
-- 

CREATE TABLE `tipo_inmueble` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

-- 
-- Volcar la base de datos para la tabla `tipo_inmueble`
-- 

INSERT INTO `tipo_inmueble` VALUES (1, 'Departamento');
INSERT INTO `tipo_inmueble` VALUES (2, 'Casa');
INSERT INTO `tipo_inmueble` VALUES (3, 'Habitaci');

-- --------------------------------------------------------

-- 
-- Estructura de tabla para la tabla `tipo_transaccion`
-- 

CREATE TABLE `tipo_transaccion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

-- 
-- Volcar la base de datos para la tabla `tipo_transaccion`
-- 

INSERT INTO `tipo_transaccion` VALUES (1, 'Alquiler');
INSERT INTO `tipo_transaccion` VALUES (2, 'Compra');

-- --------------------------------------------------------

-- 
-- Estructura de tabla para la tabla `users`
-- 

CREATE TABLE `users` (
  `username` varchar(50) NOT NULL DEFAULT '',
  `password` blob,
  `fecha_creacion` datetime DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 
-- Volcar la base de datos para la tabla `users`
-- 

INSERT INTO `users` VALUES ('invictos', '����h�����.�k4̓', '2015-11-15 00:03:04');
