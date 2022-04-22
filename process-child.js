const generarRandom = (min, max) => {
   return Math.floor(Math.random() * (max - min + 1) + min)
}

const generarNumeros = (cant) => {
   let randomNumbers = []
   for (let i = 1; i <= cant; i++) {
      const randomNumber = generarRandom(1, 1000)
      randomNumbers.push(randomNumber)
   }

   return randomNumbers
}
process.on("message", (cant) => {
   const numeros = generarNumeros(cant)
   const duplicated = numeros.reduce((acc, value) => {
      return {...acc, [value]: (acc[value] || 0) + 1}
   }, {})
   process.send(duplicated)
})
