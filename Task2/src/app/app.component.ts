import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  loginData:any;
  students:object[]=[];

  getData(myevent:any){
    this.loginData=myevent;
    this.students.push(this.loginData);
    //console.log(this.students);
  }
}
