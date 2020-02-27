import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerTitleComponent } from './inner-title.component';

describe('InnerTitleComponent', () => {
  let component: InnerTitleComponent;
  let fixture: ComponentFixture<InnerTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
