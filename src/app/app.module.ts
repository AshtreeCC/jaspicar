// angular
import { BrowserModule }                from '@angular/platform-browser';
import { BrowserAnimationsModule } 	from '@angular/platform-browser/animations';
import { NgModule }                     from '@angular/core';
import { ReactiveFormsModule }          from '@angular/forms';
import { HttpModule }                   from '@angular/http';
import { FlexLayoutModule }             from '@angular/flex-layout';
import { RouterModule }                 from '@angular/router';

// libraries
import { AngularFireModule }            from 'angularfire2';
import { AngularFireAuthModule }        from 'angularfire2/auth';
import { AngularFireDatabaseModule }    from 'angularfire2/database';
import { AngularFireOfflineModule }     from 'angularfire2-offline';

// modules
import { MaterialModule }               from './material.module';
import { AuthModule }                   from './auth/auth.module';

// services
//import { AuthService, AuthGuard }       from './auth/auth.service';

// app
import { AppComponent }                 from './app.component';
import { APP_LAYOUT_COMPONENTS }        from './layouts/index';
//import { APP_AUTH_COMPONENTS }          from './auth/index';
import { APP_PAGE_COMPONENTS }          from './pages/index';

// pipes
import { PipesModule }                  from "./pipes/pipes.module";

// misc
import { APP_ROUTES }                   from './app.routes';
import { FIREBASE_CONFIG }              from './app.config';

@NgModule({
  declarations: [
    AppComponent,
    APP_LAYOUT_COMPONENTS,
    //APP_AUTH_COMPONENTS,
    APP_PAGE_COMPONENTS,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireOfflineModule,
    MaterialModule,
    FlexLayoutModule,
    AuthModule,
    PipesModule,
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

