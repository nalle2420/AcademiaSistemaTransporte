import { Component, OnInit } from '@angular/core';
import { Viajes } from '../../models/viaje';
import { SucursalService } from '../../../sucursales/services/sucursal.service';
import { Sucursal } from '../../../sucursales/models/sucursal';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmpleadoService } from '../../../empleados/services/empleado.service';
import { Empleado } from '../../../empleados/models/empleado';
import { ValueChangedEvent } from 'devextreme/ui/select_box';
import { EmpleadoPorSucursalDto } from '../../../empleados/models/empleado-por-sucursal';
import { TransportistaService } from '../../../transportista/services/transportista.service';
import { Transportista } from '../../../transportista/models/transportista';
import themes from 'devextreme/ui/themes';
import { SelectionChangedEvent } from 'devextreme/ui/data_grid';
import { createStore } from 'devextreme-aspnet-data-nojquery';
import { environment } from '../../../../../environments/environment';
import { ViajeDetalleDto } from '../../models/viaje-detalle';
import { ClickEvent } from 'devextreme/ui/button';
import { ViajeService } from '../../services/viaje.service';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-viajes-registro',
  templateUrl: './viajes-registro.component.html',
  styles: ``
})
export class ViajesRegistroComponent implements OnInit {



  viajes: Array<Viajes>=[];
  sucursales:any;
  transportistas:Array<Transportista>= [];

    empleados:Array<EmpleadoPorSucursalDto>= [];
  empleadosSeleccionados:Array<EmpleadoPorSucursalDto>= [];

  now: Date = new Date();


  allMode: string;

  checkBoxesMode: string;

   url:string=environment.webApis.transporteApi;


  viajesForm: FormGroup;
  distanciaTotal: number=0;

  constructor(private sucursalesService:SucursalService, private empleadoService:EmpleadoService, private transportistaService:TransportistaService,private viajesService:ViajeService) {
    this.viajesForm = new FormGroup({
      sucursalId:new FormControl(0,[Validators.required]),
      empleadoId:new FormControl(0,[Validators.required]),
      fecha:new FormControl(new Date(),[Validators.required]),
      transportistaId:new FormControl(0,[Validators.required]),
      distanciaKM:new FormControl(0,[Validators.required]),

     })
     this.allMode = 'allPages';
     this.checkBoxesMode = themes.current().startsWith('material') ? 'always' : 'onClick';
  }



  ngOnInit(): void {

   this.sucursales=createStore({key:"SucursalId",loadUrl:this.url+"/sucursales/sucursalesdev"})

    this.transportistaService.getTransportista().then(data=>{
      console.log(data);
       this.transportistas=data;
    })
    .catch(error=>{
      console.log(error);
    })


  }

  onCancel():void{
    this.viajesForm.reset({
      sucursalId: { value: 0},
      empleadoId: 0,
      fecha: new Date(),
      transportistaId: 0,
      distanciaKM:0
    });
    this.empleadosSeleccionados=[];
    this.empleados=[];

  }

  onValueChange(data:any) {

  this.onChargeEmpleados(data.value)

  }

  onChargeEmpleados(idSucursal:number){
    this.empleadoService.getEmpleadosPorSucursal(idSucursal).then(data=>{
      this.empleados=data;
    })
    .catch(error=>{
      console.log(error);
    })

  }

  onSelectionChanged(e: any) {
    this.empleadosSeleccionados= e.selectedRowsData;
    this.distanciaTotal= this.empleadosSeleccionados.reduce((acumulador, objeto) => acumulador + objeto.distanciaKM, 0);

    if (this.distanciaTotal > 100) {
      e.component.deselectRows(e.currentSelectedRowKeys);

      alert('La distancia total no puede superar los 100 km.');
    }
    }


    onAdd():void{
     if(this.viajesForm.invalid){
      Swal.fire('Debe ingresar todos los datos solicitados');

     }
     else{
      const viajesDetallesList: ViajeDetalleDto[] = this.empleadosSeleccionados.map((empleado) => {
        return {
          viajeId: 4,
          empleadoId: empleado.empleadoId,
          distanciaKM: empleado.distanciaKM,
        };
      });

      const viajeAgregar: Viajes={usuarioId:3,sucursalId:this.viajesForm.value.sucursalId,transportistaId:this.viajesForm.value.transportistaId,listaDetalle:viajesDetallesList,fecha:this.viajesForm.value.fecha,totalDistancia:this.distanciaTotal};
       console.log(viajeAgregar);

      this.viajesService.postViajes(viajeAgregar).then(data=>{
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

     }}

}
