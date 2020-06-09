import { Component, OnInit, Input } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { CpuObservationEndpoint, CpuObservationStatus } from 'cpu-monitoring-models';

@Component({
  selector: 'app-observation-endpoint-item',
  templateUrl: './observation-endpoint-item.component.html',
  styleUrls: ['./observation-endpoint-item.component.css']
})
export class ObservationEndpointItemComponent implements OnInit {

  @Input() observationEndpoint: CpuObservationEndpoint
  status: Observable<CpuObservationStatus>;

  constructor(private socket: Socket) { }

  ngOnInit(): void {
    this.status = this.socket.fromEvent(this.observationEndpoint.id);
  }

}
