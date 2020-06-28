import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { AboutUsComponent } from 'src/app/modules/about-us/about-us.component';
import { EmergencyRequestComponent } from 'src/app/modules/emergency-request/emergency-request.component';
import { MapsComponent } from 'src/app/modules/maps/maps.component';
import { UserProfileComponent } from 'src/app/modules/user-profile/user-profile.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HelplineComponent } from 'src/app/modules/helpline/helpline.component';
import { SignOutComponent } from 'src/app/modules/sign-out/sign-out.component';
import { NotificationsComponent } from 'src/app/modules/notifications/notifications.component';
import { FloodPreparednessComponent } from 'src/app/modules/flood-preparedness/flood-preparedness.component';
import { AgmCoreModule } from '@agm/core';
import { ShelterComponent } from 'src/app/modules/Shelter/Shelter.component';
import { RiskProneComponent } from 'src/app/modules/risk-prone/risk-prone.component';
import { RiskProneAnalysisComponent } from 'src/app/modules/risk-prone-analysis/risk-prone-analysis.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    AboutUsComponent,
    EmergencyRequestComponent,
    MapsComponent,
    UserProfileComponent,
    HelplineComponent,
    SignOutComponent,
    NotificationsComponent,
    FloodPreparednessComponent,
    ShelterComponent,
    RiskProneComponent,
    RiskProneAnalysisComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatCheckboxModule,
    MatRadioModule,
    FlexLayoutModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyClW6Ps1tAZrBh0cTtg3RU5m4KLPJtqv9Y',
      language: 'en',
      libraries: ['geometry', 'places']
    })

  ]
})
export class DefaultModule { }
