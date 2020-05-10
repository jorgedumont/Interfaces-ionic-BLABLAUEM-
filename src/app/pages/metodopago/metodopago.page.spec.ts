import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MetodopagoPage } from './metodopago.page';

describe('MetodopagoPage', () => {
  let component: MetodopagoPage;
  let fixture: ComponentFixture<MetodopagoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetodopagoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MetodopagoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
