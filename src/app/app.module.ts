import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import { RecordsComponent } from './records/records.component';
import { GameButtonComponent } from './game-button/game-button.component';
import { RecordsTableComponent } from './records-table/records-table.component';

@NgModule({
  declarations: [AppComponent, AuthorizationComponent, MainPageComponent, RecordsComponent, GameButtonComponent, RecordsTableComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
