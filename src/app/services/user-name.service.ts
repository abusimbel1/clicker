import { Injectable } from '@angular/core';

export interface IRecord {
  mode: string;
  clicks: number;
}

@Injectable({
  providedIn: 'root',
})
export class UserNameService {
  userName: string = 'Player';
  gameDuration: string = '5';
  isGameRunning: boolean = false;
  counter: number = 0;
  arrWithRecords: IRecord[] = [{ mode: '5', clicks: 0 }];
  disablePlayBut: boolean = false;
  timer: number = parseInt(this.gameDuration);
  buttonText: string = 'Click to start';
  recordToDisplay: number = 0
  resultTitle: string
  isGoodResult: boolean
  // records: IRecord[] = JSON.parse(localStorage.getItem('records')).filter(
  //   (item) => item.mode == this.gameDuration
  // );

  constructor() {}

  setUserName(): void {
    console.log(this.userName);

    this.userName = 'name';
  }
}
