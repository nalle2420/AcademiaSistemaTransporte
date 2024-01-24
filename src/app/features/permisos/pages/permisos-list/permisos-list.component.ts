import { Component } from '@angular/core';
import { Permiso } from '../../models/permiso';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-permisos-list',
  templateUrl: './permisos-list.component.html',
  styles: ``
})
export class PermisosListComponent {
  permisos: Array<Permiso>=[];
  edit:boolean=false;

 permisoFilter:Array<Permiso>= []

 txtFilter:FormControl= new FormControl(null,[Validators.required]);

  constructor() {

  }

}
