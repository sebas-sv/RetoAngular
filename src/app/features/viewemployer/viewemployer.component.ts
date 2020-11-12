import { Component, OnInit } from '@angular/core';
import { EmployerCustom } from 'src/app/core/interfaces/employers';
import { EmployerService } from 'src/app/services/employer.service';

@Component({
  selector: 'app-viewemployer',
  templateUrl: './viewemployer.component.html',
  styleUrls: ['./viewemployer.component.scss']
})
export class ViewemployerComponent implements OnInit {
  empleados: EmployerCustom[];
  constructor(private employerService: EmployerService) { }

  ngOnInit(): void {
    this.getEmployers();
  }

  getEmployers() {
    this.employerService.getEmployers().subscribe((res) => {
      this.empleados = res;
    });
  }

}
