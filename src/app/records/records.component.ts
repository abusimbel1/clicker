import { Component, OnInit } from '@angular/core';
import { IRecord } from '../services/user-name.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss'],
})
export class RecordsComponent implements OnInit {
  records: IRecord[];
  constructor() {}

  ngOnInit(): void {
    const records = JSON.parse(localStorage.getItem('records'));
    console.log(records);

    // this.records = records.fi
  }
}
