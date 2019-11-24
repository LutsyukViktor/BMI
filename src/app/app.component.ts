import { Component, Input } from '@angular/core';
export interface hstr
{
  Weight: number
  Height: number
  Age: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'CalApp';
}