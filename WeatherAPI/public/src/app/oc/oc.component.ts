import { Component, OnInit } from '@angular/core';

import { HttpService } from "../http.service";

@Component({
  selector: "app-oc",
  templateUrl: "./oc.component.html",
  styleUrls: ["./oc.component.css"]
})
export class OcComponent implements OnInit {
  weather:any = {};
  constructor(private _httpService: HttpService) {}
  ngOnInit() {
    this.getWeather();
  }
  getWeather() {
    let observable = this._httpService.getWeather("orange county");
    observable.subscribe((data: object) => {

      this.weather = data;
    });
  }
}
