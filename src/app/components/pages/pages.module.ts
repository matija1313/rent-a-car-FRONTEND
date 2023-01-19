import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehicleComponent } from './vehicle/vehicle.component';

@NgModule({
  declarations: [HomeComponent, ContactComponent, VehiclesComponent, VehicleComponent],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
