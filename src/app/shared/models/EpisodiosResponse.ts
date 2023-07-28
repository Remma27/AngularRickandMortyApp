import { Episodios } from './Episodios';
import { Info } from './info';

export interface EpisodiosResponse {
  info: Info;
  results: Episodios[];
}
