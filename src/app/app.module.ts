import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { PersonajesModule } from 'src/app/pages/personajes/personajes.module';
import { EpisodiosModule } from 'src/app/pages/episodios/episodios.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    PersonajesModule,
    EpisodiosModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
