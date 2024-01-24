import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styles: ``
})
export class ErrorComponent {

 @Input() form!: FormGroup;
 @Input('control') controlName!: string;
 @Input('validator') validator!: string;
 @Input() text!: string;

 private getControl=(controlName:string):any=> this.form.get(controlName);



  getError(nameControl:string, validator:string):any{
    return this.getControl(nameControl)?.errors?.[validator]
   }

   hasError= (nameControl:string): boolean => this.getControl(nameControl)?.errors !=null;
}
