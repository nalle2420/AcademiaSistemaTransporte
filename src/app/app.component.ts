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
   // const typeString: TypeString= new TypeString();
    //typeString.typeString("hola");

   // new TypeNumber().typeNumber("hola");

   // TypeDate.typeDate("hola");





  // console.log('Tipados');

   //const nombre: string = 'Hola mundo';
  //  const edad:number=1;
  //  const array:number[]=[];
  //  const array2: Array<number> = new Array<number>();
  //  const array3: Array<number>= [];

  // const verdadero:boolean=true;
  // const cualquier:any='hola mundo';
  // const fecha:Date= new Date();


   //console.log(nombre);
  // this.typeString("Hola");

  //this.typeNumber("hola");

  //this.typeDate("hola");


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

