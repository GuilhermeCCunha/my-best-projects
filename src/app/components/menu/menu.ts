import { Component, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";

@Component({
  selector: 'app-menu',
  imports: [MatIconModule, MatToolbarModule, MatButtonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu {
  navToggle = output<boolean>();
  handleClick() {
    this.navToggle.emit(true);
  }

}
