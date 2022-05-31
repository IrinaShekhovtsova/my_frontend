import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnergycardService {

  constructor(private _http: HttpClient) { }

  public getEnergyCards(): Observable<IEnergyCard[]> {
    return this._http.get<IEnergyCard[]>("/api/EnergyCards")
  }

  public postCard(card: IEnergyCard) {
    return this._http.post<IEnergyCard>("/api/EnergyCards",card);
  }

  public putCard(card: IEnergyCard, id:number) {
    return this._http.put<IEnergyCard>("/api/EnergyCards/"+id,card);
  }

  public deleteCard(id:number) {
    return this._http.delete<any>("/api/EnergyCards/"+id);
  }
}

export interface IEnergyCard
{
  energyCardID: number;
  countryID: number;
  country: string;
  energyID: number;
  energyType: string;
  consumption: number;
  production: number;
}