import { Component, Inject, OnInit } from '@angular/core';
import { IEnergyCard, EnergycardService } from 'src/app/services/energycard.service';
import { FormControl,FormBuilder,FormGroup,Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  cardForm!:FormGroup;
  actionBtn: string = "Save";
  title: string = "Add EnergyCard";
  constructor(private formBuilder: FormBuilder, 
    private _ecService: EnergycardService,
    @Inject(MAT_DIALOG_DATA) public editData: IEnergyCard,
    private dialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.cardForm = this.formBuilder.group({
      countryID:['',Validators.required],
      country: ['',Validators.required],
      energyID: ['',Validators.required],
      energyType: ['',Validators.required],
      consumption: ['',Validators.required],
      production: ['',Validators.required]
    });

    if(this.editData) {
      this.actionBtn = "Update";
      this.title = "Edit EnergyCard";
      this.cardForm.controls['countryID'].setValue(this.editData.countryID);
      this.cardForm.controls['country'].setValue(this.editData.country);
      this.cardForm.controls['energyID'].setValue(this.editData.energyID);
      this.cardForm.controls['energyType'].setValue(this.editData.energyType);
      this.cardForm.controls['consumption'].setValue(this.editData.consumption);
      this.cardForm.controls['production'].setValue(this.editData.production);
    }
  
  }

  updateCard()
  {
    return this._ecService.putCard(this.cardForm.value,this.editData.energyCardID)
    .subscribe({
      next:(res)=>{
        alert("EnergyCard updated");
        this.cardForm.reset();
        this.dialogRef.close('update');
      },
      error:()=>{
        alert("Error while updating");
      }
    })
  }
  addCard()
  {
    if(!this.editData) {
      if(this.cardForm.valid) {
        this._ecService.postCard(this.cardForm.value)
        .subscribe({
          next:(res)=>
          {
            alert("Sensor added successfully");
            this.cardForm.reset();
            this.dialogRef.close('save');
          }, error:() =>
          {
            alert("Error while adding")
          }
        })
      } 
      } else{
        this.updateCard();
    }
  }

}
