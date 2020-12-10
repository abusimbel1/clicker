import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'clicker-hw';

  ngOnInit(): void {
    const records = JSON.parse(localStorage.getItem('records'));
    if (!records) {
      let recordsData = [
        { mode: '5', clicks: 0 },
        { mode: '10', clicks: 0 },
        { mode: '15', clicks: 0 },
      ];
      localStorage.setItem('records', JSON.stringify(recordsData));
    }
  }
}
