import { Component, OnInit, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-fullscreen-video',
  templateUrl: './fullscreen-video.component.html',
  styleUrls: ['./fullscreen-video.component.scss']
})
export class FullscreenVideoComponent implements OnInit {
  @ViewChild('myVideo') video:ElementRef; 

  constructor() { }

  ngOnInit(){
  }

  goVideo() {
    if (this.video.nativeElement.paused) {
      this.video.nativeElement.play();
    } else {
      this.video.nativeElement.pause();
    }
  }

}
