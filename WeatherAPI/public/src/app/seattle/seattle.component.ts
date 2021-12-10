import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";

@Component({
  selector: "app-seattle",
  templateUrl: "./seattle.component.html",
  styleUrls: ["./seattle.component.css"]
})
export class SeattleComponent implements OnInit {
  weather:any = {};
  constructor(private _httpService: HttpService) {}
  ngOnInit() {
    this.getWeather();
  }
  getWeather() {
    let observable = this._httpService.getWeather("seattle");
    observable.subscribe((data: object) => {
      console.log("Got our data from component!", data);
      this.weather = data;
    });
  }
}
