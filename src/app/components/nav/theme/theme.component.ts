import { Component } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [],
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.scss'
})
export class ThemeComponent {
  theme: string = 'auto';

  constructor(private themeService: ThemeService) {
    this.theme = themeService.getPreferredTheme();
  }

  onThemeChange(themeSelected: string) {
    this.theme = themeSelected;
    this.themeService.setTheme(themeSelected);
  }
}
