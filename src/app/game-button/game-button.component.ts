import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserNameService } from '../services/user-name.service';

@Component({
  selector: 'app-game-button',
  templateUrl: './game-button.component.html',
  styleUrls: ['./game-button.component.scss'],
})
export class GameButtonComponent implements OnInit {
  // @ViewChild('startGameButton') startButtRef: ElementRef;

  constructor(public userNameService: UserNameService) {}

  ngOnInit(): void {}

  increaseCounter(event) {
    if (this.userNameService.isGameRunning) {
      this.userNameService.counter += 1;
      var randomColor = Math.floor(Math.random() * 16777215).toString(16);

      event.target.style.background = '#' + randomColor;
    }
    if (!this.userNameService.isGameRunning) {
      setTimeout(() => {
        if (this.userNameService.isGameRunning) {
          this.userNameService.disablePlayBut = true;
          let obj = {
            mode: this.userNameService.gameDuration,
            clicks: this.userNameService.counter,
          };
          this.userNameService.arrWithRecords.push(obj);
          const myData = JSON.parse(localStorage.getItem('records'));
          console.log(this.userNameService.recordToDisplay);

          const updatedData = myData.map((item) => {
            if (item.mode == this.userNameService.gameDuration) {
              if (item.clicks < this.userNameService.counter) {
                item.clicks = this.userNameService.counter;
                this.userNameService.recordToDisplay = this.userNameService.counter;
                this.userNameService.resultTitle = `Congratulation ${this.userNameService.userName}!!!\nYou set new record for ${this.userNameService.gameDuration} sec = ${item.clicks} clicks`;
                this.userNameService.isGoodResult = true;
              } else {
                this.userNameService.resultTitle = `${this.userNameService.userName}, your result is bad, you have to more practice.`;
                this.userNameService.isGoodResult = false;
              }
              this.userNameService.recordToDisplay = item.clicks;
            }

            return item;
          });
          console.log(this.userNameService.recordToDisplay);

          localStorage.setItem('records', JSON.stringify(updatedData));
        }
      }, parseInt(this.userNameService.gameDuration + '000'));
      this.userNameService.isGameRunning = true;

      this.runTimer();
    }
    if (this.userNameService.isGameRunning) {
      this.userNameService.buttonText = 'Click to count';
    }
  }

  runTimer(): void {
    if (this.userNameService.timer > 0 && this.userNameService.isGameRunning) {
      setTimeout(() => {
        this.userNameService.timer -= 1;
        this.runTimer();
      }, 1000);
    }
    if (!this.userNameService.isGameRunning) {
      this.userNameService.timer = parseInt(this.userNameService.gameDuration);
    }
  }
}
