import { Component } from '@angular/core';
import { Menu } from "../menu/menu";
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-sidenav',
  imports: [Menu, MatSidenavModule, MatListModule],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.scss'
})
export class Sidenav {

}
