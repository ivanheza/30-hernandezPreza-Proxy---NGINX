import express from "express"
import {cpus} from "os"
import config from "../config.js"
const numCPUs = cpus().length
const router = express.Router()

router.get("/", (req, res) => {
   console.log(config.minimist_PORT)
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
      PORT: config.minimist_PORT,
   }

   res.render("process-info", {p, user})
})

export default router
