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

  //     id: 1,
  //     image: 'img/EPL3.jpg',
  //     venue: 'Cairo International Stadium, Cairo',
  //     date: 'Mon 24 Mar 2025',
  //     tournament: 'EPL Cup 2024/2025',
  //     matchNumber: 19,
  //     time: '07:30 PM',
  //     group: 'Group One (Stage)',
  //     team1: 'Zamalek SC',
  //     team2: 'Ismaily SC',
  //     team1Logo: 'img/Zamalek.svg',
  //     team2Logo: 'img/ismaily.png',
  //     isFavorite: true,
  //     price: 300, // Add price
  //     word: "🔥 high",
  //     adv: "⏳ Limited Seats",
  //     category: '⚽ Football'
  //   },
  //   {
  //     id: 2,
  //     image: 'img/EPL4.jpg',
  //     venue: 'Ismailia Stadium, Ismailia',
  //     date: 'Sun 23 Mar 2025',
  //     tournament: 'EPL Cup 2024/2025',
  //     matchNumber: 18,
  //     time: '08:00 PM',
  //     group: 'Group Two (Stage)',
  //     team1: 'Al Ahly SC',
  //     team2: 'Pyramids FC',
  //     team1Logo: 'img/Al Ahly.svg',
  //     team2Logo: 'img/Pyramids.png',
  //     isFavorite: true,
  //     price: 250, // Add price
  //     word: "🔥 high",
  //     adv: "⏳ Limited Seats",
  //     category: '⚽ Football'
  //   },

  //   {
  //     id: 3,
  //     image: 'img/EPL4.jpg',
  //     venue: 'Alexandria Stadium, Alexandria',
  //     date: 'Tue 25 Mar 2025',
  //     tournament: 'EPL Cup 2024/2025',
  //     matchNumber: 20,
  //     time: '06:45 PM',
  //     group: 'Group One (Stage)',
  //     team1: 'Smouha SC',
  //     team2: 'Al Ittihad Alexandria',

  //     team1Logo: 'img/Smouha.png',
  //     team2Logo: 'img/AlIttihad.png',
  //     isFavorite: true,
  //     price: 500, // Add price
  //     word: "🔥 high",
  //     adv: "⏳ Limited Seats",
  //     category: '⚽ Football'
  //   },
  //   {
  //     id: 4,
  //     image: 'img/EPL4.jpg',
  //     venue: 'Suez Canal Stadium, Ismailia',
  //     date: 'Sat 22 Mar 2025',
  //     tournament: 'EPL Cup 2024/2025',
  //     matchNumber: 17,
  //     time: '09:30 PM',
  //     group: 'Group Two (Stage)',
  //     team1: 'Ceramica Cleopatra',
  //     team2: 'Ghazl Elmahala ',
  //     team1Logo: 'img/Cleopatra.png',
  //     team2Logo: 'img/mahalla.png',
  //     isFavorite: true,
  //     price: 100, // Add price
  //     word: "🔥 high",
  //     adv: "⏳ Limited Seats",
  //     category: '⚽ Football'
  //   },
  //   {
  //     id: 5,
  //     image: 'img/EPL3.jpg',
  //     venue: 'Cairo International Stadium',
  //     date: 'Mon 24 Mar 2025',
  //     tournament: 'EPL Cup 2024/2025',
  //     matchNumber: 19,
  //     time: '07:30 PM',
  //     group: 'Group One (Stage)',
  //     team1: 'Zamalek SC',
  //     team2: 'Ismaily SC',
  //     team1Logo: 'img/Zamalek.svg',
  //     team2Logo: 'img/ismaily.png',
  //     isFavorite: true,
  //     price: 290, // Add price
  //     word: "🔥 high",
  //     adv: "⏳ Limited Seats",
  //     category: '⚽ Football'

  //   }
  // ];

}
