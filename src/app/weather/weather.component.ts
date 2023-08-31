import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuService } from "../apixu.service";

interface WeatherFormValues {
  location: string;
}

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  
  public weatherSearchForm!: FormGroup;
  public weatherData: any;
  public errorFetchingWeather = false; // Declare the error flag
   
  constructor(
    private formBuilder: FormBuilder,
    private apixuService: ApixuService,
    ) { }

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({ location: [''] });
  }

  sendToAPIXU(formValues: WeatherFormValues) {
    this.apixuService.getWeather(formValues.location).subscribe(
      data => {
        if (data == false) {
          
          alert("Location not found. Please enter a valid city.");
          
        }
        

        else {

          this.weatherData = data;
          console.log(this.weatherData);

        }
        
      },
    );
  
  }

}