import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullscreenVideoComponent } from './fullscreen-video.component';

describe('FullscreenVideoComponent', () => {
  let component: FullscreenVideoComponent;
  let fixture: ComponentFixture<FullscreenVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullscreenVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullscreenVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
