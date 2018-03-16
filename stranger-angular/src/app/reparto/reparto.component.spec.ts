import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepartoComponent } from './reparto.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

describe('RepartoComponent', () => {
  let component: RepartoComponent;
  let fixture: ComponentFixture<RepartoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule
      ],
      declarations: [ RepartoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepartoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
