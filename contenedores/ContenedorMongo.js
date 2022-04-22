class ContenedorMongo {
   constructor(model) {
      this.model = model
   }

   async readData() {
      try {
         const data = await this.model.find({})
         //console.log(data)
         return data
      } catch (error) {
         console.log(error)
      }
   }
   async find(email) {
      try {
         const data = await this.model.findOne({email: email})

         //console.log(data)
         return data
      } catch (error) {
         console.log(error)
         return false
      }
   }
   async getUserByEmail(email) {
      return await this.model.findOne({email})
   }

   async addFacebookUser(idFacebook, email, name, profilePhoto, source) {
      console.log(idFacebook, email, name, profilePhoto, source)

      const user = new this.model({
         idFacebook,
         email,
         name,
         profilePhoto,
         source: "facebook",
      })
      return user.save()
   }
}

export default ContenedorMongo
