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


/*
lab 7-1:

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
  */

import {Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector:'app-root',
  standalone:false,
  templateUrl:'./lab7_2.html'

})

export class App{
  a: number = 0;
  b: number = 0;
  result: number | null = null;
  Add() {
    this.result = this.a + this.b;
  }
  
  c: number=0;
  d: number=0;
  result2 :number |null=null;
  Sub(){
    this.result2=this.c-this.d;
  }

  e: number=0;
  f: number=0;
  result3: number|null=null;
  Mul(){
    this.result3=this.e*this.f;
  }

  g: number=0;
  h: number=0;
  result4: number|null=null;
  Div(){
    this.result4=this.g/this.f;
  }

}
