import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private localStorage: Storage | undefined;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.localStorage = document.defaultView?.localStorage;
  }

  private getStoredTheme(): string | null | undefined {
    return this.localStorage?.getItem('theme');
  }

  private setStoredTheme(theme: string): void {
    if (this.localStorage) {
      this.localStorage.setItem('theme', theme);
    }
  }

  getPreferredTheme(): string {
    if (typeof window !== 'undefined') {
      const storedTheme = this.getStoredTheme();
      if (storedTheme === 'light' || storedTheme === 'dark') {
        return storedTheme;
      }

      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    } else {
      return 'light';
    }
  }

  setTheme(theme: string): void {
    if (typeof window !== 'undefined') {
      this.setStoredTheme(theme);
      this.document.documentElement.setAttribute('data-bs-theme', theme);
    } else {
      this.setStoredTheme(theme);
    }
  }
}
