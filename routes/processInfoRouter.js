import express from "express"
import {cpus} from "os"
import config from "../config.js"
import compression from "compression"
import logger from "../winston.js"
const numCPUs = cpus().length
const router = express.Router()

let PUERTO = config.minimist_PORT || process.env.PORT || 8080

router.get("/", (req, res) => {
   const {url, method} = req
   console.log()
   logger.info(`Metodo: ${method} - Ruta: ${url}`)

   let user = {
      name: "Admin",
      profilePhoto: "https://cdn1.iconfinder.com/data/icons/web-55/32/web_3-512.png",
   }
   let p = {
      argumentos: process.argv,
      OS: process.platform,
      nodeVer: process.version,
      memoria: process.memoryUsage(),
      path: process.execPath,
      pID: process.pid,
      folder: process.cwd(),
      numCPUs: numCPUs,
      PORT: PUERTO,
   }

   res.render("process-info", {p, user})
})
////---- Ruta con el middleware Compression()

router.get("/zip", compression(), (req, res) => {
   const {url, method} = req
   logger.info(`Metodo: ${method} - Ruta: ${url}`)

   let user = {
      name: "Admin",
      profilePhoto: "https://cdn1.iconfinder.com/data/icons/web-55/32/web_3-512.png",
   }
   let p = {
      argumentos: process.argv,
      OS: process.platform,
      nodeVer: process.version,
      memoria: process.memoryUsage(),
      path: process.execPath,
      pID: process.pid,
      folder: process.cwd(),
      numCPUs: numCPUs,
      PORT: PUERTO,
   }

   res.render("process-info", {p, user})
})

export default router
