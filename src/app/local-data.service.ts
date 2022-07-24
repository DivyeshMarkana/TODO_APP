import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {

  constructor() { }

  API_KEY: string = environment.API_KEY

  setData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data))
  }

  getData(key: string): any {
    const ref = localStorage.getItem(key)

    return ref
  }

  removeData(key) {
    localStorage.removeItem(key)
  }

  clearData() {
    localStorage.clear()
  }
}
