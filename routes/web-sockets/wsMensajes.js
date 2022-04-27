import MensajesApi from "../../models/mensajes.js"
import formatoMensaje from "../../utils/formatoMensaje.js"
import normalizeMsgs from "../../utils/normalizeMsg.js"
import logger from "../../winston.js"

const mensajesSocket = async (socket, sockets) => {
   ///
   try {
      const data = normalizeMsgs(await MensajesApi.readData())
      //console.log(data)
      ///---- se mandan los mensajes normalizados a todos los sockets
      socket.emit("mensajes", data)
   } catch (error) {
      logger.error(error + "Ocurrio un error al cargar los mensajes")
   }

   socket.on("chatMessage", async (mensaje) => {
      try {
         let newmsg = formatoMensaje(mensaje)
         logger.info(newmsg)
         //console.log(newmsg)
         await MensajesApi.guardarNuevo(newmsg)
         ///---- se mandan los mensajes a todos los sockets ya normalizados

         sockets.emit("mensajes", normalizeMsgs(await MensajesApi.readData()))
      } catch (error) {
         logger.error(error)
      }
   })
}

export default mensajesSocket
