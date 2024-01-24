import { Component, EventEmitter, Input, Output, input } from '@angular/core';

@Component({
  selector: 'app-option-control',
  templateUrl: './option-control.component.html',
  styles: ``
})
export class OptionControlComponent {
 @Input() disabledSave=false;
 @Input() disabledCancel=false;

 @Input() disabledSearch=false;

 @Output() onClick: EventEmitter<{name:string}> = new EventEmitter<{name:string}>();

 onSavedLocal():void{
  console.log("saved");
  this.onClick.emit({name:'save'});


 }

 onCancel():void{
  console.log('cancel');
  this.onClick.emit({name:'cancel'});


 }
}
