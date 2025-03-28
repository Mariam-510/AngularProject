import { CommonModule } from '@angular/common';
import { Component, HostListener, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { LeafletMapComponent } from '../../leaflet-map/leaflet-map.component';

declare var bootstrap: any; // Required for Bootstrap modal handling

export interface event {
  title: string;
  image: string;
  rating: number;
  description: string;
  date: string;
  location: string;
  price: string;
  isFavorite: boolean;
  word: string;
  reviews: number;
}

@Component({
  selector: 'app-edetails',
  imports: [CommonModule, LeafletMapComponent],
  templateUrl: './edetails.component.html',
  styleUrl: './edetails.component.css'
})
export class EdetailsComponent implements AfterViewInit {
  item =
    {
      image: 'img/1.jpg',
      location: 'Ahmanson Theater',
      fullLocation: 'Zamalek, Cairo',
      category: 'Theater',
      title: '& JULIET',
      date: 'August 13 - September 7',
      rating: 3.5,
      price: 35,
      description: "It's not going to win Nobel prizes or Pulitzers, but it will keep you entertained for two and a half hours.It's not going to win Nobel prizes or Pulitzers, but it will keep you entertained for two and a half hours.It's not going to win Nobel prizes or Pulitzers, but it will keep you entertained for two and a half hours.It's not going to win Nobel prizes or Pulitzers, but it will keep you entertained for two and a half hours.It's not going to win Nobel prizes or Pulitzers, but it will keep you entertained for two and a half hours.It's not going to win Nobel prizes or Pulitzers, but it will keep you entertained for two and a half hours.It's not going to win Nobel prizes or Pulitzers, but it will keep you entertained for two and a half hours.",
      isFavorite: false,
      word: "Popular",
      reviews: 6
    }
  Math = Math;

  toggleFavorite(event: any) {
    event.isFavorite = !event.isFavorite;
  }

  shareItem(item: any): void {
    const shareText = `Check out this event: ${item.title} - ${item.description} at ${item.location} on ${item.date}. Price: $${item.price}`;
    if (navigator.share) {
      navigator.share({
        title: item.title,
        text: shareText,
        url: window.location.href
      }).then(() => console.log('Shared successfully'))
        .catch(err => console.error('Sharing failed', err));
    } else {
      // Fallback for browsers that don’t support navigator.share
      alert(`Copy and share this: ${shareText}`);
    }
  }



  @ViewChild('heroSection') heroSection!: ElementRef;
  @ViewChild('eventCard') eventCard!: ElementRef;
  @ViewChild('navigationButtons') navigationButtons!: ElementRef;
  // Reference to the navigation button group
  @ViewChild('tabLinks') tabLinks!: ElementRef;

  sections!: NodeListOf<HTMLElement>;
  stopSection!: HTMLElement;
  isNavigationSticky: boolean = false; // Indicates whether the navigation buttons are sticky
  currentActiveSection: string = 'overview'; // Default active section
  private initialCardTop = 0;
  private stickyThreshold = 0;

  constructor(private renderer: Renderer2, private elRef: ElementRef) { }

  ngAfterViewInit() {
    this.calculateInitialPosition();

    this.sections = this.elRef.nativeElement.querySelectorAll('section');
    this.stopSection = this.elRef.nativeElement.querySelector('#stop-scroll')!;

    if (!this.tabLinks) {
      console.warn("tabLinks is not available in ngAfterViewInit");
      return;
    }

    this.checkScroll();

    this.checkScrollSchedule();

    this.updateScrollButtons();
  }

  private calculateInitialPosition() {
    const hero = this.heroSection.nativeElement;
    const card = this.eventCard.nativeElement;
    this.stickyThreshold = hero.offsetTop + hero.offsetHeight - card.offsetHeight;
  }
  private lastScrollTop: number = 0;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const card = this.eventCard.nativeElement;

    // Handle tab bar stickiness
    if (!this.tabLinks || !this.tabLinks.nativeElement) return;

    let scrollPosition = scrollY + 100;
    const tabBar = this.tabLinks.nativeElement;
    const tabBarOffset = tabBar.offsetTop;
    let flag = true;

    // Detect Scroll Direction
    const scrollingDown = scrollY > this.lastScrollTop;

    // Stop scrolling effect at "YOU MIGHT ALSO LIKE"
    if (this.stopSection) {
      const stopPoint = this.stopSection.offsetTop - 200;

      if (scrollingDown) {
        if (scrollPosition >= stopPoint - 500) {
          this.renderer.removeClass(card, 'fixed-event-card');

          // this.renderer.setStyle(card, 'position', 'absolute');
          this.renderer.setStyle(card, 'top', `${stopPoint - 350}px`);
        }
        else {
          this.renderer.addClass(card, 'fixed-event-card');
        }
      }

      if (scrollingDown && scrollPosition >= stopPoint) {
        flag = false;
        tabBar.classList.remove('sticky'); // Remove when reaching stop section
      }

      if (!scrollingDown && scrollPosition < stopPoint - 300) {
        this.renderer.addClass(card, 'fixed-event-card');
      }

      else if (!scrollingDown && scrollPosition < stopPoint) {
        flag = true;
        tabBar.classList.add('sticky'); // Re-add when scrolling up above stop section
      }


    }

    // Keep tabBar sticky only when scrolling down and past the tabBar's original position
    if (scrollingDown && scrollY >= tabBarOffset && flag) {
      tabBar.classList.add('sticky');
    }
    else if (!scrollingDown && scrollY <= tabBarOffset + 500) {
      flag = true;
      tabBar.classList.remove('sticky'); // Return to original position when scrolling up
    }

    // Change active tab based on scroll
    this.sections.forEach((section) => {
      if (
        scrollPosition >= section.offsetTop &&
        scrollPosition < section.offsetTop + section.offsetHeight
      ) {
        this.setActiveTab(section.id);
      }
    });

    this.lastScrollTop = scrollY; // Update last scroll position
  }



  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  private setActiveTab(activeId: string) {
    const tabs = this.tabLinks.nativeElement.querySelectorAll('a');
    tabs.forEach((tab: HTMLElement) => {
      tab.classList.remove('active');
      if (tab.getAttribute('href')?.includes(activeId)) {
        tab.classList.add('active');
      }
    });
  }

  // -----------------------------------------------------------------------------------------------------
  // events
  eventList = [
    {
      title: "PAUL SIMON",
      venue: "Ahmanson Theater",
      date: "July 7 - 2025",
      rating: 5,
      image: "img/4.jpg",
      isFavorite: true

    },
    {
      title: "Phantom Of The Opera",
      venue: "Ahmanson Theater",
      date: "July 7 - 2025",
      rating: 3.5,
      image: "img/10.jpg",
      isFavorite: false
    },
    {
      title: "Umphrey's McGee",
      venue: "Ahmanson Theater",
      date: "July 7 - 2025",
      rating: 4,
      image: "img/11.jpg",
      isFavorite: true
    },
    {
      title: "PAUL SIMON",
      venue: "Ahmanson Theater",
      date: "July 7 - 2025",
      rating: 5,
      image: "img/4.jpg",
      isFavorite: true

    },
    {
      title: "Umphrey's McGee",
      venue: "Ahmanson Theater",
      date: "July 7 - 2025",
      rating: 4,
      image: "img/11.jpg",
      isFavorite: true
    }
  ];

  // -----------------------------------------------------------------------------------------------------
  scrollLeft() {
    const container = document.querySelector('.event-scroll-wrapper') as HTMLElement;
    container.scrollLeft -= 300; // Adjust scroll distance as needed
  }

  scrollRight() {
    const container = document.querySelector('.event-scroll-wrapper') as HTMLElement;
    container.scrollLeft += 300; // Adjust scroll distance as needed
  }

  // -----------------------------------------------------------------------------------------------------
  isMapVisible: boolean = true;

  toggleMap() {
    this.isMapVisible = !this.isMapVisible;
  }

  locationUrl: string = '';

  openShareModal() {
    this.locationUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(this.item.fullLocation)}`;

    // Open Bootstrap Modal
    const modalElement = document.getElementById('shareLocationModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.locationUrl).then(() => {
      alert('Location link copied to clipboard!');
    });
  }

  // -----------------------------------------------------------------------------------------------------
  schedules = [
    { date: '2025-03-25', day: 'Monday', time: '10:00 AM - 12:00 PM' },
    { date: '2025-03-26', day: 'Tuesday', time: '1:00 PM - 3:00 PM' },
    { date: '2025-03-27', day: 'Wednesday', time: '9:00 AM - 11:00 AM' },
    { date: '2025-03-28', day: 'Thursday', time: '2:00 PM - 4:00 PM' },
    { date: '2025-03-29', day: 'Friday', time: '11:00 AM - 1:00 PM' },
    { date: '2025-03-30', day: 'Saturday', time: '3:00 PM - 5:00 PM' }, // This will trigger scrolling
    { date: '2025-03-31', day: 'Sunday', time: '5:00 PM - 7:00 PM' }
  ];

  // -----------------------------------------------------------------------------------------------------
  showMore: boolean = false;


  // -----------------------------------------------------------------------------------------------------
  tickets = [
    { type: 'Backstage Pass', price: 1500, description: 'Meet the performers & backstage access.' },
    { type: 'VIP', price: 1000, description: 'Exclusive access with premium seating.' },
    { type: 'Regular', price: 500, description: 'Standard seating with great view.' },
    { type: 'Economy', price: 250, description: 'Budget-friendly seating option.' }
  ];

  @ViewChild('ticketContainer') ticketContainer!: ElementRef;

  canScrollLeft = false;
  canScrollRight = true; // Assume initial state

  scrollLeftTicket() {
    this.ticketContainer.nativeElement.scrollBy({ left: -250, behavior: 'smooth' });
    setTimeout(() => this.checkScroll(), 300); // Allow time for scrolling
  }

  scrollRightTicket() {
    this.ticketContainer.nativeElement.scrollBy({ left: 250, behavior: 'smooth' });
    setTimeout(() => this.checkScroll(), 300);
  }

  checkScroll() {
    const el = this.ticketContainer.nativeElement;
    this.canScrollLeft = el.scrollLeft > 0;
    this.canScrollRight = el.scrollLeft < el.scrollWidth - el.clientWidth - 5;
  }

  // -----------------------------------------------------------------------------------------------------
  showFullTerms: boolean = false;
  terms: string = `Here you would place the full terms and conditions of the event.
                     This could include rules about refunds, behavior, liability, and more.
                     Ensure that all critical details are covered.`;


  // -----------------------------------------------------------------------------------------------------

  reviews = [
    { user: 'Ahmed', rating: 3.5, comment: 'Amazing service! Highly recommended.', date: '2025-03-25' },
    { user: 'Sara', rating: 4, comment: 'Great experience, but there’s room for improvement.', date: '2025-03-24' },
    { user: 'Mariam', rating: 5, comment: 'Fantastic! Everything was perfect.', date: '2025-03-23' },
    { user: 'Omar', rating: 3, comment: 'It was good, but not exceptional.', date: '2025-03-22' },
    { user: 'Nour', rating: 4, comment: 'Really enjoyed it! Will come back again.', date: '2025-03-21' }
  ];


  // -----------------------------------------------------------------------------------------------------
  @ViewChild('scheduleContainer') scheduleContainer!: ElementRef;

  canScrollLeftSchedule = false;
  canScrollRightSchedule = true; // Assume initial state

  scrollLeftSchedule() {
    this.scheduleContainer.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
    setTimeout(() => this.checkScrollSchedule(), 300); // Allow time for scrolling
  }

  scrollRightSchedule() {
    this.scheduleContainer.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
    setTimeout(() => this.checkScrollSchedule(), 300);
  }

  checkScrollSchedule() {
    const el = this.scheduleContainer.nativeElement;
    this.canScrollLeftSchedule = el.scrollLeft > 0;
    this.canScrollRightSchedule = el.scrollLeft < el.scrollWidth - el.clientWidth - 5;
  }

  // -----------------------------------------------------------------------------------------------------
  castList = [
    {
      name: 'Daniel Radcliffe',
      role: 'Harry Potter',
      image: 'img/h.jpeg'
    },
    {
      name: 'Emma Watson',
      role: 'Hermione Granger',
      image: 'img/e.jpeg'
    },
    {
      name: 'Rupert Grint',
      role: 'Ron Weasley',
      image: 'img/h.jpeg'
    },
    {
      name: 'Tom Felton',
      role: 'Draco Malfoy',
      image: 'img/e.jpeg'
    },
    {
      name: 'Alan Rickman',
      role: 'Severus Snape',
      image: 'img/h.jpeg'
    },
    {
      name: 'Maggie Smith',
      role: 'Minerva McGonagall',
      image: 'img/e.jpeg'
    },
    {
      name: 'Robbie Coltrane',
      role: 'Rubeus Hagrid',
      image: 'img/h.jpeg'
    }
  ];


  // -----------------------------------------------------------------------------------------------------

  @ViewChild('castContainer', { static: false }) castContainer!: ElementRef;

  canScrollLeftCast: boolean = false;
  canScrollRightCast: boolean = true;


  scrollLeftCast() {
    if (this.castContainer) {
      this.castContainer.nativeElement.scrollBy({ left: -250, behavior: 'smooth' });
      setTimeout(() => this.updateScrollButtons(), 300); // Delay to update buttons after scroll
    }
  }

  scrollRightCast() {
    if (this.castContainer) {
      this.castContainer.nativeElement.scrollBy({ left: 250, behavior: 'smooth' });
      setTimeout(() => this.updateScrollButtons(), 300); // Delay to update buttons after scroll
    }
  }

  updateScrollButtons() {
    if (this.castContainer) {
      const container = this.castContainer.nativeElement;
      this.canScrollLeftCast = container.scrollLeft > 0;
      this.canScrollRightCast = container.scrollLeft + container.clientWidth < container.scrollWidth;
    }
  }

  // -----------------------------------------------------------------------------------------------------
  categoryIcons: { [key: string]: string } = {
    'Concerts': '🎵',          // Music Note
    'Theater': '🎭',           // Theater Masks
    'Dance': '💃',             // Dancing Emoji
    'Stand-Up Comedy': '🎤',   // Microphone
    'Other': '✨',             // Sparkles (for other)
  };

}
