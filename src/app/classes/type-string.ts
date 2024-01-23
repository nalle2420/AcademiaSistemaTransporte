import { IType } from "./itype";

export class TypeString implements IType{
  typeString(param:string): void{
    const nombre: string = 'Nalle';
    const apellido: string ='Reyes';
    const direccion: string =`${nombre} ${apellido}`;
    console.log(nombre,apellido,direccion);
  }

  toShow(params:string):void{
    const nombre: string = 'Nalle';
    const apellido: string ='Reyes';
    const direccion: string =`${nombre} ${apellido}`;
    console.log(nombre,apellido,direccion);
   }

}
