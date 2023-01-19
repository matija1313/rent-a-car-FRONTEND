import { Component, OnInit } from '@angular/core';
import { VehicleService } from './../../../services/vehicle.service';
import Vehicle from './../../../models/Vehicle';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss'],
})
export class VehiclesComponent implements OnInit {
  ngOnInit(): void {
    this.vehicleService.getAllVehicles().subscribe((data) => {
      this.vehicles = data;
    });
  }

  vehicles: Vehicle[] = [];

  constructor(private vehicleService: VehicleService) {}
}
