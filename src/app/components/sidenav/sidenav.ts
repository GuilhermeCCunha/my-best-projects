import { Component } from '@angular/core';
import { Menu } from "../menu/menu";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-sidenav',
  imports: [Menu, MatSidenavModule, MatListModule,
    RouterLink, RouterLinkActive, TranslateModule],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.scss'
})
export class Sidenav {

}
