
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, Tooltip, CategoryScale, Filler, Legend } from 'chart.js';
interface Booking {
  user: string;
  event: string;
  type: string;
  tickets: number;
  price: string;
  status: string;
}
@Component({
  selector: 'app-admin-home',
  imports: [CommonModule,FormsModule],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent implements AfterViewInit,OnInit {
 
  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart() {
    Chart.register(LineController, LineElement, PointElement, LinearScale, Title, Tooltip, CategoryScale, Legend, Filler, Tooltip);

    const ctx = document.getElementById('revenueChart') as HTMLCanvasElement;
    const ctxx = ctx.getContext('2d') as CanvasRenderingContext2D;
    if (!ctxx) return;
    // Create gradients
    const gradientBlue = ctxx.createLinearGradient(0, 0, 0, 300);
    gradientBlue.addColorStop(0, 'rgba(54, 162, 235, 0.5)');
    gradientBlue.addColorStop(1, 'rgba(228, 236, 241, 0.08)');
    const gradientOrange = ctxx.createLinearGradient(0, 0, 0, 300);
    gradientOrange.addColorStop(0, 'rgba(255, 159, 64, 0.5)');
    gradientOrange.addColorStop(1, 'rgba(243, 220, 174, 0.12)');
    new Chart(ctx, {

      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Matches Revenue',
            data: [5000, 7000, 8000, 12000, 15000, 13000, 17000, 19000, 22000, 25000, 25000, 27000],
            borderColor: 'blue',
            backgroundColor: gradientBlue,
            pointBackgroundColor: 'blue',
            fill: true,
            pointRadius: 4,
            tension: 0.4
          },
          {
            label: 'Shows Revenue',
            data: [3000, 4000, 6000, 9000, 11000, 10000, 14000, 16000, 18000, 18000, 20000, 23000],
            borderColor: 'orange',
            backgroundColor: gradientOrange,
            pointBackgroundColor: 'orange',
            fill: true,
            pointRadius: 4,
            tension: 0.4
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false // Hides the default legend to use a custom legend
          },
          // title: {
          //   display: true,
          //   text: 'Revenue by Event Type',

          //   font: { size: 30 },
          //   color: '#333'
          // },
          tooltip: {
            enabled: true,
            callbacks: {
              label: function (tooltipItem: any) {
                return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
              }
            }
          }
        },
        scales: {
          x: {
            grid: {
              display: false // Hides vertical grid lines
            }
          },
          y: {
            grid: {
              color: '#ddd', // Light gray horizontal lines
            },
            beginAtZero: true
          }
        }
      }
    });
  }



  bookings: Booking[]  = [
    { user: 'Ahmed Khaled', event: 'Amr Diab Live Concert', type: 'Concerts', tickets: 2, price: '1,200 EGP', status: 'Confirmed' },
    { user: 'Mariam Ashraf', event: 'The Phantom of the Opera - Cairo Show', type: 'Theater', tickets: 3, price: '2,000 EGP', status: 'Upcoming' },
    { user: 'Mohamed Tarek', event: 'Cairo Opera Ballet Performance', type: 'Dance', tickets: 1, price: '500 EGP', status: 'Confirmed' },
    { user: 'Yasmin Adel', event: 'Al Ahly vs Zamalek Derby', type: 'Football Matches', tickets: 2, price: '600 EGP', status: 'Cancelled' },
    { user: 'Omar Hassan', event: 'Stand-Up Comedy Night - Bassem Youssef', type: 'Stand-Up Comedy', tickets: 4, price: '800 EGP', status: 'Upcoming' },
    { user: 'Shahd Ashraf', event: 'Tamino Live Party', type: 'Concerts', tickets: 3, price: '900 EGP', status: 'Confirmed' },
    { user: 'Karim Adel', event: 'Ash Music Party', type: 'Concerts', tickets: 2, price: '1,100 EGP', status: 'Upcoming' }
  ];
  eventIcons: { [key: string]: string } = {
    'Concerts': '🎤',
    'Theater': '🎭',
    'Dance': '💃',
    'Stand-Up Comedy': '🎙️',
    'Football Matches': '⚽',
    'All Events': '📅'
  };
  filteredBookings: Booking[] = [...this.bookings];
  selectedEvent: string = 'All Events';
  searchQuery: string = '';
  selectedIcon = '📅';
  paginatedBookings: Booking[]=[] ;

  currentPage = 1;
  pageSize = 5;
  pages:number[]=[];
 
  startIndex = 0;
  endIndex = 0;

  ngOnInit(): void {
    this.filteredBookings = [...this.bookings]; // Load all bookings initially
    this.selectedEvent = 'All Events';
    this.updatePagination();
  }

  onPageChange(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePagination();
    }
  }

  get totalPages(): number {
    return Math.ceil(this.filteredBookings.length / this.pageSize);
  }

  private updatePagination(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.paginatedBookings = this.filteredBookings.slice(startIndex, startIndex + this.pageSize);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }
  getPages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
  
  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePagination();
    }
  }
   // Function to filter bookings by event type
   filterByEvent(eventType: string): void {
    this.selectedEvent = eventType;
    this.selectedIcon = this.eventIcons[eventType]; // Get the corresponding icon


    if (eventType === "All Events") {
      this.filteredBookings = [...this.bookings];
    } else {
      this.filteredBookings = this.bookings.filter(booking => booking.type === eventType);
    }

    // Apply search filtering after event filtering
    this.applySearchFilter();
  }

  // Function to search bookings by event name
  searchBookings(event: any): void {
    this.searchQuery = event.target.value.toLowerCase();
    this.applySearchFilter();
  }

  // Apply both search and event filters together
  private applySearchFilter(): void {
    let filtered = [...this.bookings];

    if (this.selectedEvent !== "All Events") {
      filtered = filtered.filter(booking => booking.type === this.selectedEvent);
    }

    if (this.searchQuery) {
      filtered = filtered.filter(booking => booking.event.toLowerCase().includes(this.searchQuery));
    }

    this.filteredBookings = filtered;
    this.updatePagination(); 
  }
  getStatusClass(status: string) {
    switch (status) {
      case 'Confirmed': return 'badge bg-success';
      case 'Completed': return 'badge bg-secondary text-dark';
      case 'Upcoming': return 'badge bg-warning';
      default: return 'badge bg-secondary';
    }
  }
  activities = [
    { time: '5 min', text: 'Omar booked a VIP ticket for "Amr Diab Live in Cairo."', color: 'purple' },
    { time: '15 min', text: 'Sara canceled her booking for "Pyramids vs Future FC."', color: 'teal' },
    { time: '32 min', text: 'Ahmed booked 2 tickets for "Ahly vs Zamalek" match', color: 'green' },
    { time: '56 min', text: 'Nour completed a payment of 500 EGP for "Tamer Hosny Concert."', color: 'red' },
    { time: '2 hrs', text: 'Shahd booked 4 tickets for "Cairokee at The Arena"', color: 'blue' },
    { time: '1 day', text: 'Fatma booked seats for "Sufi Dance Night at El Sawy Culturewheel."', color: 'lightblue' },
    { time: '2 days', text: 'Hana submitted a 5-star review for "Comedy Stars at Rawabet Theater."', color: 'gold' },
    { time: '4 weeks', text: 'Kareem failed to complete payment for "Ballet at Cairo Opera House."', color: 'black' }
  ];
 
 
}