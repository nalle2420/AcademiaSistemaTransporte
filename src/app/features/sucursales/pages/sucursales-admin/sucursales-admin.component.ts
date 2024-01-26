import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../../empleados/models/empleado';
import { createStore } from 'devextreme-aspnet-data-nojquery';
import { environment } from '../../../../../environments/environment';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValueChangedEvent } from 'devextreme/ui/lookup';
import { SucursalService } from '../../services/sucursal.service';
import { Sucursal } from '../../models/sucursal';
import themes from 'devextreme/ui/themes';
import { SelectionChangedEvent } from 'devextreme/ui/data_grid';
import { SucursalPorEmpleadoDtoReq } from '../../models/sucursal-por-empleadoDto';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sucursales-admin',
  templateUrl: './sucursales-admin.component.html',
  styles: ``
})
export class SucursalesAdminComponent implements OnInit {



   empleados: any;
   url:string=environment.webApis.transporteApi;
   sucursalesForm: FormGroup;
   sucursales:Array<Sucursal>= [];
   sucursalesVinculadas:Array<SucursalPorEmpleadoDtoReq>=[];
   allMode: string;
  checkBoxesMode: string;
distancia: number=0;


  constructor(private serviceSucursales:SucursalService) {
    this.sucursalesForm = new FormGroup({
      empleadoId:new FormControl(0,[Validators.required]),
      sucursalId:new FormControl(0,[Validators.required]),
      distanciaKM: new FormControl(0,[Validators.required])
     })

     this.allMode = 'allPages';
     this.checkBoxesMode = themes.current().startsWith('material') ? 'always' : 'onClick';
  }

  ngOnInit(): void {

    this.empleados=createStore({key:"SucursalId",loadUrl:this.url+"/empleado/empleadostransportedev"});

   }

   onValueChange(data:any) {
    this.onChargeSucursales(data.value)

    }
  onChargeSucursales(idEmpleado:number) {
    this.serviceSucursales.getSucursalesNoVinculadas(idEmpleado).then(data=>{
      this.sucursales=data;
      console.log(data);

    })
    .catch(error=>{
      console.log(error);
    })

    this.serviceSucursales.getSucursalesVinculadas(idEmpleado).then(data=>{
      this.sucursalesVinculadas=data;
      console.log(data);

    })
    .catch(error=>{
      console.log(error);
    })

  }

  onCancel():void{
    this.sucursalesForm.reset({
      sucursalId: { value: 0},
      empleadoId: 0,
      distanciaKM:0
    });
    this.sucursales=[];
    this.sucursalesVinculadas=[];

  }

  onAdd() {
    if(this.sucursalesForm.invalid){
      Swal.fire('Alerta','Debe ingresar todos los datos solicitados','warning');

     }
     else{
      const relacionAgregar: SucursalPorEmpleadoDtoReq={sucursalId:this.sucursalesForm.value.sucursalId,empleadoId:this.sucursalesForm.value.empleadoId,distanciaKM:this.sucursalesForm.value.distanciaKM,nombre:null};
       console.log(relacionAgregar);

      this.serviceSucursales.postSucursalPorEmpleado(relacionAgregar).then(data=>{
        console.log(data);
        if(data.ok){
          Swal.fire({
            title: '¡Hola!',
            text: data.mensaje,
            icon: 'success',
            confirmButtonText: 'Entendido'
          });
          console.log(data.mensaje)
        }else{
          Swal.fire({
            title: 'Error',
            text: data.mensaje,

            icon: 'error',
            confirmButtonText: 'Entendido'
          });
          console.log(data.mensaje)

        }
      }).catch(error => {
        console.log(error);

      });

     }
    }


}
