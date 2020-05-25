import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatPasajero1Page } from './chat-pasajero1.page';

describe('ChatPasajero1Page', () => {
  let component: ChatPasajero1Page;
  let fixture: ComponentFixture<ChatPasajero1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatPasajero1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatPasajero1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
