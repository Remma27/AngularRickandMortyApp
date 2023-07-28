import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodiosComponent } from './episodios.component';

const routes: Routes = [{ path: '', component: EpisodiosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EpisodiosRoutingModule {}
