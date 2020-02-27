import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoDateComponent } from './video-date.component';

describe('VideoDateComponent', () => {
  let component: VideoDateComponent;
  let fixture: ComponentFixture<VideoDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
