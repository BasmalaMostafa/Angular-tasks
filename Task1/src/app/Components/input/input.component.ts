import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  myInput = "";

  getMyInput(input:any){
    this.myInput=input.target.value;
  }

  resetData(input?:any){
    this.myInput="";
  }
}
