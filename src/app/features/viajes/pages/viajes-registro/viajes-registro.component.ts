import { Component, OnInit } from '@angular/core';
import { Viajes } from '../../models/viaje';
import { SucursalService } from '../../../sucursales/services/sucursal.service';
import { Sucursal } from '../../../sucursales/models/sucursal';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmpleadoService } from '../../../empleados/services/empleado.service';
import { Empleado } from '../../../empleados/models/empleado';
import { ValueChangedEvent } from 'devextreme/ui/select_box';
import { EmpleadoPorSucursalDto } from '../../../empleados/models/empleado-por-sucursal';


@Component({
  selector: 'app-viajes-registro',
  templateUrl: './viajes-registro.component.html',
  styles: ``
})
export class ViajesRegistroComponent implements OnInit {

  viajes: Array<Viajes>=[];
  sucursales:Array<Sucursal>= []
  empleados:Array<EmpleadoPorSucursalDto>= []
 // selectedDate: Date;





  viajesForm: FormGroup;

  constructor(private sucursalesService:SucursalService, private empleadoService:EmpleadoService) {
    this.viajesForm = new FormGroup({
      sucursalId:new FormControl(0,[Validators.required]),
      empleadoId:new FormControl(0,[Validators.required]),
      fecha:new FormControl(null,[Validators.required]),
      transportistaId:new FormControl(0,[Validators.required]),

     })
  }

  ngOnInit(): void {
    this.sucursalesService.getSucursales().then(data=>{
      console.log(data);
       this.sucursales=data;
    })
    .catch(error=>{
      console.log(error);
    })


  }

  onDateChanged(event: any) {
    console.log('Fecha seleccionada:', this.selectedDate);
  }

  onValueChange(event: ValueChangedEvent) {
  this.onChargeEmpleados(event.value)
  }

  onChargeEmpleados(sucursal:Sucursal){
    this.empleadoService.getEmpleadosPorSucursal(sucursal.sucursalId).then(data=>{
      this.empleados=data;
    })
    .catch(error=>{
      console.log(error);
    })

  }
}
