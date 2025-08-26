import { Component, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from '@angular/material/menu';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  imports: [MatIconModule, MatToolbarModule, MatButtonModule, MatMenuModule],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu {
  navToggle = output<boolean>();
  handleClick() {
    this.navToggle.emit(true);
  }
  languages = [
    { "shortForm": "en", "fullForm": "English" },
    { "shortForm": "pt-BR", "fullForm": "Português" }];
  defaultLanguage = "en";
  currentLanguage = this.defaultLanguage;
  constructor(private translate: TranslateService) {
    this.translate.addLangs(this.languages.map(l => l.shortForm));
    this.translate.setFallbackLang(this.defaultLanguage);
    this.translate.use(this.defaultLanguage);
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    this.currentLanguage = language;
  }

}
