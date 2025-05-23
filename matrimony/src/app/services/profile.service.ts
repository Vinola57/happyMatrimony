import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  constructor(private http: HttpClient) {}
  getProfiles(): Observable<any[]> {
    return this.http.get<any[]>('assets/profiles.json');
  }
  getPendingProfiles() {
    return [
      {
        name: 'Priyanka',
        image: "assets/images/priyanka.jpg",
        details: '27 Yrs, 5 ft 2 in, Tamil, Nair, MBBS, Doctor, Chennai, Tamil Nadu, India'
      },
      {
        name: 'Anjali',
        image:  "assets/images/anjali.jpg",
        details: '26 Yrs, 5 ft 3 in, Tamil, MBA, Product Manager, Pune, Maharashtra, India'
      },
            {
        name: 'Neha',
        image:  "assets/images/neha.jpg",
        details: '26 Yrs, 5 ft 6 in, Tamil, M.Sc Psychology, Therapist, Tamil Nadu, India'
      },
      {
        name: 'Pragathi',
        image:   "assets/images/pragati.jpg",
        details: '26 Yrs, 5 ft 6 in, Tamil, MBBS, Doctor, Tamil Nadu, India'
      },
      {
        name: 'Sofia',
        image:  "assets/images/sofia.jpg",
        details: '26 Yrs, 5 ft 1 in, Tamil, M.Tech, Data Scientist, Tamil Nadu, India'
      },
    ];
  }
}