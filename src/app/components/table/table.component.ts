import { Component, Input, OnInit } from '@angular/core';
import { EmployerCustom } from 'src/app/core/interfaces/employers';
import { EmployerService } from 'src/app/services/employer.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() empleados: EmployerCustom[];

  empleadoTest: EmployerCustom[];
  displayedColumns: string[];

  constructor(private employerService: EmployerService) {
    this.displayedColumns = ['id', 'nombre', 'salario', 'edad', 'acciones'];
  }

  ngOnInit(): void {}

  ngOnChanges() {
    this.empleadoTest = this.empleados;
  }

  deleteEmployer(id) {
    this.employerService.delete(id).subscribe((res) => {
      console.log('Delete:', res);
    });
  }
}
