import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NuevocochePage } from './nuevocoche.page';

describe('NuevocochePage', () => {
  let component: NuevocochePage;
  let fixture: ComponentFixture<NuevocochePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevocochePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NuevocochePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
