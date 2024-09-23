import { View } from "../framework/views/View"
import { User, UserProps } from "../models/User"

export class UserShow extends View<User, UserProps>{
     template(): string {
          return `
               <div>
                    <h1>UserForm</h1><br>
                    <div> Nom de l'utilisateur: ${this.model.get('name')}</div>
                    <div> Age de l'utilisateur: ${this.model.get('age')}</div><br>
               </div>
          `
     }
}