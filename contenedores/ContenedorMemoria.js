class ContenedorMemoria {
   constructor() {
      this.elementos = []
   }

   listar(id) {
      const elem = this.elementos.find((elem) => elem.id == id)
      return elem || {error: `elemento no encontrado`}
   }

   listarAll() {
      return [...this.elementos]
   }

   guardar(elem) {
      this.elementos.push(elem)
      return elem
   }

   actualizar(elem) {
      const newElem = {...elem, id: Number(elem.id)}
      const index = this.elementos.findIndex((p) => p.id == elem.id)
      if (index == -1) {
         return {error: `elemento no encontrado`}
      } else {
         this.elementos[index] = newElem
         return newElem
      }
   }

   borrar(id) {
      const index = this.elementos.findIndex((elem) => elem.id == id)
      if (index == -1) {
         return {error: `elemento no encontrado`}
      } else {
         return this.elementos.splice(index, 1)
      }
   }

   borrarAll() {
      this.elementos = []
   }
}

export default ContenedorMemoria
