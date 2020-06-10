import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { HttpClientModule } from '@angular/common/http';
import { ObservationEndpointItemComponent } from './observation-endpoint-item/observation-endpoint-item.component';
import { ObservationEndpointListComponent } from './observation-endpoint-list/observation-endpoint-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditObservationEndpointComponent } from './edit-observation-endpoint/edit-observation-endpoint.component';

const config: SocketIoConfig = {
  url: "http://localhost:3100",
}

@NgModule({
  declarations: [
    AppComponent,
    ObservationEndpointItemComponent,
    ObservationEndpointListComponent,
    EditObservationEndpointComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
