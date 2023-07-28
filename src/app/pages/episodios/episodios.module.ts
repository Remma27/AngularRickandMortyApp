import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodiosComponent } from './episodios.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [EpisodiosComponent],
  imports: [CommonModule, MaterialModule],
})
export class EpisodiosModule {}
