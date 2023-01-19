import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/services/vehicle.service';
import Vehicle from './../../../models/Vehicle';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss'],
})
export class VehicleComponent implements OnInit {
  vehicle: Vehicle;
  constructor(private vehicleService: VehicleService) {}
  ngOnInit(): void {
    this.vehicleService.getVehicleByRegNo('BRAC121').subscribe((data) => {
      this.vehicle = data;
    });
  }
}
