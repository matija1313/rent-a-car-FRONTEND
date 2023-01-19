import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Vehicle from './../models/Vehicle';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  constructor(private httpClient: HttpClient) {}

  getAllVehicles = () => {
    return this.httpClient.get<Vehicle[]>('http://localhost:3000/vehicle');
  };

  getVehicleByRegNo = (regNO: string) => {
    return this.httpClient.get<Vehicle>(
      'http://localhost:3000/vehicle/' + regNO
    );
  };
}
