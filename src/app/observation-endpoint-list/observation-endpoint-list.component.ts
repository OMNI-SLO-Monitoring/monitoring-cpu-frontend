import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CpuObservationEndpoint } from 'cpu-monitoring-models';
import { EndpoitsService } from '../endpoits.service';

@Component({
  selector: 'app-observation-endpoint-list',
  templateUrl: './observation-endpoint-list.component.html',
  styleUrls: ['./observation-endpoint-list.component.css']
})
export class ObservationEndpointListComponent {

  constructor(public endpointService: EndpoitsService) {}

  addObservationEndpoint(endpoitData) {
    const endpoint = new CpuObservationEndpoint(
      endpoitData.name,
      endpoitData.endpoint,
      endpoitData.threshold,
      endpoitData.frequency
    );
    this.endpointService.addEndpoint(endpoint);
  }
}
