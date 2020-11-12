import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'RetoAngular';

  navLinks = [
    { path: '', label: 'Home' },
    { path: 'view', label: 'Ver empleados' },
    { path: 'create', label: 'Crear empleado' },
  ];
}
