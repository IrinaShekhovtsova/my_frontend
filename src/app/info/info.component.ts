import { Component, OnInit } from '@angular/core';
import { IEnergyCard, EnergycardService } from '../services/energycard.service';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

 
  constructor(private _ecService: EnergycardService) { }

  public energyCards?:IEnergyCard[]
  ngOnInit(): void {
    this._ecService.getEnergyCards().subscribe(res=>{
      console.log(res);
      this.energyCards=res;})
  }

  a: string = 'Hello';
  b: string = Md5.hashStr(this.a) as string;
}
