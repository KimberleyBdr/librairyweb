import { Callback } from "./types/tCallback"

export class Eventing {
     events: {[key: string]: Callback[]} = {}  // {'click': [cb1], [cb2], 'hover': [cb3]}

     on = (eventName: string, callback: Callback) => {
          const handlers = this.events[eventName] || []
          handlers.push(callback)
          this.events[eventName] = handlers
     }

     trigger = (eventName: string) => {
          const handlers = this.events[eventName]
          if(!handlers || !handlers.length) return
          handlers.forEach(callback => callback())
     }
}