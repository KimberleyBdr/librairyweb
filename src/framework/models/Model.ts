import { HasID, iEvent, iModAttributes, iSync } from "./interfaces/interfaces"

export class Model<T extends HasID> {
     constructor(
          private attributes: iModAttributes<T>,
          private events: iEvent,
          private sync: iSync<T>
     ){}

     on = this.events.on
     trigger = this.events.trigger
     get = this.attributes.get

     // get get() {
     //      return this.attributes.get
     // }

     set(updatedData: Partial<T>): void {
          this.attributes.set(updatedData)
          this.events.trigger('change')
     }

     fetch(): void {
          const id = this.get('id')

          if(typeof id !== 'string') throw new Error('Cannot fetch without ID')
          
          this.sync
               .fetch(id)
               .then(response => {
                    this.attributes.set(response.data)
               })
     }

     save(): void {
          this.sync .save(this.attributes.getAll())
                    .then(response => {
                         this.trigger('save')
                    })
                    .catch(() => {
                         this.trigger('error')
                    })
     }
}