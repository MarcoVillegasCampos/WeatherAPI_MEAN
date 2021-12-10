import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";

@Component({
  selector: "app-losangeles",
  templateUrl: "./losangeles.component.html",
  styleUrls: ["./losangeles.component.css"]
})
export class LosangelesComponent implements OnInit {
  weather:any = {};
  constructor(private _httpService: HttpService) {}
  ngOnInit() {
    this.getWeather();
  }
  getWeather() {
    let observable = this._httpService.getWeather("los angeles");
    observable.subscribe((data: object) => {

      this.weather = data;
    });
  }
}
