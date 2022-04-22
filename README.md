# Desafío SERVIDOR DE BALANCE CON CARGAS

-  Acceder al proyecto en la dirección **http://localhost:9000**

\*\*Para este desafío persistencia de los datos esta basada en FileSystem y la persistencia de usuarios y sesiones en MONGODB.
La funcionalidad del proyecto no cambio, solo se agregaron las nuevas instrucciones para el desafio del Object Process.

## Consignas

-  Se muestra en la ruta /info la info del objeto process, se agregó la información sobre la cantidad de procesadores disponibles.

*  Prueba modo cluster
   **node server.js --port=8081 --CLUSTER**
   **node server.js --port=8081 --FORK**
   Si no se le pasa argumento FORK o Cluster inicia en fork

-  En el archivo config.js se encuentra una configuración para definir el puerto y modo de servidor "FORK" ó "CLUSTER". El default es fork
-  Todas las variables que contienen información delicada estan dentro del archivo _.env_

*  Prueba modo cluster nodemon **npm run cluster**

-  Para ejecutar el servidor en modo CLUSTER pasar por consola el parametro --CLUSTER o ejecutar el comando npm run cluster

*  Prueba NGINX Y PM2 se pueden cambiar los argumentos de port y modo

-  NGINX esta configurado para responder y redireccionar los endpoints **/info** y **/api/randoms** se le puede pasar por query la cantidad de randoms **?cant=1000**

-  pm2 start server.js --name="Server Cluster" --watch -- port=8081 --CLUSTER
-  pm2 start server.js --name="Server 1" --watch -- --port=8081 --FORK
-  pm2 start server.js --name="Server 2" --watch -- --port=8082 --FORK
-  pm2 start server.js --name="Server 3" --watch -- --port=8083 --FORK
-  pm2 start server.js --name="Server 4" --watch -- --port=8084 --FORK

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
