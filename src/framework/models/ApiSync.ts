import axios, { AxiosPromise } from "axios";
import { HasID } from "./interfaces/interfaces";


export class ApiSync<T extends HasID> {
     constructor(
          public apiUrl: string
     ){}

     fetch(id: string): AxiosPromise {
          return axios.get(`${this.apiUrl}/${id}`)
     }

     save(data: T): AxiosPromise {
          const { id } = data

          if(id) {
               return axios.patch(`${this.apiUrl}/${id}`, data)
          } 
          return axios.post(this.apiUrl, data)
          
     }
}