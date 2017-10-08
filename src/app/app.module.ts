import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RealisatiesComponent } from './components/realisaties/realisaties.component';
import { OfferteSecundaireCollectorComponent } from './components/offerte-secundaire-collector/offerte-secundaire-collector.component';
import { ContactComponent } from './components/contact/contact.component';
import { OffertesComponent } from './components/offertes/offertes.component';

import { DataService } from './services/data.service';

const appRoutes: Routes = [
  { path:'', component:RealisatiesComponent},
  { path:'offerte-secundaire-collector', component:OfferteSecundaireCollectorComponent},
  { path:'offertes', component:OffertesComponent},
  { path:'contact', component:ContactComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    OfferteSecundaireCollectorComponent,
    ContactComponent,
    OffertesComponent,
    RealisatiesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
