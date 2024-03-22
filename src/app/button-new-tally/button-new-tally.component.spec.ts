import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonNewTallyComponent } from './button-new-tally.component';

describe('ButtonNewTallyComponent', () => {
  let component: ButtonNewTallyComponent;
  let fixture: ComponentFixture<ButtonNewTallyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonNewTallyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonNewTallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
