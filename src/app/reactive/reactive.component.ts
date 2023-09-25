import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  public frmRegister = this.fb.group({
    Name: this.fb.control(''),
    Price: this.fb.control(0),
    frmVendor: this.fb.group({
      VendorName: this.fb.control(''),
      VendorRating: this.fb.control(0)
    }),
    Photos: this.fb.array([this.fb.control('')])

  });
  public RegisterClick(data: any) {
    alert(JSON.stringify(data));
  }
  public AddMoreClick() {
    this.Photos.push(this.fb.control(''))
  }
  public RemoveClick(index: number) {
    this.Photos.removeAt(index);
  }
  public UpdateClick(){
    this.frmRegister.patchValue
    frmVendor :{
     VendorRating:4.1
     
    }
  }
  get VendorName() {
    return this.frmRegister.get('VendorName');
  }
  get VendorRating() {
    return this.frmRegister.get('VendorRating');
  }
  get Photos() {
    return this.frmRegister.get('Photos') as FormArray;
  }


  ngOnInit(): void {
  }

}
