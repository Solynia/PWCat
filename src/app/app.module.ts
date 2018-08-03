import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment.prod';
import { AppComponent } from './app.component';
import { ImgCardComponent } from './img-card/img-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgCardComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MatButtonModule,
    MatCardModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
