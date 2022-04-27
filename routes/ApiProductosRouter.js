import express from "express"
import {fork} from "child_process"
import {generarProductos} from "../mocks/mockP.js"
const router = express.Router()

import ProductosApi from "../models/productos.js"
import config from "../config.js"
import {generarNumeros} from "../process-child.js"
import logger from "../winston.js"

router.get("/productos-test", async (req, res) => {
   const {url, method} = req
   logger.info(`Metodo: ${method} - Ruta: ${url}`)
   ///---- se genera los Mocks
   const productosNuevos = generarProductos(5)

   const data = await ProductosApi.readData()
   productosNuevos.map((p) => {
      data.push(p)
   })
   await ProductosApi.writeFile(data, "Mock Insertado")

   res.redirect("/home")
})

////--------
////-------- desafío Process OBJECT

router.get("/randoms", async (req, res) => {
   const {url, method} = req
   logger.info(`Metodo: ${method} - Ruta: ${url}`)
   ///---- se genera los Mocks

   //
   let cant = req.query.cant
   //const forked = fork("process-child.js")
   if (!cant) {
      const numeros = generarNumeros(1000000)
      const duplicated = numeros.reduce((acc, value) => {
         return {...acc, [value]: (acc[value] || 0) + 1}
      }, {})
      console.log("first")
      res.send(duplicated)
   } else {
      console.log(cant, "cantidad")
      const numeros = generarNumeros(cant)
      const duplicated = numeros.reduce((acc, value) => {
         return {...acc, [value]: (acc[value] || 0) + 1}
      }, {})
      res.send(duplicated)
   }
})

export default router
