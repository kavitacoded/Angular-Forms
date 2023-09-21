import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateforms',
  templateUrl: './templateforms.component.html',
  styleUrls: ['./templateforms.component.css']
})
export class TemplateformsComponent implements OnInit {

  constructor() { }
  
  public submitClick(frmValue:any){
    alert(JSON.stringify(frmValue))
  }


  ngOnInit(): void {
  }

}
