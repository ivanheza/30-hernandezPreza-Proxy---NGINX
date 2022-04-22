import express from "express"
import passport from "passport"
import Users from "../models/userMongo.js"
import isAuthenticated from "../utils/middleWareAuth.js"

const router = express.Router()

let registro = true
let msg

///////////---- Home

router.get("/home", isAuthenticated, (req, res) => {
   ///---- se pasa el valor de la variable user para hacer uso de la informacion del usuario
   registro = true

   //console.log(image)
   let user = {
      name: req.user.name,
      email: req.user.email,
      profilePhoto: req.user.profilePhoto,
   }

   if (req.user) {
      res.render("index", {user})
   }
})
router.get("/", (req, res) => {
   ///---- nos redirige a la pagina home, en caso de no tener autorización nos lleva a login
   res.redirect("/home")
})

router.get("/login", (req, res) => {
   //console.log(req.session)

   ///---- Login: se verifica si el usuario esta utenticado y se redirecciona al home
   registro = false

   if (req.isAuthenticated()) {
      res.redirect("/")
   }
   res.render("face-login", {registro})
})

///////////---- Sign In With Facebook

router.post("/auth/facebook", passport.authenticate("facebook"))

router.get(
   "/auth/facebook/callback",
   passport.authenticate("facebook", {
      failureRedirect: "/login/Error",
      successRedirect: "/",
      scope: ["email"],
   })
)

router.get("/login/error", (req, res) => {
   let scripts = [{script: "/setTimeout.js"}]
   res.render("log-error", {scripts})
})
///////////---- Logout!

router.get("/logout", isAuthenticated, (req, res) => {
   ///------- Se definió una variable scripts para cargar el script set timeout y redirigir la pagina, se envia a la hora de hacer render del hbs
   let scripts = [{script: "/setTimeout.js"}]
   ///---- se utiliza el req. session para terminar la sesion.

   res.render("logout", {user: req.session.user, scripts})
   res.clearCookie("connect.sid")
   req.session.destroy((err) => {
      if (err) {
         console.log(err)
      }
   })
})

export default router
