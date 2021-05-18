import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ejemploSeleccionado: string = 'ngFor Ejemplo Tabla con material';
  ejemplosDisponibles: string[] = [
    'ngFor Ejemplo Tabla con material',
    'ngFor Ejemplo Tabla sin material',
    'ngIf Ejemplo',
  ];

}
