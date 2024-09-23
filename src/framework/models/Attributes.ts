export class Attributes<T extends object> {
     constructor(
          private data: T
     ){}

     getAll = (): T => {
          return this.data
     }

     // dans une fonction fléchée le this ne perd plus son context
     get = <K extends keyof T>(propName: K): T[K] => {
          return this.data[propName]
     }

     // Partial = une partie de UserProps (soit name soit age soit les 2)
     set(updatedData: Partial<T>): void {
          Object.assign(this.data, updatedData)
     }
}
