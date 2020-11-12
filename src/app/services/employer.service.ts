import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//RxJS
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
//Interfaz
import {
  Employer,
  EmployersResponse,
  EmployerCustom,
} from '../core/interfaces/employers';
@Injectable({
  providedIn: 'root',
})
export class EmployerService {
  URL_API: string;

  constructor(private http: HttpClient) {
    this.URL_API = 'http://dummy.restapiexample.com/api/v1/';
  }

  public getEmployer(id: number): Observable<any> {
    return this.http.get<EmployersResponse>(
      this.URL_API + 'employee/' + id
    ); /*.pipe(
      map((res) => this.mapToEmployee(res.data)),
      catchError((err) => err)
    );*/
  }

  public getEmployers(): Observable<any> {
    return this.http.get<EmployersResponse>(this.URL_API + 'employees').pipe(
      map((res) => this.mapToEmployee(res.data)),
      catchError((err) => err)
    );
  }

  public create(body): Observable<any> {
    body = JSON.stringify(body);
    return this.http.post(this.URL_API + 'create', body);
  }

  public update(body, id): Observable<any> {
    body = JSON.stringify(body);
    return this.http.put(this.URL_API + 'update/' + id, body);
  }

  public delete(id): Observable<any> {
    return this.http.delete(this.URL_API + 'delete/' + id);
  }

  mapToEmployee(employerCollection: Employer[]): EmployerCustom[] {
    const employeeCustomCollection: EmployerCustom[] = [];
    employerCollection.forEach((emp: Employer) => {
      const newEmployerCustom: EmployerCustom = new EmployerCustom();
      newEmployerCustom.employeeAge = emp.employee_age;
      newEmployerCustom.employeeName = emp.employee_name;
      newEmployerCustom.employeeSalary = emp.employee_salary;
      newEmployerCustom.id = emp.id;
      employeeCustomCollection.push(newEmployerCustom);
    });
    return employeeCustomCollection;
  }
}
