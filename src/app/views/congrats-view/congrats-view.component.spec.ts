import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongratsViewComponent } from './congrats-view.component';

describe('CongratsViewComponent', () => {
  let component: CongratsViewComponent;
  let fixture: ComponentFixture<CongratsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongratsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CongratsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
