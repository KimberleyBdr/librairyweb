import { AxiosPromise } from "axios"
import { Callback } from "../types/tCallback"

export interface HasID {
     id?: string
}

export interface iEvent {
     on(eventName: string, callback: Callback):void
     trigger(eventName:string): void
}

export interface iModAttributes<T> {
     getAll(): T
     get<K extends keyof T>(propName:K): T[K]
     set(updatedData: Partial<T>): void
}

export interface iSync<T> {
     fetch(id: string): AxiosPromise
     save(data: T): AxiosPromise
}