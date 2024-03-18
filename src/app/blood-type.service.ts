import { Injectable } from '@angular/core';
import { BloodType } from './blood-type.model';
import { bloodTypes } from './data-blood-types';

@Injectable({
  providedIn: 'root'
})
export class BloodTypeService {

  constructor() {}

  get bloodTypes(): BloodType[] {
    return bloodTypes;
  }

  receivesFrom(bloodType: string): string[] {
    return bloodTypes.find(blood => blood.type === bloodType)?.receives_from || [];
  }

  donateTo(bloodType: string): string[] {
    return bloodTypes.find(blood => blood.type === bloodType)?.donate_to || [];
  }
}
