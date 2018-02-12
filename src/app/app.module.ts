import { BrowserModule }            from '@angular/platform-browser';
import { RouterModule }             from '@angular/router';
import { NgModule }                 from '@angular/core';
import { HttpClientModule }         from '@angular/common/http';
import { ReactiveFormsModule }      from '@angular/forms';
import { FacebookModule }           from 'ngx-facebook';
import {
  GoogleApiModule,
  NG_GAPI_CONFIG
} from 'ng-gapi';

import { AppRoutingModule }         from './app-routing.module';

import { AppComponent }             from './app.component';
import { HomeComponent }            from './routes/home/home.component';
import { HeaderComponent }          from './components/header/header.component';
import { NavComponent }             from './components/nav/nav.component';
import { SigninComponent }          from './components/signin/signin.component';
import { SignupComponent }          from './components/signup/signup.component';
import { ForgotPasswordComponent }  from './components/forgot-password/forgot-password.component';
import { AddServiceComponent }      from './components/add-service/add-service.component';
import { AuthService }              from './services/auth.service';
import { environment }              from './../environments/environment';
import { NgGapiClientConfig }       from './interfaces/ng-gapi-client-config';
import { ServiceService } from './services/service.service';
import { WatchingComponent } from './components/watching/watching.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ServiceDetailComponent } from './components/service-detail/service-detail.component';
import { BuySellComponent } from './components/buy-sell/buy-sell.component';
import { OrdersComponent } from './components/orders/orders.component';
import { WatchingService } from './services/watching.service';
import { UserService } from './services/user.service';
import { LikeComponent } from './components/like/like.component';
import { LikeService } from './services/like.service';
import { BuyService } from './services/buy.service';
import { SellService } from './services/sell.service';
import { ConversationService } from './services/conversation.service';
import { ChatComponent } from './routes/chat/chat.component';


let gapiClientConfig: NgGapiClientConfig = {
  client_id: environment.GOOGLE_OAUTH_CLIENT_ID,
  discoveryDocs: ["https://analyticsreporting.googleapis.com/$discovery/rest?version=v4"],
  scope: [
  ].join(" ")
};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavComponent,
    SigninComponent,
    SignupComponent,
    ForgotPasswordComponent,
    AddServiceComponent,
    WatchingComponent,
    LeftMenuComponent,
    UserProfileComponent,
    ServiceDetailComponent,
    BuySellComponent,
    OrdersComponent,
    LikeComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FacebookModule.forRoot(),
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig
    }),
    RouterModule
  ],
  providers: [ AuthService, ServiceService, WatchingService, UserService, LikeService, BuyService, SellService, 
    ConversationService ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }
