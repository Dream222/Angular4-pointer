import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChatResolver }         from './routes/chat/chat.resolver';

import { HomeComponent }        from './routes/home/home.component';
import { ChatComponent }        from './routes/chat/chat.component';

import { AddServiceComponent } from './components/add-service/add-service.component';
import { HeaderComponent } from './components/header/header.component';
import { WatchingComponent } from './components/watching/watching.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ServiceDetailComponent } from './components/service-detail/service-detail.component';
import { BuySellComponent } from './components/buy-sell/buy-sell.component';
import { OrdersComponent } from './components/orders/orders.component';
import { LikeComponent } from './components/like/like.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'watching', pathMatch: 'full', component: WatchingComponent },
  { path: 'liked', pathMatch: 'full', component: LikeComponent },
  { path: 'user_profile', pathMatch: 'full', component: UserProfileComponent },
  { path: 'service_detail', pathMatch: 'full', component: ServiceDetailComponent },
  { path: 'buy_sell', pathMatch: 'full', component: BuySellComponent },
  { path: 'orders', pathMatch: 'full', component: OrdersComponent },
  { path: 'chat', component: ChatComponent, resolve: { conversations: ChatResolver } }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [ ChatResolver ]
})
export class AppRoutingModule {}
