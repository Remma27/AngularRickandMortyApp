import { Component } from '@angular/core';
import { EpisodiosResponse } from 'src/app/shared/models/EpisodiosResponse';
import { EpisodiosService } from 'src/app/shared/services/episodios.service';

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.scss'],
})
export class EpisodiosComponent {
  results: EpisodiosResponse;
  currentPage = 1;
  constructor(private srvEpisodios: EpisodiosService) {}
  ngOnInit() {
    this.srvEpisodios.getEpisodios(this.currentPage).subscribe((result) => {
      this.results = result;
    });
  }

  Siguiente() {
    if (this.results.info.next) {
      this.currentPage++;
      this.srvEpisodios.getEpisodios(this.currentPage).subscribe((result) => {
        this.results = result;
      });
    }
  }

  Anterior() {
    if (this.results.info.prev) {
      this.currentPage--;
      this.srvEpisodios.getEpisodios(this.currentPage).subscribe((result) => {
        this.results = result;
      });
    }
  }
}
