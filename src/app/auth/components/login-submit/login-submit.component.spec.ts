import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSubmitComponent } from './login-submit.component';

describe('LoginSubmitComponent', () => {
  let component: LoginSubmitComponent;
  let fixture: ComponentFixture<LoginSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
