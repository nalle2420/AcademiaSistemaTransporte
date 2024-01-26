import { Component, OnDestroy, OnInit } from '@angular/core';
import { TypeDate,TypeString, TypeNumber } from './classes/index';
import { IType } from './classes/itype';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'AcademiaSistemaTransporte';

  constructor() {

    const typeDate:IType= new TypeDate(new Date());
    typeDate.toShow();



  // const verdadero:boolean=true;
  // const cualquier:any='hola mundo';
  // const fecha:Date= new Date();




  }


  ngOnInit(): void {
    console.log("init");
   setTimeout(() => {

   }, 2500);
  }
  ngOnDestroy(): void {
   console.log("destroy")

  }







}

