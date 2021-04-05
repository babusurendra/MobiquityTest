import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ForecastDetailsComponent } from "./componets/forecast-details/forecast-details.component";
import { WeatherDetailsComponent } from "./componets/weather-details/weather-details.component";

const routes: Routes = [
  { path: "home", component: WeatherDetailsComponent },
  { path: "forecast-details/:cityName", component: ForecastDetailsComponent },
  { path: "weather-details", component: WeatherDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
