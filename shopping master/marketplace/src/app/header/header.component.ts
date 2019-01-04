import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  @Output() navMenuSelected = new EventEmitter<String>();

  onSelect(navMenu : string){
    console.log(navMenu);
    this.navMenuSelected.emit(navMenu);
  }

   user = JSON.parse(localStorage.getItem('currentUser'))
}
