import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";



@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private _http: HttpClient) { }
  getWeather(weather: string) {
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=c9bc354cd26a143f240e0dc040adba9b`);
  }
}
