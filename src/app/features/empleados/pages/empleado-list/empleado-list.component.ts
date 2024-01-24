import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmpleadoService } from '../../services/empleado.service';
@Component({
  selector:'app-empleado-list',
  templateUrl: './empleado-list.component.html'

})
export class EmpleadoListComponent implements OnInit {
currentEmpleado: Empleado={empleadoId:0,nombre:'',apellido:'',puestoId:0,activo:true};
 edit:boolean=false;

 empleadoFilter:Array<Empleado>= []

 txtFilter:FormControl= new FormControl(null,[Validators.required]);

 empleadosForm: FormGroup;

 constructor( private empleadoService:EmpleadoService) {


//this.empleadoFilter=this.empleadoService.getEmpleado();

 //this.txtFilter.valueChanges.subscribe(x =>this.onFilter(x));

 this.empleadosForm = new FormGroup({
  empleadoId:new FormControl(0,[Validators.required]),
  nombre: new FormControl(null,[Validators.required, Validators.minLength(2),Validators.maxLength(20)]),
  apellido: new FormControl(null,[Validators.required, Validators.minLength(2),Validators.maxLength(20)]),
  puestoId: new FormControl(0,[Validators.required]),
  activo: new FormControl(true,[Validators.required]),

 })
 }
  ngOnInit(): void {
    this.empleadoService.getEmpleados().then(data=>{
      console.log(data);
       this.empleadoFilter=data;

    })
    .catch(error=>{
      console.log(error);
    })


  }

 onEdit(empleado: Empleado): void {
  this.empleadosForm.patchValue(empleado);
 this.edit=true;
 }

 onAdd():void{
  const {id} = this.empleadosForm.value;

  if(id==0){
    alert("Debe ingresar un iD");
    return;
  }

  this.empleadoService.postEmpleados(this.empleadosForm.value).then(data=>{
    console.log(data);
  });

  this.onClean();
 }

 onSave():void{

  if(this.edit){
    this.empleadoService.updateUser(this.empleadosForm.value);

  this.onClean();
  this.edit=false;

  return;
  }
  this.onAdd();


 }

 onClean():void{
  this.empleadosForm.reset;
  this.empleadosForm.clearValidators;
 }

//  onFilter(nombre:string):void{

//   console.log(nombre);
//    const emplead= this.empleadoService.getEmpleado();
//   if(nombre.trim().length==0){
//     this.empleadoFilter= emplead;
//   }

//    this.empleadoFilter= emplead.filter(x=>x.nombre.includes(nombre)) ??[];
//  }

 onValueChange(event:any):void{
  const {name} = event;

  switch(name){
    case 'cancel':
    this.onClean();
    break;
    case 'save':
      this.onSave();
      break;
  }

 }

}


