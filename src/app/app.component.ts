import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CpuObservationEndpoint } from 'cpu-monitoring-models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  api = "http://localhost:3100";

  observationEndpointsObs: Observable<CpuObservationEndpoint[]>;

  constructor(private http: HttpClient) {
    this.getObservationEndpoints();
  }

  getObservationEndpoints() {
    this.observationEndpointsObs = this.http.get<CpuObservationEndpoint[]>(this.api);
  }

  addObservationEndpoint() {
    const endpoint = new CpuObservationEndpoint(
      "Database Service 2",
      'http://localhost:3000/cpu',
      70,
      10000
    );

    this.observationEndpointsObs = this.http.post<CpuObservationEndpoint[]>(this.api, endpoint);
  }

}
