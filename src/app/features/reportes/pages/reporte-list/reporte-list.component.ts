import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import themes from 'devextreme/ui/themes';
import { Transportista } from '../../../transportista/models/transportista';
import { TransporteService } from '../../../../services/transporte.service';
import { TransportistaService } from '../../../transportista/services/transportista.service';
import { ReporteService } from '../../services/reporte.service';
import { ReportePrincipalRequeriment } from '../../models/reporte-viaje-Requeriment';
import { ReporteDto } from '../../models/reporte-fecha-transportista';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reporte-list',
  templateUrl: './reporte-list.component.html',
  styles: ``
})
export class ReporteListComponent implements OnInit {

reporteForm: FormGroup;
now: Date = new Date();
transportistas:Array<Transportista>= [];
datosReporte: Array<ReporteDto>=[];




constructor(private transportistaService:TransportistaService, private reporteService:ReporteService) {
  this.reporteForm = new FormGroup({
    transportistaId:new FormControl(0,[Validators.required]),
    fechaInicial:new FormControl(new Date(),[Validators.required]),
    fechaFinal:new FormControl(new Date(),[Validators.required])
   })
}

ngOnInit(): void {

   this.transportistaService.getTransportista().then(data=>{
     console.log(data);
      this.transportistas=data;
   })
   .catch(error=>{
     console.log(error);
   })


 }

 onBuscar() {
  if(this.reporteForm.invalid){
    Swal.fire('Debe ingresar todos los datos solicitados');

   }
 const datos:ReportePrincipalRequeriment={transportistaId:this.reporteForm.value.transportistaId,fechaInicio:this.reporteForm.value.fechaInicial,fechaFin:this.reporteForm.value.fechaFinal};
  this.reporteService.postReportePorTransportista(datos).then(data=>{
    if(data.ok){

      this.datosReporte= data.data;
      console.log(data);
    }else{
      Swal.fire({
        title: 'Error',
        text: data.mensaje,
        icon: 'error',
        confirmButtonText: 'Entendido'
      });
    }  })
  .catch(error=>{
    console.log(error);
  })
  }



}
