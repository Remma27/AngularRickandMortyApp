import { Component } from '@angular/core';
import { PersonajesResponse } from 'src/app/shared/models/PersonajesResponse';
import { PersonajesService } from 'src/app/shared/services/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss'],
})
export class PersonajesComponent {
  results: PersonajesResponse;
  currentPage = 1;
  constructor(private srvPersonajes: PersonajesService) {}
  ngOnInit() {
    this.srvPersonajes.getPersonajes(this.currentPage).subscribe((result) => {
      this.results = result;
    });
  }

  Siguiente() {
    if (this.results.info.next) {
      this.currentPage++;
      this.srvPersonajes.getPersonajes(this.currentPage).subscribe((result) => {
        this.results = result;
      });
    }
  }

  Anterior() {
    if (this.results.info.prev) {
      this.currentPage--;
      this.srvPersonajes.getPersonajes(this.currentPage).subscribe((result) => {
        this.results = result;
      });
    }
  }
}
