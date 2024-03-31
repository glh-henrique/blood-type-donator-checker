import { Component, Inject, isDevMode } from '@angular/core';

import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { ContentComponent } from './components/content/content.component';
import { DOCUMENT } from '@angular/common';
import { ThemeService } from './components/nav/theme/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [FooterComponent, NavComponent, ContentComponent],
})

export class AppComponent {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private themeService: ThemeService
  ) {
    const theme = this.themeService.getPreferredTheme();
    const isDark = theme === 'dark' ? true : false;
    this.themeService.setTheme(isDark);
    this.setBasePath();
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
