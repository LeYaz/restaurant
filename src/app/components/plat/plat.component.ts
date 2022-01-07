import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Plat } from 'src/app/models/Plat';

@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrls: ['./plat.component.css']
})
export class PlatComponent implements OnInit {

  @Input() plat: Plat;

  @Input() isHome:boolean;

  @Output() platId =new EventEmitter<number>()

  @Output() platOrdered = new EventEmitter<Plat>()

  quantity:number = 1;

  constructor() { }


  ngOnInit(): void {
  }

  order(id:number){
    this.plat.stock -= this.quantity
    this.platOrdered.emit(this.plat);
  }

  update(id:number){
    this.platId.emit(id);
  }

  decreaseQuantity(){
    this.quantity --
  }

  increaseQuantity(){
    this.quantity ++;
  }
}
