import { Component, Input, OnInit } from '@angular/core';
import { IEnergyCard } from '../../services/energycard.service';

@Component({
  selector: 'app-energycard',
  templateUrl: './energycard.component.html',
  styleUrls: ['./energycard.component.scss']
})
export class EnergycardComponent implements OnInit {

  @Input()
  public card!: IEnergyCard; 
  constructor() { }

  ngOnInit(): void {
  }

}
