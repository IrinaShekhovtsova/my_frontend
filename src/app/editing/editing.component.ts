import { Component, OnInit, ViewChild } from '@angular/core';
import { IEnergyCard, EnergycardService } from '../services/energycard.service';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-editing',
  templateUrl: './editing.component.html',
  styleUrls: ['./editing.component.scss']
})
export class EditingComponent implements OnInit {
  displayedColumns: string[] = ['energyCardID', 'countryID', 'country', 'energyID','energyType','consumption','production','action'];
  dataSource!: MatTableDataSource<IEnergyCard>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, private _ecService: EnergycardService) { }
  ngOnInit(): void {
    this.getAllCards();
  }

  openDialog() {
    this.dialog.open(DialogComponent,
      {
        width: '30%'
      }).afterClosed().subscribe(val=>{
        if(val==='save'){
          this.getAllCards();
        }
      });
  }
  getAllCards() {
    this._ecService.getEnergyCards()
    .subscribe(
      {
        next:(res)=>{
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      }
    )
  }
  editCard(row: IEnergyCard) {
    this.dialog.open(DialogComponent, {
      width:'30%',
      data: row
    }).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.getAllCards();
      }
    });
  }
  deleteCard(id:number) {
    this._ecService.deleteCard(id).subscribe({
      next:(res)=>{
        alert("Deleted successfully");
        this.getAllCards();
      },
      error:()=>{
        alert("Error while deleting")
      }
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
