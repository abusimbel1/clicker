import { Route } from '@angular/compiler/src/core';
import {
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { GameButtonComponent } from '../game-button/game-button.component';
import { UserNameService } from '../services/user-name.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  @Input() input1: string;

  constructor(
    public userNameService: UserNameService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  resetGame(): void {
    this.userNameService.disablePlayBut = false;
    this.userNameService.isGameRunning = false;
    this.userNameService.counter = 0;
    this.userNameService.buttonText = 'Click to start';
    this.userNameService.resultTitle = '';
  }
  changeTimer(event) {
    this.userNameService.timer = parseInt(event.target.value);
    const myData = JSON.parse(localStorage.getItem('records'));
    myData.forEach((element) => {
      if (element.mode == this.userNameService.timer) {
        this.userNameService.recordToDisplay = element.clicks;
      }
    });
  }

  changeNameHandler() {
    this.router.navigate(['/']);
  }
  // startGame(): void {
  //   this.userNameService.gameDuration = this.level
  // }
}
