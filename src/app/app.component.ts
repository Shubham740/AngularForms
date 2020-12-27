import { Component } from '@angular/core';
import {FormGroupName, FormControl, FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to angular 7';
  money = 23333.34;
  date = new Date();
    nameObject = {name:'Shubham', Age:25, height:'5 Foot 11 Inch',yearsOfEx: 4}

  onSubmit(data: object){
      console.log('data=>>>', data)
    }
}
