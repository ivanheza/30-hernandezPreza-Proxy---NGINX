import express from "express"
import {fork} from "child_process"
import {generarProductos} from "../mocks/mockP.js"
const router = express.Router()

import ProductosApi from "../models/productos.js"
import config from "../config.js"

router.get("/productos-test", async (req, res) => {
   ///---- se genera los Mocks
   const productosNuevos = generarProductos(5)

   const data = await ProductosApi.readData()
   productosNuevos.map((p) => {
      data.push(p)
   })
   await ProductosApi.writeFile(data, "Mock Insertado")

   res.redirect("/home")
})

////---- desafío Process OBJECT

router.get("/randoms", async (req, res) => {
   ///---- se genera los Mocks
   let cant = req.query.cant
   const forked = fork("process-child.js")

   if (cant) {
      console.log("process by query")
      forked.on("message", (data) => {
         res.send(data)
      })
      console.log(
         `Servidor express escuchando en el puerto ${config.minimist_PORT} - PID WORKER ${process.pid}`
      )
      forked.send(cant)
   } else {
      console.log("processDefault")
      forked.on("message", (data) => {
         res.send(data)
      })
      forked.send(1000000)
   }
})

export default router
