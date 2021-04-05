import { Component, OnInit } from "@angular/core";
import { WetherDataService } from "./services/wether-data.service";
import { WeatherDetailsComponent } from "./componets/weather-details/weather-details.component";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WetherDataService,
    private router:Router) {}
  title = "Mobiquity";
  private europeCitiesDetails: any = [];
  ngOnInit() {
    this.router.navigate(['weather-details']);
  }
  navigateToHome(){
    this.router.navigate(['weather-details']);
  }
}
