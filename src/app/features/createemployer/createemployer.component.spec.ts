import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateemployerComponent } from './createemployer.component';

describe('CreateemployerComponent', () => {
  let component: CreateemployerComponent;
  let fixture: ComponentFixture<CreateemployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateemployerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateemployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
