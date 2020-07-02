import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProduitsComponent } from './produits/produits.component';
import { AdministrationComponent } from './administration/administration.component';
import { GraphiqueComponent } from './graphique/graphique.component';
import { RouterModule, Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProduitsComponent,
    AdministrationComponent,
    GraphiqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'produits', component:ProduitsComponent },
      { path: 'administration', component:AdministrationComponent },
      { path: 'graphique', component:GraphiqueComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
