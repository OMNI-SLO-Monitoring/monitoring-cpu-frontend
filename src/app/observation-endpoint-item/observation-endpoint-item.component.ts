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

  // This is a to open the right modal, because we have multiple modals wich needs different ids
  open() {
    $(`#modal${this.observationEndpoint.id}`).modal('show');
  }
}
