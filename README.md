# DESAFÍO ARQUITECTURA DE CAPAS

-  Acceder al proyecto en la dirección **http://localhost:9000**

\*\*Para este desafío persistencia de los datos esta basada en FileSystem y la persistencia de usuarios y sesiones en MONGODB.
La funcionalidad del proyecto no cambio, solo se agregaron las nuevas instrucciones para el desafio del Object Process.

## Consignas

-  Se agrupó el proyecto en capas de ruteo, controlador, lógica y persistencia.

### Loggueo

-  Se implementó el uso de Winston para el manejo de logs en los niveles, info, warn y error.

*  info: se muestra por consola
*  warn: en el archivo warn.log
*  error: en el archivo error.log "Solo errores del manejo de WebSockets"

### Main Dependencies

-  Para el servidor, manejo de rutas [Express JS](https://expressjs.com/es/ "Ver más")
-  Para el manejo de sessions en mongo [connect-Mongo](https://www.npmjs.com/package/connect-mongo "Ver más")
-  Para manejo de session en la app [Express Session](https://www.npmjs.com/package/express-session "Ver más")
-  Para el render del frontend [Express Handlebars](https://www.npmjs.com/package/express-handlebars "Ver más")
-  Middleware de autenticación para Node [passport](https://www.npmjs.com/package/passport "Ver más")
-  Para el manejo de autenticación de Facebook [passport-facebook](https://www.npmjs.com/package/passport-facebook "Ver más")
-  Para la implementación de mysql [mysql](https://momentjs.com/ "Ver más")
-  Para la normalización de objetos anidados en la instancia de mensajes [normalizr](https://www.npmjs.com/package/normalizr "Ver más")
-  Para la configuracion del servidor y la comunicación entre el backend y frontend [socket io](https://socket.io/ "Ver más")

-  Se utilizó la dependencia de dotenv para la implementacion y uso de variables de entorno .env [dotenv](https://www.npmjs.com/package/dotenv "Ver más")
-  Herramienta para trabajar con MongoDB [mongoose](https://www.npmjs.com/package/mongoose "Ver más")

#### Created by: **Ivan Hernández Preza**

-
