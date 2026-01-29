import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './myhtml.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  nivalue: string='';
  protected readonly title = signal('');
}
