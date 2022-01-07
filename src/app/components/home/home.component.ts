import { Component, OnInit } from '@angular/core';
import { Plat } from 'src/app/models/Plat';
import { PlatService } from '../../services/plat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  plats: Plat[] = []

  constructor(private platService: PlatService) { }

  ngOnInit(): void {
    this.platService.getPlats().subscribe(plats => this.plats = plats);
  }

  orderPlat(plat:Plat){
    this.platService.updatePlat(plat).subscribe(res =>{
      this.platService.getPlats().subscribe(plats => this.plats = plats);
    })
  }
}
