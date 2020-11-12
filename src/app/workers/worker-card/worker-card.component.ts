import { Component, OnInit, Input } from '@angular/core';
import{WorkerDetailComponent} from '../worker-detail/worker-detail.component'

@Component({
  selector: 'app-worker-card',
  templateUrl: './worker-card.component.html',
  styleUrls: ['./worker-card.component.scss']
})
export class WorkerCardComponent implements OnInit {

  // @Input('name') workerName: string;
  // @Input('imgSrc') workerImg: string;
  id="9"
  name= "Marine Gauthier"
  imgSrc= "https://randomuser.me/api/portraits/lego/9.jpg"

  public badgeCount: number;

  constructor() { 
    this.badgeCount = 0;
  }

  addBadgeCount(){
    console.log(this.badgeCount);
    this.badgeCount+=1;
  }

  ngOnInit(){
  }

}
