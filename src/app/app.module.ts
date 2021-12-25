import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//http
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ToastrModule } from 'ngx-toastr';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [AppComponent, CardComponent],
  imports: [
    BrowserModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,

    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
