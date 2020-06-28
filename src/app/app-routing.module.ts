import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmergencyRequestComponent } from './modules/emergency-request/emergency-request.component';
import { MapsComponent } from './modules/maps/maps.component';
import { UserProfileComponent } from './modules/user-profile/user-profile.component';
import { HomeComponent } from './modules/home/home.component';
import { AboutUsComponent } from './modules/about-us/about-us.component';
import { ContactUsComponent } from './modules/contact-us/contact-us.component';
import { QuickLinksComponent } from './modules/quick-links/quick-links.component';
import { DefaultComponent } from './layouts/default/default.component';
import { HelplineComponent } from './modules/helpline/helpline.component';
import { SignOutComponent } from './modules/sign-out/sign-out.component';
import { NotificationsComponent } from './modules/notifications/notifications.component';
import { FloodPreparednessComponent } from './modules/flood-preparedness/flood-preparedness.component';
import { ShelterComponent } from './modules/Shelter/Shelter.component';
import { RiskProneComponent } from './modules/risk-prone/risk-prone.component';
import { RiskProneAnalysisComponent } from './modules/risk-prone-analysis/risk-prone-analysis.component';
import { SignInComponent } from './modules/sign-in/sign-in.component';
import { FirstComponent } from './layouts/first/first.component';
import { OrganizationComponent } from './modules/organization/organization.component';
import { NewsComponent } from './modules/news/news.component';
import { GalleryComponent } from './modules/gallery/gallery.component';


const routes: Routes = [{
  path: '',
  component: FirstComponent,
  children: [{
    path: 'sign-in',
    component: SignInComponent
  }, {
    path: 'organisation',
    component: OrganizationComponent
  }, {
    path: 'news',
    component: NewsComponent
  }, {
    path: 'gallery',
    component: GalleryComponent
  }]
}, {
  path: '',
  component: DefaultComponent,
  children: [{
    path: 'emergency-request',
    component: EmergencyRequestComponent
  }, {
    path: 'maps',
    component: MapsComponent,
    children: [{
      path: '',
      component: RiskProneComponent
    }]
  }, {
    path: 'user-profile',
    component: UserProfileComponent
  }, {
    path: 'about-us',
    component: AboutUsComponent
  }, {
    path: 'contact-us',
    component: ContactUsComponent
  }, {
    path: 'quick-links',
    component: QuickLinksComponent
  }, {
    path: 'helpline',
    component: HelplineComponent
  }, {
    path: 'sign-out',
    component: SignOutComponent
  }, {
    path: 'notifications',
    component: NotificationsComponent
  }, {
    path: '',
    component: HomeComponent
  }, {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'flood-preparedness',
    component: FloodPreparednessComponent
  }, {
    path: 'Shelter',
    component: ShelterComponent
  }, {
    path: 'risk-prone',
    component: RiskProneComponent
  }, {
    path: 'risk-prone-analysis',
    component: RiskProneAnalysisComponent
  }]
}];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
