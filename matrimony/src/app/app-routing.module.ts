import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileViewComponent } from './pages/profile-view/profile-view.component';
import { DailyRecommendationComponent} from './pages/daily-recommendation/daily-recommendation.component';
import { ShortlistedComponent } from './pages/shortlisted/shortlisted.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { PendingProfileComponent } from './components/pending-profile/pending-profile.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: PendingProfileComponent,
    children: [
      { path: '', component: ProfileViewComponent }
    ]
  },
  { path: 'profile-view', component: ProfileViewComponent },
  { path: 'profile-card', component: ProfileCardComponent },
  { path: 'pending-profile', component: PendingProfileComponent },
  { path: 'shortlisted', component: ShortlistedComponent },
  { path: 'daily-recommendation', component: DailyRecommendationComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
