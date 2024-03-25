import { Component, Inject, OnInit, isDevMode } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BloodType } from './blood-type.model';
import { BloodTypeService } from './blood-type.service';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { ThemeService } from './components/nav/theme/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [FormsModule, FooterComponent, NavComponent],
})
export class AppComponent implements OnInit {
  title = 'Veja os tipos sanguíneos e suas compatibilidades';

  bloodTypes: BloodType[] = [];

  selectedType: string = '#';
  receivesFrom: string[] = [];
  donateTo: string[] = [];

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private themeService: ThemeService,
    private bloodTypeService: BloodTypeService
  ) {
    const theme = this.themeService.getPreferredTheme();
    this.themeService.setTheme(theme);
    this.setBasePath();
  }

  ngOnInit() {
    this.bloodTypes = this.bloodTypeService.bloodTypes;
  }

  selectType(bloodType: EventTarget | null) {
    if (!bloodType) return;

    this.selectedType = (bloodType as HTMLSelectElement).value;
    this.receivesFrom = this.bloodTypeService.receivesFrom(this.selectedType);
    this.donateTo = this.bloodTypeService.donateTo(this.selectedType);
  }

  private setBasePath() {
    const baseElement = this.document.querySelector('base');
    if (isDevMode()) {
      baseElement?.setAttribute('href', '');
    } else {
      baseElement?.setAttribute('href', '/blood-type-donator-checker/');
    }
  }
}
