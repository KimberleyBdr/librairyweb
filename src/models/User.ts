import { ApiSync } from "../framework/models/ApiSync";
import { Attributes } from "../framework/models/Attributes";
import { Collection } from "../framework/models/Collection";
import { Eventing } from "../framework/models/Eventing";
import { Model } from "../framework/models/Model";

export interface UserProps {
     id?: string;
     name: string;
     age: number
}

const rootUrl = 'http://localhost:3001/users'

export class User extends Model<UserProps> {
     static buildUser(attrs: UserProps): User {
          return new User(
               new Attributes<UserProps>(attrs),
               new Eventing(),
               new ApiSync<UserProps>('http://localhost:3001/users')
          )
     }

     static buildUserCollection(): Collection<User, UserProps> {
          return new Collection<User, UserProps>(
               rootUrl, 
               (json: UserProps) => User.buildUser(json)
          )
     }

     setRandomAge(){
          this.set({age: Math.floor(Math.random() * 99 + 1)})
     }
     
}
