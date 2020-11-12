// Respuesta de la API Empleado
export interface EmployersResponse {
  status: String;
  message: string;
  data: Employer[];
}

// Empleado
export interface Employer {
  id: number;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
  profile_image: string;
}

// Custom
export class EmployerCustom {
  employeeAge: number;
  employeeName: string;
  employeeSalary: number;
  id: number;
}
