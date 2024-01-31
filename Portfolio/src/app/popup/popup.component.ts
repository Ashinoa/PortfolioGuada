import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {

  @Input() projectName: string = '';
  @Input() projectDescription: string = '';
  @Input() projectMediaUrl: string = '';
  @Input() visible: boolean = false;  // Propiedad que indica si el popup está visible

  isOpen : boolean = false;
  isVisible: boolean = false;

  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();  // Evento para notificar cambios en la visibilidad

  closePopup() {
    this.visible = false;
    this.visibleChange.emit(this.visible);  // Emite el evento para notificar el cambio en la visibilidad
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }

  
}
