import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyForms';

  onSubmit(data: object){
    let email = data.value.email;
    let password = data.value.password
    console.log('email and password =>>>', email, password)
  }
}
