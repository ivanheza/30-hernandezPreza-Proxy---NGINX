import ProductosApi from "../../models/productos.js"
import formatoProducto from "../../utils/formatoProducto.js"
import logger from "../../winston.js"
const productosSocket = async (socket, sockets) => {
   try {
      ///Carga productos para cada socket
      const data = await ProductosApi.readData()

      socket.emit("loadProducts", data)
   } catch (error) {
      logger.error(`${error} -  "Ocurrio un error al cargar los productos"`)
   }
   //nuevo porducto
   socket.on("newProduct", async (product) => {
      //console.log(product)
      try {
         const newProd = await formatoProducto(product)
         console.log(newProd)
         await ProductosApi.guardarNuevo(newProd)

         sockets.emit("newProduct", newProd)
      } catch (error) {
         logger.error(`${error} -  "Ocurrio un error al cargar los productos"`)
      }
   })

   //Socket para borrar producto
   socket.on("deleteProduct", async (id) => {
      try {
         ///holas
         //console.log(id)
         await ProductosApi.borrar(id)
         /// se cargan los productos para los sockets
         sockets.emit("loadProducts", await ProductosApi.readData())
      } catch (error) {
         logger.error(error)
      }
   })
   //se define socket para escoger un solo producto, esto con la finalidad de poder hacer uso del boton borrar
   socket.on("getProduct", async (id) => {
      const listaProductos = await ProductosApi.readData()
      const product = listaProductos.find((p) => p.id == id)
      //console.log(product)
      socket.emit("selectedProduct", product)
   })
}

export default productosSocket
