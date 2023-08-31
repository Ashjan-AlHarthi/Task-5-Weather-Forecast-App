import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

  getWeather(location: string){
    return this.http.get(
        
        'http://api.weatherstack.com/current?access_key=c460ba4ca88370a92a307054e814f485&query=' + location

        );
  }
}
