import { Component } from '@angular/core';
import {FormGroupName, FormControl, FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyForms';
    onSubmit(data: object){
      console.log('data=>>>', data)
    }
}
