import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyIconsComponent } from './tally-icons.component';

describe('TallyIconsComponent', () => {
  let component: TallyIconsComponent;
  let fixture: ComponentFixture<TallyIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallyIconsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TallyIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
