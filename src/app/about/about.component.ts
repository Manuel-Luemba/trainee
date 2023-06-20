import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(item:string) {
    this.newItemEvent.emit(item);
  }
}
