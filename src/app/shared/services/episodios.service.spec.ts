import { TestBed } from '@angular/core/testing';
import { EpisodiosService } from './episodios.service';

describe('EpisodiosService', () => {
  let service: EpisodiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpisodiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
