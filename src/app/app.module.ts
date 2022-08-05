import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatatableComponent } from './table/datatable/datatable.component';
// import { HeaderComponent } from './header/header/header.component';
import { DescriptionComponent } from './table/description/description.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchListPipe } from './search-list.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DatatableComponent,
    // HeaderComponent,
    DescriptionComponent,
    SearchListPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
