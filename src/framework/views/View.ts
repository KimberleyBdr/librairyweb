import { HasID } from "../models/interfaces/interfaces"
import { Model } from "../models/Model"
import { Callback } from "../models/types/tCallback"

export abstract class View<T extends Model<P>, P extends HasID> {
     regions: {[key: string]: Element} = {}

     constructor(
          public parent: Element,
          public model: T
     ){ 
          this.bindModel()
     }

     abstract template(): string

     bindModel(): void {
          this.model.on('change', () => {
               this.render()
          })
     }

     eventsMap(): {[key: string]: Callback} {
          return {}
     }
     
     bindEvent(fragment: DocumentFragment): void {
          const eventsMap = this.eventsMap()
          for(let eventKey in eventsMap){
               const [eventName, selector] = eventKey.split(':')
               fragment
                    .querySelectorAll(selector)
                    .forEach(element => {
                         element.addEventListener(eventName, eventsMap[eventKey])
                    })
          }
     }
     
     regionsMap(): {[key: string]: string} {
          return {}
     }

     bindRegions(fragment: DocumentFragment): void {
          const regionMap = this.regionsMap()
          for(let key in regionMap){
               const selector = regionMap[key]
               const element = fragment.querySelector(selector)

               if(element){
                    this.regions[key] = element
               }
          }
     }

     onRender(): void {

     }

     render(): void {
          this.parent.innerHTML = ''
          const templateElement = document.createElement('template')
          templateElement.innerHTML = this.template()

          this.bindEvent(templateElement.content)
          this.bindRegions(templateElement.content)

          this.onRender()

          this.parent.append(templateElement.content)
     }
}