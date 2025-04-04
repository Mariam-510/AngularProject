import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedService } from '../../../Services/shared.service';

@Component({
  selector: 'app-get-all-matches',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './get-all-matches.component.html',
  styleUrl: './get-all-matches.component.css'
})
export class GetAllMatchesComponent {

  matches: any;
  Math = Math;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.matches = this.sharedService.matches;
  }

  currentPage = 1;
  itemsPerPage = 5;

  // Calculate the total number of pages
  get totalPages() {
    return Math.ceil(this.matches.length / this.itemsPerPage);
  }

  // Get paginated events
  get paginatedMatches() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.matches.slice(start, start + this.itemsPerPage);
  }

  // Change Page
  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
}
