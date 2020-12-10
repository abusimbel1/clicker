import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserNameService } from '../services/user-name.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss'],
})
export class AuthorizationComponent implements OnInit {
  userName: string = '';

  constructor(
    private router: Router,
    public userNameService: UserNameService
  ) {}
  ngOnInit(): void {}

  submitUserName(): void {
    if (this.userNameService.userName.trim()) {
      this.router.navigate(['/play']);
    }
  }
}
