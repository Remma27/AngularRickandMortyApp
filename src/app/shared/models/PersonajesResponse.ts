import { Personajes } from './Personaje';
import { Info } from './info';

export interface PersonajesResponse {
  info: Info;
  results: Personajes[];
}
