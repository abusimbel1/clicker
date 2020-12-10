import { Component, DoCheck, OnInit } from '@angular/core';
import { IRecord, UserNameService } from '../services/user-name.service';

@Component({
  selector: 'app-records-table',
  templateUrl: './records-table.component.html',
  styleUrls: ['./records-table.component.scss'],
})
export class RecordsTableComponent implements OnInit {
  constructor(public userNameService: UserNameService) {}

  ngOnInit(): void {
    const records = JSON.parse(localStorage.getItem('records'));
    records.forEach((element) => {
      if (element.mode == this.userNameService.timer) {
        this.userNameService.recordToDisplay = element.clicks;
      }
    });
  }
  // ngDoCheck(): void {
  //   const records = JSON.parse(localStorage.getItem('records'));
  //   console.log(records);
  //   console.log(this.userNameService.gameDuration);

  //   this.records = records.forEach((item) => {
  //     if (item.mode == this.userNameService.gameDuration) {
  //       this.records = item.clicks;
  //     }
  //   });
  // }
}
