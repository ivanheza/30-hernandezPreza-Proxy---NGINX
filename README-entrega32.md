# Desafío SERVIDOR DE BALANCE CON CARGAS

-  Acceder al proyecto en la dirección **http://localhost:9000**

\*\*Para este desafío persistencia de los datos esta basada en FileSystem y la persistencia de usuarios y sesiones en MONGODB.
La funcionalidad del proyecto no cambio, solo se agregaron las nuevas instrucciones para el desafio del Object Process.

## Consignas

### Compression

-  Se verificó la ruta /info e info/zip:

*  en la carpeta \_imagenesTarea se adjuntan las evidencias.

### Loggueo

-  Se implementó el uso de Winston para el manejo de logs en los niveles, info, warn y error.

*  info: se muestra por consola
*  warn: en el archivo warn.log
*  error: en el archivo error.log "Solo errores del manejo de WebSockets"

### Node built-in profiler "Se desactivo el process.child de la ruta /api/randoms"

-  Perfilamiento Prof Process

*  node --prof server.js
*  curl -X GET "http://localhost:9000/info"
*  artillery quick --count 20 -n 50 "http://localhost:9000/info" > result-info.txt
*  node --prof-process isolate-0x7febab600000-11498-v8.log > info_processed.txt
*  node --prof-process isolate-0x7fe834f00000-12811-12811-v8.log > 0x.txt

-  Autocannon npm run 0x

   ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

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
