import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StucDirectiveDemoComponent } from './stuc-directive-demo.component';

describe('StucDirectiveDemoComponent', () => {
  let component: StucDirectiveDemoComponent;
  let fixture: ComponentFixture<StucDirectiveDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StucDirectiveDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StucDirectiveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
