import { IType } from "./itype";

export class TypeNumber implements IType{
  typeNumber(params: string): void{
    const numero1: number=1;

    numero1.toFixed();
    console.log(parseInt(numero1.toFixed(2)));
   }

   toShow(params:string):void{
    const numero1: number=1;

    numero1.toFixed();
    console.log(parseInt(numero1.toFixed(2)));
   }

}
