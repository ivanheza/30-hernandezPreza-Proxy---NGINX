import {customAlphabet} from "nanoid"

const msgID = customAlphabet("1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ", 4)

///---- ///---- Metodo para darle formato
const formatoUsuario = (user) => {
   return {
      nombre: user.nombre,
      password: user.password,
      direccion: user.direccion,
      id: `USER-${msgID()}`,
   }
}

export default formatoUsuario
