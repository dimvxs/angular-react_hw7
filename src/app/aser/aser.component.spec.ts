import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AserComponent } from './aser.component';

describe('AserComponent', () => {
  let component: AserComponent;
  let fixture: ComponentFixture<AserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
