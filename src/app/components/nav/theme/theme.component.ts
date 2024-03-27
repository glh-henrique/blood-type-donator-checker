import { Component } from '@angular/core';
import { ThemeService } from './theme.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.scss'
})
export class ThemeComponent {
  isDark = false;

  constructor(private themeService: ThemeService) {
    this.isDark = this.themeService.getPreferredTheme() === 'dark';
   }

  isDarkTheme(): boolean {
    this.themeService.setTheme(this.isDark);
    return !this.isDark
  }
}
