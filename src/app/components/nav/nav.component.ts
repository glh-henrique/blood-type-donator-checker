import { Component } from '@angular/core';
import { ThemeComponent } from "./theme/theme.component";

@Component({
    selector: 'app-nav',
    standalone: true,
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.scss',
    imports: [ThemeComponent]
})
export class NavComponent {
  title_header = 'Blood Type checker';
}
