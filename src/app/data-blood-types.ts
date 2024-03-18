import { BloodType } from "./blood-type.model";


export const bloodTypes: BloodType[] = [
  {
    type: 'A+',
    receives_from: ['A+', 'A-', 'O+', 'O-'],
    donate_to: ['A+', 'AB+'],
  },
  {
    type: 'A-',
    receives_from: ['A-', 'O-'],
    donate_to: ['A-', 'A+', 'AB-', 'AB+'],
  },
  {
    type: 'B+',
    receives_from: ['B+', 'B-', 'O+', 'O-'],
    donate_to: ['B+', 'AB+'],
  },
  {
    type: 'B-',
    receives_from: ['B-', 'O-'],
    donate_to: ['B-', 'B+', 'AB-', 'AB+'],
  },
  {
    type: 'O+',
    receives_from: ['O+', 'O-'],
    donate_to: ['A+', 'B+', 'AB+', 'O+'],
  },
  {
    type: 'O-',
    receives_from: ['O-'],
    donate_to: ['A-', 'B-', 'AB-', 'O-', 'A+', 'B+', 'AB+'],
  },
  {
    type: 'AB+',
    receives_from: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'],
    donate_to: ['AB+'],
  },
  {
    type: 'AB-',
    receives_from: ['A-', 'B-', 'AB-', 'AB+'],
    donate_to: ['AB-', 'AB+'],
  },
];
