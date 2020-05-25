import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeconductorPage } from './homeconductor.page';

describe('HomeconductorPage', () => {
  let component: HomeconductorPage;
  let fixture: ComponentFixture<HomeconductorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeconductorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeconductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
