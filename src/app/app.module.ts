import { AppComponent } from './app.component';
import { AppEffects } from './app.effects';
import { AppRoutingModule } from './app-routing.module';
import { BaseInterceptor } from './shared/interceptors/base.interceptor';
import { BaseService } from './shared/services/base.service';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { GamesModule } from './games/games.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { environment } from '../environments/environment';
import { ROOT_REDUCERS, metaReducers } from './reducers';
import { CustomRouterStateSerializer } from './shared/utils';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(ROOT_REDUCERS, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AppEffects]),
    StoreRouterConnectingModule.forRoot(),
    NoopAnimationsModule,
    GamesModule
  ],
  providers: [
    BaseService,
    {
      multi: true,
      provide: HTTP_INTERCEPTORS,
      useClass: BaseInterceptor
   },
   {
     provide: RouterStateSerializer,
     useClass: CustomRouterStateSerializer
   },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
