import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEmployerComponent } from './form-employer.component';

describe('FormEmployerComponent', () => {
  let component: FormEmployerComponent;
  let fixture: ComponentFixture<FormEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEmployerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
