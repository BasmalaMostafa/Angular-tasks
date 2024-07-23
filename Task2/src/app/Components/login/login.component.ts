import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

name="";
age:number|null=null;

@Output() event= new EventEmitter();
login(){
  if(this.age!=null){
    // let myAge=this.age;
    if(!(this.name.length<3) && (20<this.age && this.age<30)){
      let student={name:this.name,age:this.age};
      //console.log(student);
      this.event.emit(student);
    }
    }
  }
}
