/*
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './lab7.html',
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
  */

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './lab7.html',
  styleUrl: './app.css'
})
export class App {
  
  onSubmit(form: NgForm) {
    console.log(form.value);
    console.log(form.valid);

  }

}
