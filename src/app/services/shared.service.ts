import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  errorMessage: string | null = null;
  successMessage: string | null = null;
}
