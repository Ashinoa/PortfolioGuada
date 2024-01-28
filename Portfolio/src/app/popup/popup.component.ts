import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {

  @Input() projectDescription: string = '';
  @Input() projectMediaUrl: string = '';

  isOpen = false;

  openPopup() {
    this.isOpen = true;
  }

  closePopup() {
    this.isOpen = false;
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }


}
