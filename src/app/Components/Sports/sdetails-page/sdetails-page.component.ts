import { CommonModule } from '@angular/common';
declare var bootstrap: any; // Required for Bootstrap modal handling
import { Component, HostListener, ViewChild, ElementRef, AfterViewInit, Renderer2, OnInit } from '@angular/core';
import { LeafletMapComponent } from '../../leaflet-map/leaflet-map.component';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';

interface Team {
  id: number;
  name: string;
  logo: string;
  description: string;
  coach: string;
  keyPlayers: string;
}
@Component({
  selector: 'app-sdetails-page',
  imports: [CommonModule, LeafletMapComponent, RouterLink, RouterModule],
  templateUrl: './sdetails-page.component.html',
  styleUrl: './sdetails-page.component.css'
})
export class SDetailsPageComponent implements AfterViewInit, OnInit {
  Math = Math;
  item =
    {
      image: 'img/1.jpg',
      location: 'Ismailia Stadium, Ismailia',
      fullLocation: 'Ismailia Stadium, Ismailia',
      category: 'Matches',
      Group: 'A',

      title: 'Championship League',
      date: 'Sunday, March 23, 2025',
      Kickoff: '7:00 PM',
      GatesOpen: '06:00 PM',
      price: 500,

      description: "Football isn’t just a sport—it’s an emotion that brings people together. The roar of the crowd, the passion of the players, and the thrill of every goal make live matches an unforgettable experience. Whether you're a die-hard supporter or a casual fan, witnessing this high-stakes clash in person will be an experience like no other.This game promises non-stop action as two of Egypt's top clubs battle it out for dominance. The energy in the stadium, the tactical duels, and the possibility of game-changing moments will keep fans on the edge of their seats. Don’t miss your chance to be part of this epic showdown!",
      isFavorite: false,
      word: "high",

    }

  toggleFavorite(event: any) {
    event.isFavorite = !event.isFavorite;
  }

  shareItem(item: any): void {
    const shareText = `Check out this event: ${item.title} - ${item.description} at ${item.location} on ${item.date}. Price: $${item.price} .Group: ${item.Group} .Kickoff: ${item.Kickoff} .GatesOpen: ${item.GatesOpen} .`;
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

  constructor(private renderer: Renderer2, private elRef: ElementRef, private route: ActivatedRoute) { }

  ngAfterViewInit() {
    this.calculateInitialPosition();

    this.sections = this.elRef.nativeElement.querySelectorAll('section');
    this.stopSection = this.elRef.nativeElement.querySelector('#stop-scroll')!;

    if (!this.tabLinks) {
      console.warn("tabLinks is not available in ngAfterViewInit");
      return;
    }
    this.checkScroll();
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
        if (scrollPosition >= stopPoint - 350) {
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

  //Matches
  matches = [

    {
      id: 1,
      image: 'img/EPL3.jpg',
      venue: 'Cairo International Stadium, Cairo',
      date: 'Mon 24 Mar 2025',
      tournament: 'EPL Cup 2024/2025',
      matchNumber: 19,
      time: '07:30 PM',
      group: 'Group One (Stage)',
      team1: 'Zamalek SC',
      team2: 'Ismaily SC',
      team1Logo: 'img/Zamalek.svg',
      team2Logo: 'img/ismaily.png',
      isFavorite: true,
      price: 300, // Add price
    },
    {
      id: 2,
      image: 'img/EPL4.jpg',
      venue: 'Ismailia Stadium, Ismailia',
      date: 'Sun 23 Mar 2025',
      tournament: 'EPL Cup 2024/2025',
      matchNumber: 18,
      time: '08:00 PM',
      group: 'Group Two (Stage)',
      team1: 'Al Ahly SC',
      team2: 'Pyramids FC',
      team1Logo: 'img/Al Ahly.svg',
      team2Logo: 'img/Pyramids.png',
      isFavorite: false,
      price: 250, // Add price
    },

    {
      id: 3,
      image: 'img/EPL4.jpg',
      venue: 'Alexandria Stadium, Alexandria',
      date: 'Tue 25 Mar 2025',
      tournament: 'EPL Cup 2024/2025',
      matchNumber: 20,
      time: '06:45 PM',
      group: 'Group One (Stage)',
      team1: 'Smouha SC',
      team2: 'Al Ittihad Alexandria',

      team1Logo: 'img/Smouha.png',
      team2Logo: 'img/AlIttihad.png',
      isFavorite: false,
      price: 500, // Add price
    },
    {
      id: 4,
      image: 'img/EPL4.jpg',
      venue: 'Suez Canal Stadium, Ismailia',
      date: 'Sat 22 Mar 2025',
      tournament: 'EPL Cup 2024/2025',
      matchNumber: 17,
      time: '09:30 PM',
      group: 'Group Two (Stage)',
      team1: 'Ceramica Cleopatra',
      team2: 'Ghazl Elmahala ',
      team1Logo: 'img/Cleopatra.png',
      team2Logo: 'img/mahalla.png',
      isFavorite: false,
      price: 100, // Add price
    },
    {
      id: 5,
      image: 'img/EPL3.jpg',
      venue: 'Cairo International Stadium',
      date: 'Mon 24 Mar 2025',
      tournament: 'EPL Cup 2024/2025',
      matchNumber: 19,
      time: '07:30 PM',
      group: 'Group One (Stage)',
      team1: 'Zamalek SC',
      team2: 'Ismaily SC',
      team1Logo: 'img/Zamalek.svg',
      team2Logo: 'img/ismaily.png',
      isFavorite: false,
      price: 290, // Add price

    }
  ];

  // Teams
  teams: Team[] = [
    {
      id: 1,
      name: 'Al Ahly SC',
      logo: '/img/Al Ahly.svg',
      description: 'The most successful club in Africa, based in Cairo. Record holder of CAF Champions League titles.',
      coach: 'Marcelo Koller',
      keyPlayers: 'Mohamed El Shenawy, Percy Tau, Ahmed Abdelkader'
    },
    {
      id: 2,
      name: 'Pyramids FC',
      logo: '/img/Pyramids.png',
      description: 'Ambitious Cairo-based club known for their attacking style of play and modern facilities.',
      coach: 'Jamie Pacheco',
      keyPlayers: 'Abdallah El Said, Fiston Mayele, Mohamed Chibi'
    },

  ];
  match: any;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id')); // Get ID from route
      this.match = this.matches.find(m => m.id === id); // Find match by ID
    });
  }




  // -----------------------------------------------------------------------------------------------------
  scrollLeft() {
    const container = document.querySelector('.event-scroll-wrapper') as HTMLElement;
    container.scrollLeft -= 450; // Adjust scroll distance as needed
  }

  scrollRight() {
    const container = document.querySelector('.event-scroll-wrapper') as HTMLElement;
    container.scrollLeft += 450; // Adjust scroll distance as needed
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


  // -----------------------------------------------------------------------------------------------------
  showMore: boolean = false;


  // -----------------------------------------------------------------------------------------------------
  reviews = [
    { user: 'Ahmed', rating: 3.5, comment: 'Amazing service! Highly recommended.', date: '2025-03-25' },
    { user: 'Sara', rating: 4, comment: 'Great experience, but there’s room for improvement.', date: '2025-03-24' },
    { user: 'Mariam', rating: 5, comment: 'Fantastic! Everything was perfect.', date: '2025-03-23' },
    { user: 'Omar', rating: 3, comment: 'It was good, but not exceptional.', date: '2025-03-22' },
    { user: 'Nour', rating: 4, comment: 'Really enjoyed it! Will come back again.', date: '2025-03-21' }
  ];

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


}
