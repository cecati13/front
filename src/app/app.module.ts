import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FloatingMenuComponent } from './floating-menu/floating-menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeYearComponent } from './welcome-year/welcome-year.component';
import { MainStartComponent } from './main-start/main-start.component';
import { StartContainerComponent } from './start-container/start-container.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FloatingMenuComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeYearComponent,
    MainStartComponent,
    StartContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
