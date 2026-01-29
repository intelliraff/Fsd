import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './myhtml.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  nivalue: string='';
  num1: number=0;
  num2: number=0;
  mypic: string='.\favicon.ico';
  isEnabled: boolean=false;
  protected readonly title = signal('');
}
