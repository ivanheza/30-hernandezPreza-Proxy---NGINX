import express from "express"
import {randomProductos, testProductos} from "../controller/controller-productos.js"
const router = express.Router()

router.get("/productos-test", testProductos)

////--------

router.get("/randoms", randomNumbers)

export default router
