import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CpuObservationEndpoint } from 'cpu-monitoring-models';

@Component({
  selector: 'app-edit-observation-endpoint',
  templateUrl: './edit-observation-endpoint.component.html',
  styleUrls: ['./edit-observation-endpoint.component.css']
})
export class EditObservationEndpointComponent implements OnInit {

  newEndpointForm;

  @Input() endpoint: CpuObservationEndpoint;
  @Output() submit = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    if (!this.endpoint) {
      this.newEndpointForm = this.formBuilder.group({
        name: '',
        endpoint: '',
        threshold: '',
        frequency: '',
      })
    } else {
      this.newEndpointForm = this.formBuilder.group({
        name: this.endpoint.name,
        endpoint: this.endpoint.cpuUtilQueryEndpoint,
        threshold: this.endpoint.criticalCpuUtilThreshold,
        frequency: this.endpoint.cpuObservationFrequencyMilis,
      })
    }
  }

  onSubmit(endpointData) {
    this.submit.emit(endpointData);
    this.newEndpointForm.reset();
  }

}
