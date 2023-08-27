import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, throwError } from 'rxjs';
import { Resident } from '../models/resident.model';

@Injectable({
  providedIn: 'root'
})
export class ResidentService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getResidents() {
    return this.http.get<Resident[]>(`${this.apiUrl}/residents`).pipe(
      catchError(() => throwError(() => new Error('An error occurred')))
    );
  }

  addResident(resident: Resident) {
    return this.http.post(`${this.apiUrl}/residents`, resident).pipe(
      catchError(err => throwError(() => {
        return err.error;
      }))
    );
  }
}
