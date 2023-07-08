import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '@environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MenuModule } from './shared/componets/menu/menu.module';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService implements ErrorHandler {
  constructor() {
    // not to do
  }

  handleError(error: any, type?: string) {
    console.log('error');
    console.log(error);
  }
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    MenuModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Limite de ações mantidas no histórico (opcional)
      logOnly: environment.production, // Exibir logs somente em ambiente de produção (opcional)
      autoPause: true, // Pausar gravação de ações ao sair da página (opcional)
      name: 'Meu App Store'
    })
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: ErrorHandlingService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
