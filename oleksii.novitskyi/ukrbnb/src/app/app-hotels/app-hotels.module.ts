import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelInfoComponent } from './hotel-info/hotel-info.component';
import { HotelMainComponent } from './hotel-main/hotel-main.component';

@NgModule({
  declarations: [HotelListComponent, HotelInfoComponent, HotelMainComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HotelMainComponent,
  ]
})
export class AppHotelsModule { }
