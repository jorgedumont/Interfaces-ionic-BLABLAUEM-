import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarteraPage } from './cartera.page';

describe('CarteraPage', () => {
  let component: CarteraPage;
  let fixture: ComponentFixture<CarteraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarteraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarteraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
