import axios from "axios"
import { Eventing } from "./Eventing"
import { iEvent } from "./interfaces/interfaces"

export class Collection<T, P> {
     models: T[] = []
     events: iEvent = new Eventing()

     constructor(
          public rootUrl: string, 
          public deserialize: (json: P) => T
     ){}
     
     get on() {
          return this.events.on
     }

     get trigger() {
          return this.events.trigger
     }

     fetch(): void {
          axios.get(this.rootUrl)
               .then(response => {
                    response.data.forEach((value: P) => {
                         const model = this.deserialize(value)
                         this.models.push(model)
                    })
                    this.trigger('change')
               })
     }
}