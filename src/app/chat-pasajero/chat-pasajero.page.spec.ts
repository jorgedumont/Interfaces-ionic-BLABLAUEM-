import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatPasajeroPage } from './chat-pasajero.page';

describe('ChatPasajeroPage', () => {
  let component: ChatPasajeroPage;
  let fixture: ComponentFixture<ChatPasajeroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatPasajeroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatPasajeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
