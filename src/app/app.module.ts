import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NavigationService } from './services/navigation.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ReviewComponent } from './review/review.component';
import { SearchProfileComponent } from './search-profile/search-profile.component';
import { PushInfoComponent } from './push-info/push-info.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { InviteComponent } from './invite/invite.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { BioComponent } from './bio/bio.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserProfileComponent,
    HomeComponent,
    ReviewComponent,
    SearchProfileComponent,
    PushInfoComponent,
    TestimonialComponent,
    InviteComponent,
    TestimonialsComponent,
    BioComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule

  ],
  providers: [NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
