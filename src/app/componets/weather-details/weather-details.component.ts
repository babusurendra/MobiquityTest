import { Component, OnInit } from "@angular/core";
import { WetherDataService } from "../../services/wether-data.service";
@Component({
  selector: "app-weather-details",
  templateUrl: "./weather-details.component.html",
  styleUrls: ["./weather-details.component.scss"],
})
export class WeatherDetailsComponent implements OnInit {
  constructor(private weatherService: WetherDataService) {}
  title = "Mobiquity";
  private europeCitiesDetails: any = [];
  ngOnInit() {
    
    this.getWeatherDetails();

  }
  getWeatherDetails() {
    this.weatherService.getWeatherData().subscribe((results) => {
      this.europeCitiesDetails = results;
    });
  }
}
