import { Component, OnInit, Input } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { CpuObservationEndpoint, CpuObservationStatus } from 'cpu-monitoring-models';
import { EndpoitsService } from '../endpoits.service';

declare var $: any;

@Component({
  selector: 'app-observation-endpoint-item',
  templateUrl: './observation-endpoint-item.component.html',
  styleUrls: ['./observation-endpoint-item.component.css']
})
export class ObservationEndpointItemComponent implements OnInit {

  @Input() observationEndpoint: CpuObservationEndpoint
  status: Observable<CpuObservationStatus>;

  constructor(private socket: Socket, private endpointService: EndpoitsService) { }

  ngOnInit(): void {
    // Establish Socket connection with backend
    this.status = this.socket.fromEvent(this.observationEndpoint.id);
  }

  updateEndpoint(endpoitData) {
    this.observationEndpoint.name = endpoitData.name,
    this.observationEndpoint.cpuUtilQueryEndpoint = endpoitData.endpoint,
    this.observationEndpoint.criticalCpuUtilThreshold = endpoitData.threshold,
    this.observationEndpoint.cpuObservationFrequencyMilis = endpoitData.frequency

    this.endpointService.editEndpoint(this.observationEndpoint);
  }

  deleteEndpoint() {
    this.endpointService.deleteEndpoint(this.observationEndpoint);
  }

  /*
    Opens the editModal with jQuery
    Modals uses the endpointId because otherwise it would open the first modal with the given id in the DOM, which is not nessecary the one corresponding to this oberservation-endpoint-item
  */
  open() {
    $(`#modal${this.observationEndpoint.id}`).modal('show');
  }
}
