import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { of } from 'rxjs';
import { BloodTypeService } from './blood-type.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let bloodTypeService: BloodTypeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        { provide: BloodTypeService, useValue: { getBloodTypes: () => of([]) } }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    bloodTypeService = TestBed.inject(BloodTypeService);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the 'blood-type-donator-checker' title`, () => {
    expect(component.title).toEqual('blood-type-donator-checker');
  });

  it('should initialize with empty blood types', () => {
    expect(component.bloodTypes.length).toBe(0);
  });

  it('should call selectType and update selectedType', () => {
    const mockEvent = {  value: 'A+' } as any;
    component.selectType(mockEvent);
    expect(component.selectedType).toBe('A+');
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('blood-type-donator-checker');
  });
});
