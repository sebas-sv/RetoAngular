import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-employer',
  templateUrl: './form-employer.component.html',
  styleUrls: ['./form-employer.component.scss'],
})
export class FormEmployerComponent implements OnInit {
  @Output() FormValue: EventEmitter<any> = new EventEmitter<any>();
  @Input() dataEdit;

  accion: string;
  formEmployer: FormGroup;
  employer;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
  }

  ngOnChanges(){
    if (this.dataEdit != undefined){
      this.accion = "Editar";
      this.rellenarDatos(this.dataEdit);
    }else{
      this.accion = "Crear";
      this.initForm();
    }
  }

  rellenarDatos(data){
    this.formEmployer = this.formBuilder.group({
      name: data.employee_name,
      salary: data.employee_salary,
      age: data.employee_age,
    });
  }

  initForm() {
    this.formEmployer = this.formBuilder.group({
      name: [],
      salary: [],
      age: [],
    });
  }

  onSubmit(evt) {
    this.FormValue.emit(this.formEmployer.value);
  }
}
