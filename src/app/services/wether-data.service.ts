import { Injectable } from "@angular/core";
import { HttpClient,HttpErrorResponse } from "@angular/common/http";
import { throwError, forkJoin } from "rxjs";
import { catchError  } from "rxjs/operators";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: "root",
})
export class WetherDataService {
  constructor(private http: HttpClient) {}

  getWeatherData() {
    // Please use the "http://api.openweathermap.org/data/2.5/weather?q=" instead of environment.weatherDetailsURI if you dont have access to environment variables
    // pass your appId instead of environment.appId
    const londonReq = this.http.get(`${environment.weatherDetailsURI}London&appid=${environment.appId}`);
    const berlinReq = this.http.get(`${environment.weatherDetailsURI}berlin&appid=${environment.appId}`);
    const romeReq = this.http.get(`${environment.weatherDetailsURI}rome&appid=${environment.appId}`);
    const parisReq = this.http.get(`${environment.weatherDetailsURI}paris&appid=${environment.appId}`);
    const madridReq = this.http.get(`${environment.weatherDetailsURI}madrid&appid=${environment.appId}`);
    return forkJoin([londonReq,berlinReq,romeReq,parisReq,madridReq]).pipe(catchError(this.handleError));
  }
  getSeaLevelForeCast(cityName){
    // Please use the "http://api.openweathermap.org/data/2.5/forecast?q=" instead of environment.foreCastURI if you dont have access to environment variables
    // pass your appId instead of environment.appId
    return this.http.get(`${environment.foreCastURI}${cityName}&appid=${environment.appId}`);
  }
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
