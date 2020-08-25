import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Hotel } from '../models/hotel';
import { HotelService } from '../models/hotelService';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  public hotels: Hotel[] = HotelService.GetHotels();

  @Output()
  public selectedHotelEvent: EventEmitter<Hotel> = new EventEmitter<Hotel>();

  public constructor() { }

  public ngOnInit(): void {
  }

  public onSelected(selectedHotel: Hotel): void {
    this.selectedHotelEvent.emit(selectedHotel);
  }
}
