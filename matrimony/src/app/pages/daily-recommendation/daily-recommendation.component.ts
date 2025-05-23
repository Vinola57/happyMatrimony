import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-daily-recommendation',
  templateUrl: './daily-recommendation.component.html',
  styleUrls: ['./daily-recommendation.component.scss']
})
export class DailyRecommendationComponent implements OnInit {
  profiles: any[] = [];
  currentIndex = 0;
  location: any;


  constructor(private http: HttpClient, private snackBar: MatSnackBar,  private router: Router) {} // <-- Correct injection

  ngOnInit() {
    this.http.get<any[]>('assets/profiles.json').subscribe(data => {
      this.profiles = data;
    });
  }

onProfileAction(event: { type: string, profile?: any }) {
  if (event.type === 'interested') {
    this.snackBar.open('Interested', '', { duration: 1500, verticalPosition: 'top' });
  } else if (event.type === 'not-interested') {
    this.snackBar.open('Not Interested', '', { duration: 1500, verticalPosition: 'top' });
  } else if (event.type === 'shortlist') {
    this.snackBar.open('Shortlisted', '', { duration: 1500, verticalPosition: 'top' });
  }

  if (this.currentIndex < this.profiles.length - 1) {
    this.currentIndex++;
  }
}
goBack() {
    this.router.navigate(['/pending-profile']);
  }
}