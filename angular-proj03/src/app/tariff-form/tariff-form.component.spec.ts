import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffFormComponent } from './tariff-form.component';

describe('TariffFormComponent', () => {
  let component: TariffFormComponent;
  let fixture: ComponentFixture<TariffFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TariffFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TariffFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
