import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OpcionConductorPage } from './opcion-conductor.page';

describe('OpcionConductorPage', () => {
  let component: OpcionConductorPage;
  let fixture: ComponentFixture<OpcionConductorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcionConductorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OpcionConductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
