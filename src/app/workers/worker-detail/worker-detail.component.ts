import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkerService } from '../worker.service';
import { Worker } from '../worker';

@Component({
  selector: 'app-worker-detail',
  templateUrl: './worker-detail.component.html',
  styleUrls: ['./worker-detail.component.scss'],
})
export class WorkerDetailComponent implements OnInit {
  @Input()
  result$: Observable<Worker>;

  @Input() worker: Worker;

  constructor(private workerService: WorkerService) {
    this.result$ = this.workerService.getWorkerData();
  }

  ngOnInit() {
    this.workerService.getWorkerData();
    // console.log(`finding worker... ${this.workerDetails.results[0].name[0].first}`);
    //   console.log(this.newWorker);
  }

  //   showWorker(){
  //     return this.workerService.getWorkerData().subscribe((data: Worker)=> this.workerDetails = {...data});
  //   }
}
