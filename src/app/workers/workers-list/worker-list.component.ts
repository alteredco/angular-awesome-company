import { Component, OnInit } from '@angular/core';
import { Worker } from '../worker';
import {WorkerService} from '../worker.service';

@Component({
  selector: 'app-workers-list',
  templateUrl: './workers-list.component.html',
  styleUrls: ['./workers-list.component.scss']
})
export class WorkersListComponent implements OnInit {
  title="Awesome Employees!"

  subtitle="Everything is cool when you're part of a team!"

  constructor(private workerService: WorkerService) { }

  ngOnInit():void{

  }

}
