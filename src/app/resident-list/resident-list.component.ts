import { Component, OnInit } from '@angular/core';
import { ResidentService } from '../services/resident.service';
import { Resident } from '../models/resident.model';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-resident-list',
  templateUrl: './resident-list.component.html'
})

export class ResidentListComponent implements OnInit {
  residents: Resident[] = [];

  constructor(private residentService: ResidentService, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.residentService.getResidents().subscribe({
      next: data => {
        this.residents = data
      },
      error: () => {
        this.sharedService.errorMessage = "There was an error fetching residents. Check the API server is running or try again later."
      }
    });
  }
}
