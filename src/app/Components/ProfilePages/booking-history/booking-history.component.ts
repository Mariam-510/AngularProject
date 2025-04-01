import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddReviewComponent } from '../../Book/add-review/add-review.component';
import { MatDialog } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { QRCodeComponent } from 'angularx-qrcode'; // Import QR Code Module

interface Booking {
  id: string;
  eventType: 'Football Match' | 'Concert' | 'Theater';
  status: 'Confirmed' | 'Cancelled' | 'Completed' | 'Upcoming';
  date: Date;
  venue: {
    name: string;
    city: string;
    map?: string;
  };
  tickets: {
    category: string;
    quantity: number;
    seatNumbers?: string[];
  }[];
  totalPrice: number;
  homeTeam?: {
    name: string;
    logo: string;
    score?: number;
  };
  awayTeam?: {
    name: string;
    logo: string;
    score?: number;
  };
  artist?: {
    name: string;
    image: string;
  };
  tourName?: string;
}

@Component({
  selector: 'app-booking-history',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule,QRCodeComponent],
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css'],
})
export class BookingHistoryComponent {
  
  modalVisible: boolean = false;
  qrData: string = 'https://yourwebsite.com/ticket/123'; // Example ticket data
  /** Bookings Data */
  public bookings: Booking[] = [
    // Football Match
    {
      id: 'FBL-2305',
      eventType: 'Football Match',
      status: 'Upcoming',
      date: new Date('2024-09-14T20:00:00'),
      venue: {
        name: 'Al Salam Stadium',
        city: 'Cairo',
      },
      tickets: [{ category: 'Category 1', quantity: 2 }],
      totalPrice: 240,
      homeTeam: {
        name: 'Al Ahly FC',
        logo: 'https://upload.wikimedia.org/wikipedia/ar/8/8c/Al_Ahly_SC_logo.png',
      },
      awayTeam: {
        name: 'Enppi SC',
        logo: 'https://upload.wikimedia.org/wikipedia/en/2/22/ENPPI_Club_Logo.png',
      },
    },
    // Concert
    {
      id: 'CON-4452',
      eventType: 'Concert',
      status: 'Confirmed',
      date: new Date('2024-10-05T19:30:00'),
      venue: {
        name: 'Zed Park',
        city: 'Cairo',
      },
      tickets: [{ category: 'Golden Circle', quantity: 4 }],
      totalPrice: 600,
      artist: {
        name: 'Eslam Kabonga',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRENpQTI_YcumCAclbUuQCMvnky2HtADaYkRnOR1gBD11lOBwdkAdsagncW12PesVQp9sk&usqp=CAU',
      },
      tourName: 'Eslam Kabonga Concert',
    },
    // Completed Match
    {
      id: 'FBL-1987',
      eventType: 'Football Match',
      status: 'Completed',
      date: new Date('2024-05-28T20:45:00'),
      venue: {
        name: 'Cairo Stadium',
        city: 'Cairo',
      },
      tickets: [{ category: 'VIP Box', quantity: 1 }],
      totalPrice: 850,
      homeTeam: {
        name: 'El Zamalek',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/Zamalek_SC_logo.svg/285px-Zamalek_SC_logo.svg.png',
        score: 2,
      },
      awayTeam: {
        name: 'Pyramids FC',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Pyramids_FC_%282020%29.png/285px-Pyramids_FC_%282020%29.png',
        score: 1,
      },
    },
    // Cancelled Match
    {
      id: 'FBL-2305',
      eventType: 'Football Match',
      status: 'Cancelled',
      date: new Date('2024-09-14T20:00:00'),
      venue: {
        name: 'Emirates Stadium',
        city: 'London',
      },
      tickets: [{ category: 'Category 1', quantity: 2 }],
      totalPrice: 240,
      homeTeam: {
        name: 'Arsenal FC',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/270px-Arsenal_FC.svg.png',
      },
      awayTeam: {
        name: 'Spurs',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Tottenham_Hotspur.svg/180px-Tottenham_Hotspur.svg.png',
      },
    },
    // Upcoming Concert
    {
      id: 'CON-4452',
      eventType: 'Concert',
      status: 'Upcoming',
      date: new Date('2024-10-05T19:30:00'),
      venue: {
        name: 'Zed Park',
        city: 'Cairo',
      },
      tickets: [{ category: 'Golden Circle', quantity: 4 }],
      totalPrice: 600,
      artist: {
        name: 'Hamo Bika',
        image: 'https://africanmusiclibrary.org/_next/image?url=https%3A%2F%2Fd31btwpnsku5px.cloudfront.net%2Fbcd15d9541ae.jpg&w=3840&q=75',
      },
      tourName: 'Hamo Bika Concert',
    },
    // Cancelled Concert
    {
      id: 'CON-4452',
      eventType: 'Concert',
      status: 'Cancelled',
      date: new Date('2024-10-05T19:30:00'),
      venue: {
        name: 'Zed Park',
        city: 'Cairo',
      },
      tickets: [{ category: 'Golden Circle', quantity: 4 }],
      totalPrice: 600,
      artist: {
        name: 'Filo',
        image: 'https://pbs.twimg.com/profile_images/1386647394507530244/BQUf_a4r_400x400.jpg',
      },
      tourName: 'Filo Concert',
    },
    // Confirmed Match
    {
      id: 'FBL-2305',
      eventType: 'Football Match',
      status: 'Confirmed',
      date: new Date('2024-09-14T20:00:00'),
      venue: {
        name: 'Etihad Stadium',
        city: 'Manchester',
      },
      tickets: [{ category: 'Category 1', quantity: 2 }],
      totalPrice: 240,
      homeTeam: {
        name: 'Manchester City',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/800px-Manchester_City_FC_badge.svg.png',
      },
      awayTeam: {
        name: 'Manchester United',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/800px-Manchester_United_FC_crest.svg.png',
      },
    },
  ];

  /** Filtered Bookings */
  public filteredBookings: Booking[] = this.bookings;

  /** Paginated Bookings */
  public paginatedBookings: Booking[] = [];

  /** Active Filters */
  public activeFilter: string = 'All';
  public activeEventType: 'All' | 'Football' | 'Events' = 'All';

  /** Dropdown States */
  public eventTypeDropdownOpen = false;
  public statusDropdownOpen = false;

  /** Pagination Properties */
  public currentPage: number = 1;
  public itemsPerPage: number = 3;
  public totalPages: number = 1;
  public pages: number[] = [];

  constructor(private dialog: MatDialog) {
    this.applyFilters(); // Initialize with all bookings
    this.updatePagination(); // Set up initial pagination
  }

  // ---------------------------
  //    FILTER METHODS
  // ---------------------------

  /** Applies both filters (status + event type) */
  private applyFilters(): void {
    this.filteredBookings = this.bookings.filter((booking) => {
      // Status filter
      const statusMatch =
        this.activeFilter === 'All' || booking.status === this.activeFilter;

      // Event type filter
      const typeMatch =
        this.activeEventType === 'All' ||
        (this.activeEventType === 'Football' &&
          booking.eventType === 'Football Match') ||
        (this.activeEventType === 'Events' &&
          (booking.eventType === 'Concert' || booking.eventType === 'Theater'));

      return statusMatch && typeMatch;
    });

    // Reset to first page when filters change
    this.currentPage = 1;
    this.updatePagination();
  }

  /** Filter by Event Type */
  public filterByEventType(type: 'All' | 'Football' | 'Events'): void {
    this.activeEventType = type;
    this.applyFilters();
    this.eventTypeDropdownOpen = false;
  }

  /** Filter by Status */
  public filterBookings(status: string): void {
    this.activeFilter = status;
    this.applyFilters();
    this.statusDropdownOpen = false;
  }

  // ---------------------------
  //    PAGINATION METHODS
  // ---------------------------

  /** Updates pagination data */
  private updatePagination(): void {
    // Calculate total pages
    this.totalPages = Math.ceil(this.filteredBookings.length / this.itemsPerPage);
    
    // Generate page numbers array
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    
    // Update paginated bookings
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedBookings = this.filteredBookings.slice(startIndex, endIndex);
  }

  /** Handles page change */
  public onPageChange(page: number): void {
    if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
      this.currentPage = page;
      this.updatePagination();
    }
  }

  // ---------------------------
  //    ACTION METHODS
  // ---------------------------


  eventDetails: any = null; // Store event details
  /** View Tickets */
  public viewTickets(booking: Booking): void {
    console.log('Viewing tickets for:', booking.id);
    // Assuming booking.id is the unique identifier

    this.eventDetails = booking; // Store the booking details to display in modal
    this.qrData = `https://yourwebsite.com/ticket/${booking.id}`;
    this.modalVisible = true;
  }
 closeModal() {
    this.modalVisible = false;
    this.eventDetails = null; // Clear event details when closing

  }
  closeModalOnOutsideClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.closeModal();
    }
  }

  confirmCancel(booking: any) {
    const isConfirmed = window.confirm("Are you sure you want to cancel this booking?");
    if (isConfirmed) {
      booking.status = 'Cancelled';
      this.applyFilters();
    }
  }

  // ---------------------------
  //    DROPDOWN HANDLERS
  // ---------------------------

  /** Toggles Event Type dropdown */
  public toggleEventTypeDropdown(): void {
    this.eventTypeDropdownOpen = !this.eventTypeDropdownOpen;
    if (this.statusDropdownOpen) {
      this.statusDropdownOpen = false;
    }
  }

  /** Toggles Status dropdown */
  public toggleStatusDropdown(): void {
    this.statusDropdownOpen = !this.statusDropdownOpen;
    if (this.eventTypeDropdownOpen) {
      this.eventTypeDropdownOpen = false;
    }
  }

  openReviewDialog(event: any): void {
    this.dialog.open(AddReviewComponent, {
      width: '400px',
      data: { eventName: event.name }
    });
  }
}