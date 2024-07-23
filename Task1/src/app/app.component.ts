import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputComponent } from './Components/input/input.component';
import { MySliderComponent } from './Components/my-slider/my-slider.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,InputComponent,MySliderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Task1';
}
