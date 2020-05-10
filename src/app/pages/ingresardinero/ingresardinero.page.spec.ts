import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IngresardineroPage } from './ingresardinero.page';

describe('IngresardineroPage', () => {
  let component: IngresardineroPage;
  let fixture: ComponentFixture<IngresardineroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresardineroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IngresardineroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
