import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationGaucheComponent } from './information-gauche.component';

describe('InformationGaucheComponent', () => {
  let component: InformationGaucheComponent;
  let fixture: ComponentFixture<InformationGaucheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformationGaucheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformationGaucheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
