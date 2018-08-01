import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ImgCardComponent } from './img-card/img-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgCardComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
