import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { HttpClientModule } from '@angular/common/http';
import { ObservationEndpointItemComponent } from './observation-endpoint-item/observation-endpoint-item.component';

const config: SocketIoConfig = {
  url: "http://localhost:3100",
}

@NgModule({
  declarations: [
    AppComponent,
    ObservationEndpointItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
