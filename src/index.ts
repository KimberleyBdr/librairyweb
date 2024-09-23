
// const john = new User({name: 'John', age: 34})
// console.log(john.get('name'));

import { User } from "./models/User";
import { UserEdit } from "./view/UserEdit";

// john.set({age: 35})
// john.on('change', () => {
//      console.log('Changement');
// })

// john.trigger('change')

// const createUser = async () => {
//      await axios.post('http://localhost:3001/users', {
//           name: 'Jojo', 
//           age: 34
//      })
// }
// createUser()

// const john = new User({name: 'Arthur', age: 52})
// john.save()

// john.fetch()
// john.set({age: 45})
// john.save()

// const lili = new User({name: 'Lili', age: 18})
// lili.on('save', () => console.log('Sauvegarde du User'))
// lili.save()
// lolo.set({age: 22 })
// lolo.sync.save(lolo.attributes.data)

const user = User.buildUser({name: 'Kim', age: 26})

// john.save()
// john.on('change', () => console.log('changement'))
// john.set({age: 35})
// john.save()
// const collec = User.buildUserCollection()
// collec.on('change', () => console.log('Recupération de la collection User'))
// collec.fetch()
// console.log(collec.models);

const rootElem = document.getElementById('root')
const userEdit = new UserEdit(
     rootElem!,
     user
)

userEdit.render()
console.log(userEdit);
