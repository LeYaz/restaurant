import { Component, OnInit } from '@angular/core';
import { Plat } from 'src/app/models/Plat';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  plats: Plat[] = [];
  showAdd: boolean = false;
  isUpdate: boolean = false;
  newPlat: Plat = {name: '', stock:0, price: 0, id:0};

  constructor(private platService: PlatService) { }

  ngOnInit(): void {
    this.initView();
  }

  add(){
    this.newPlat = {name: '', stock:0, price: 0, id:0};
    this.showAdd = true;
    this.isUpdate = false;
  }

  save(){
    //TODO Appel au post ou put
    this.showAdd = false;
    
    if(this.isUpdate){
      this.platService.updatePlat(this.newPlat).subscribe(res => 
          this.initView()
        );
    }else{
      this.platService.addPlat(this.newPlat).subscribe(res => 
        this.initView()
        );
    }
    this.isUpdate = false;
    
  }

  updatePlat(id:number){
    let copy = this.plats.find(plat => plat.id === id)
    this.newPlat = {name: copy.name, stock: copy.stock, price: copy.price, id:id};
    this.showAdd = true;
    this.isUpdate= true;
  }

  initView(){
    this.platService.getPlats().subscribe(plats => this.plats = plats);
  }

}
