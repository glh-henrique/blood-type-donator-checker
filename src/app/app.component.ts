import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { BloodType } from './blood-type.model';
import { BloodTypeService } from './blood-type.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'blood-type-donator-checker';

  bloodTypes: BloodType[] = [];

  selectedType: string = '';
  receivesFrom: string[] = [];
  donateTo: string[] = [];

  constructor(private bloodTypeService: BloodTypeService) {}

  ngOnInit() {
    this.bloodTypes = this.bloodTypeService.bloodTypes;
  }

  selectType(bloodType: EventTarget | null) {
    if (!bloodType) return;

    this.selectedType = (bloodType as HTMLSelectElement).value;
    this.receivesFrom = this.bloodTypeService.receivesFrom(this.selectedType);
    this.donateTo = this.bloodTypeService.donateTo(this.selectedType);
  }
}
