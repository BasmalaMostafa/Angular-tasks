import { Component } from '@angular/core';

@Component({
  selector: 'app-my-slider',
  standalone: true,
  imports: [],
  templateUrl: './my-slider.component.html',
  styleUrl: './my-slider.component.css'
})
export class MySliderComponent {
myCats=["./assets/images/cat1.jpg","./assets/images/cat2.jpg","./assets/images/cat3.jpg","./assets/images/cat4.jpg","./assets/images/cat5.jpg"];
index=0;
interval:any;

next(){
if(this.index==4){
  this.index=4;
}else{
  this.index++;
}
}

pre(){
  if(this.index==0){
    this.index=0;
  }else{
    this.index--;
  }
}

slide(){
  this.interval=setInterval(()=>{
    if(this.index===4){
      this.index=0;
    }else{
      this.index++;
    }
  },500);
}

stop(){
  clearInterval(this.interval);
}
}
