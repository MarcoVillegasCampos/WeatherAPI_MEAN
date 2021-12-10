import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";

@Component({
  selector: "app-chicago",
  templateUrl: "./chicago.component.html",
  styleUrls: ["./chicago.component.css"]
})
export class ChicagoComponent implements OnInit {
  weather:any = {};
  constructor(private _httpService: HttpService) {}
  ngOnInit() {
    this.getWeather();
  }
  getWeather() {
    let observable = this._httpService.getWeather("chicago");
    observable.subscribe((data: object) => {
 
      this.weather = data;
    });
  }
}
