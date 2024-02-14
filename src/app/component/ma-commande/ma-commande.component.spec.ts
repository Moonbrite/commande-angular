import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaCommandeComponent } from './ma-commande.component';

describe('MaCommandeComponent', () => {
  let component: MaCommandeComponent;
  let fixture: ComponentFixture<MaCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaCommandeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
