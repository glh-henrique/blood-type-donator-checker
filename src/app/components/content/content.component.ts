import { Component, OnInit } from '@angular/core';
import { BloodType } from '../../../model/blood-type.model';
import { BloodTypeService } from '../../../services/blood-type.service';
import { FormsModule } from '@angular/forms';
import { MapsComponent } from '../maps/maps.component';

@Component({
  selector: 'app-content',
  standalone: true,
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
  imports: [FormsModule, MapsComponent],
})
export class ContentComponent implements OnInit {
  title = 'Veja os tipos sanguíneos e suas compatibilidades';

  bloodTypes: BloodType[] = [];

  selectedType: string = '#';
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
