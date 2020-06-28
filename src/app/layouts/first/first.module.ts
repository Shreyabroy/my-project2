import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first.component';
import { SignInComponent } from 'src/app/modules/sign-in/sign-in.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { OrganizationComponent } from 'src/app/modules/organization/organization.component';
import { MatDividerModule } from '@angular/material/divider';
import { NewsComponent } from 'src/app/modules/news/news.component';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { NewsApiService } from '../../modules/news/news-api.service';
import { GalleryComponent } from '../../modules/gallery/gallery.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SliderModule } from 'angular-image-slider';

@NgModule({
  declarations: [
    FirstComponent,
    SignInComponent,
    OrganizationComponent,
    NewsComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDividerModule,
    MatListModule,
    MatSidenavModule,
    MatMenuModule,
    HttpClientModule,
    MDBBootstrapModule,
    SlickCarouselModule,
    SliderModule
  ],
  providers: [NewsApiService]
})
export class FirstModule { }
