import { Component } from '@angular/core';
import {FormGroupName, FormControl, FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyForms';
  loginForm=new FormGroup({
    email:new FormControl('', Validators.required),
    password:new FormControl('', Validators.required)
  })
    getEmail(){
      return this.loginForm.get('email')
    }
}
