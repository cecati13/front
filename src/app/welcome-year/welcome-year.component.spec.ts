import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeYearComponent } from './welcome-year.component';

describe('WelcomeYearComponent', () => {
  let component: WelcomeYearComponent;
  let fixture: ComponentFixture<WelcomeYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeYearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
