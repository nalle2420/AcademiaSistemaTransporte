import { Component } from '@angular/core';
import { Permiso } from '../../models/permiso';

@Component({
  selector: 'app-permisos-list',
  templateUrl: './permisos-list.component.html',
  styles: ``
})
export class PermisosListComponent {
  permisos: Array<Permiso>=[];


  constructor() {

  }

}
