import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListareservasPage } from './listareservas.page';

describe('ListareservasPage', () => {
  let component: ListareservasPage;
  let fixture: ComponentFixture<ListareservasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListareservasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListareservasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
