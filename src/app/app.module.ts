import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideEnvironmentNgxMask, IConfig, NgxMaskDirective, provideNgxMask,  NgxMaskPipe } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  providers: [provideEnvironmentNgxMask(), provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
