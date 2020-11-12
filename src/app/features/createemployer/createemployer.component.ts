import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployerService } from 'src/app/services/employer.service';

@Component({
  selector: 'app-createemployer',
  templateUrl: './createemployer.component.html',
  styleUrls: ['./createemployer.component.scss'],
})
export class CreateemployerComponent implements OnInit {
  formValue;
  dataEdit;
  id:number;

  constructor(
    private employerService: EmployerService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this._route.params.subscribe((params) => {
      this.id = params['id'];
      //console.log(this.id);

      if(this.id != undefined){
        this.employerService.getEmployer(this.id).subscribe((res) => {
        this.dataEdit = res.data;
      });
      }else{

      }




    });
  }

  getFormValue(data) {
    this.formValue = data;
    console.log("form",this.formValue);
    if(this.id==undefined){
      this.createEmployee(this.formValue);
    }
    if(this.id !=undefined){
      this.updateEmployee(this.formValue);
    }
  }

  createEmployee(data) {
    this.employerService.create(data).subscribe((res) => {
      console.log('Create:', res);
    });
  }

  updateEmployee(data) {
    this.employerService.update(data, this.id).subscribe((res) => {
      console.log('Update:', res);
    });
  }
}
