import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PrimaireCollectorComponent } from './components/primaire-collector/primaire-collector.component';
import { ContactComponent } from './components/contact/contact.component';

const appRoutes: Routes = [
  { path:'', component:PrimaireCollectorComponent},
  { path:'contact', component:ContactComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PrimaireCollectorComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
