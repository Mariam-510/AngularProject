import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Booking {
  id: string;
  eventType: 'Football Match' | 'Concert' | 'Comedy Show';
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
  // Football-specific
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
  // Concert-specific
  artist?: {
    name: string;
    image: string;
  };
  tourName?: string;
}

@Component({
  selector: 'app-booking-history',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './booking-history.component.html',
  styleUrl: './booking-history.component.css',
})
export class BookingHistoryComponent {
  bookings: Booking[] = [
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

  filteredBookings: Booking[] = this.bookings;
  activeFilter: string = 'All';

  filterBookings(status: string) {
    this.activeFilter = status;
    if (status === 'All') {
      this.filteredBookings = this.bookings;
    } else {
      this.filteredBookings = this.bookings.filter(
        (booking) => booking.status === status
      );
    }
  }

  viewTickets(booking: Booking) {
    console.log('Viewing tickets for:', booking.id);
  }

  cancelBooking(booking: Booking) {
    console.log('Canceling booking:', booking.id);
  }
}