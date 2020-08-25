import { Component, Input, OnInit, Output } from '@angular/core';
import { Hotel } from '../models/hotel';
import { HotelService } from '../models/hotelService';

@Component({
  selector: 'app-hotel-main',
  templateUrl: './hotel-main.component.html',
  styleUrls: ['./hotel-main.component.css']
})
export class HotelMainComponent implements OnInit {

  // @Input()
  //@Output()
  public selectedHotel: Hotel = HotelService.GetHotels()[0];

  public constructor() { }

  public ngOnInit(): void {
  }

  public selectItem(selectedHotel: Hotel): void {
    this.selectedHotel = selectedHotel;
    console.log('hello ', selectedHotel.title);
  }

}
