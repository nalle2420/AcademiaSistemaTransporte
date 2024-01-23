import { Component } from '@angular/core';
import { Viajes } from '../../models/viaje';

@Component({
  selector: 'app-viajes-registro',
  templateUrl: './viajes-registro.component.html',
  styles: ``
})
export class ViajesRegistroComponent {
  viajes: Array<Viajes>=[];
}
