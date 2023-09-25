import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactforms',
  templateUrl: './reactforms.component.html',
  styleUrls: ['./reactforms.component.css']
})
export class ReactformsComponent implements OnInit {

  constructor(private forms: FormBuilder) { }


    public studentForms=this.forms.group({
      studName:this.forms.control(''),
      studRollNo:this.forms.control(''),
      studAddress:this.forms.control('')
    })

    public updateStudent(){

    }
    public studSubmit(data :any){
      alert(JSON.stringify(data));
    }
  ngOnInit(): void {
  }

}
