import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { WetherDataService } from "../../services/wether-data.service";

@Component({
  selector: "forecast-details",
  templateUrl: "./forecast-details.component.html",
  styleUrls: ["./forecast-details.component.scss"],
})
export class ForecastDetailsComponent implements OnInit {
  constructor(
    private weatherService: WetherDataService,
    private route: ActivatedRoute
  ) {}
  private seaLevelForCast: any = [];
  private cityName: string;
  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.cityName = String(routeParams.get("cityName"));
    this.getForeCastDetails();
  }
  getForeCastDetails() {
    this.weatherService
      .getSeaLevelForeCast(this.cityName)
      .subscribe((weatherForecast: any) => {
        for (var i = 7; i <= weatherForecast.list.length; i += 8) {
          this.seaLevelForCast.push(weatherForecast.list[i]);
        }
      });
  }
}
