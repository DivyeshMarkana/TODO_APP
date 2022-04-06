import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {

  constructor() { }

  setData(key: string, data: any){
    localStorage.setItem(key, JSON.stringify(data))
  }

  getData(key: string): any{
    const ref = localStorage.getItem(key)

    return ref
  }

  removeData(key){
    localStorage.removeItem(key)
  }

  clearData(){
    localStorage.clear()
  }
}
