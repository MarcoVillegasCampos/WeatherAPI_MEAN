import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";

@Component({
  selector: "app-dc",
  templateUrl: "./dc.component.html",
  styleUrls: ["./dc.component.css"]
})
export class DcComponent implements OnInit {
  weather:any = {};
  constructor(private _httpService: HttpService) {}
  ngOnInit() {
    this.getWeather();
  }
  getWeather() {
    let observable = this._httpService.getWeather("washington");
    observable.subscribe((data: object) => {

      this.weather = data;
    });
  }
}
