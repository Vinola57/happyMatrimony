import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileViewComponent } from './pages/profile-view/profile-view.component';
import { AppComponent } from './app.component';
import { InterestedComponent } from './pages/interested/interested.component';
import { ShortlistedComponent } from './pages/shortlisted/shortlisted.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';

const routes: Routes = [
  { path: '', redirectTo: 'profile-card', pathMatch: 'full' },
  { path: 'profile-view', component: ProfileViewComponent },
  { path: 'shortlisted', component: ShortlistedComponent },
  { path: 'interested', component: InterestedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
