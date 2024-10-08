import { User, UserProps } from "../models/User";
import { View } from "../framework/views/View";
import { UserShow } from "./UserShow";
import { UserForm } from "./UserForm";

export class UserEdit extends View<User, UserProps> {

     regionsMap(): { [key: string]: string; } {
          return {
               userShow: '.user-show',
               userForm: '.user-form'
          }
     }
     
     template(): string {
          return `
               <div>
                    <div class="user-show">

                    </div>
                    <div class="user-form">

                    </div>
               </div>
          `
     }

     onRender(): void {
          new UserShow(this.regions.userShow, this.model).render()
          new UserForm(this.regions.userForm, this.model).render()
     }
}