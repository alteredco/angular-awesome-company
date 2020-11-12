import { Component, Input, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { WorkerService } from '../worker.service';
import { Worker } from '../worker';

@Component({
  selector: 'app-worker-detail',
  templateUrl: './worker-detail.component.html',
  styleUrls: ['./worker-detail.component.scss']
})
export class WorkerDetailComponent implements OnInit {

  @Input()
  result$: Observable<Worker>;

  workerDetails: Worker[];
  results: string[] = ['Results']

  name= "Marine Gauthier"
  imgSrc= "https://randomuser.me/api/portraits/lego/9.jpg"



  constructor(private workerService: WorkerService) { 
    this.result$ = workerService.getWorkerData();
  }

  ngOnInit(){
    this.workerService.getWorkerData();
    console.log(Worker[0]);
  }
}
