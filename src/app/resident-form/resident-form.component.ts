import { Component } from '@angular/core';
import { ResidentService } from '../services/resident.service';
import { Resident } from '../models/resident.model';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-resident-form',
  templateUrl: './resident-form.component.html',
})

export class ResidentFormComponent {
  emptyModel: Resident = {
    firstName: '',
    lastName: '',
    dateOfBirth: null,
    email: '',
    roomNumber: null,
    countryOfBirth: '',
  }
  resident: Resident = this.emptyModel;

  errorMessage: string | null = null;

  constructor(private residentService: ResidentService, private router: Router, private sharedService: SharedService) { }

  capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  addResident() {
    this.resident.firstName = this.capitalizeFirstLetter(this.resident.firstName);
    this.resident.lastName = this.capitalizeFirstLetter(this.resident.lastName);
  
    this.residentService.addResident(this.resident).subscribe({
      next: data => {
        const name = (data as {data: Resident}).data.firstName
        this.resident = this.emptyModel;
        this.sharedService.successMessage = `New Resident: ${name}, saved successfully`;
        this.router.navigate(['/residents']);
      },
      error: error => {
        this.errorMessage = error.details || 'An error occurred. Please try again.';
      }
    });
  }
}
