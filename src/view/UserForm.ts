import { View } from "../framework/views/View"
import { User, UserProps } from "../models/User"

export class UserForm extends View<User, UserProps>{
     bindModel(): void {
          this.model.on('change', () => {
               this.render()
          })
     }

     eventsMap(): {[key: string] : () => void}{
          return {
               'click:.set-age': this.onSetAgeClick,
               'click:.set-name': this.onSetNameClick,
               'click:.save-model': this.onSaveClick
          }
     }

     onSetAgeClick = (): void => {
          this.model.setRandomAge()
          // voir si ça fonctionne bien
          // console.log(this.model.get('age'));
     }

     onSetNameClick = (): void => {
          const input = this.parent.querySelector('input')
          // "!" pour dire qu'il sera jamais null
          if(input === null) {
               throw new Error("Input vide")
          } else {
               this.model.set({name: input.value})
          }
     }

     onSaveClick = (): void => {
          this.model.save()
     }

     template() {
          return `
               <div>
                    <label>Nom : </label>
                    <input placeholder=${this.model.get('name')} />
                    <button class="set-name">Change Name</button>
                    <button class="set-age">RandomAge</button>
                    <button class="save-model">Save User</button>
               </div>
          `
     }
}