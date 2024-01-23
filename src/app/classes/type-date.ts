import { IType } from "./itype";

export class TypeDate implements IType {

 constructor(private date:Date) {
  this.date=date;
 }

 toShow(params:string):void{
  console.log(params);
  console.log(this.date);
 }

  static typeDate(params: string): void{
    console.log(params);

    const dateNow: Date = new Date(2024,1,22);

  //  console.log(dateNow.getMonth(),dateNow.toLocaleString('dd/mm/aa'));
  }

  getMonthNotIndex(){
    return this.date.getMonth()+1;
     let mes:string=''
    switch(this.date.getMonth()){
      case 0:
        mes='Enero';
        break;
    }
  }
}
