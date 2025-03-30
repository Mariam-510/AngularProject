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
      location: 'Cairo International Stadium, Cairo',
      Group: 'Group Two (Stage)',

      title: 'Championship League',
      date: 'Sunday, March 23, 2025',
      Kickoff: '7:00 PM',
      GatesOpen: '06:00 PM',
      price: 500,

      description: "Football isn’t just a sport—it’s an emotion that brings people together. The roar of the crowd, the passion of the players, and the thrill of every goal make live matches an unforgettable experience. Whether you're a die-hard supporter or a casual fan, witnessing this high-stakes clash in person will be an experience like no other.This game promises non-stop action as two of Egypt's top clubs battle it out for dominance. The energy in the stadium, the tactical duels, and the possibility of game-changing moments will keep fans on the edge of their seats. Don’t miss your chance to be part of this epic showdown!",
      isFavorite: false,
     
      word: "🔥 high",
      adv:"⏳ Limited Seats",
      category: '⚽ Football'

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
      image: 'img/cairo staduim.jpg',
      venue: 'Cairo International Stadium, Cairo',
      date: 'Fri 28 Mar 2025',
      tournament: 'World Cup Qualifiers 2025',
      staduim:'img/cairo staduim.jpg',
      matchNumber: 5,
      time: '08:30 PM',
      group: 'African Qualifiers Group B',
      team1: 'Egypt',
      team2: 'Algeria',
      team1Logo: 'img/egypt.svg',
      team2Logo: 'img/algeria.svg',
      isFavorite: true,
      price: 1100,
      word: "🔥 high",
      adv:"⏳ Limited Seats",
      category: '⚽ Football'
    },
    
    {
      id:2,
      image: 'img/s1.jpg',
      venue: 'Petro Sport Stadium, Cairo',
      date: 'Mon 24 Mar 2025',
      tournament: 'Egypt Cup 2025',
      matchNumber: 19,
      time: '07:30 PM',
      group: 'Quarter Finals',
     
      staduim:'img/s1.jpg',
      team2: 'ZED FC',
      team1: 'ENPPI SC',
      team1Logo: 'img/ENPPI.png',
      team2Logo: 'img/ZED.png',
      isFavorite: false,
      price: 290, // Add price
      word: "🔥 high",
      adv:"⏳ Limited Seats",
     category: '⚽ Football',
    },
    {
      id:3,
      image: 'img/s3.jpg',
      venue: 'Khaled Bichara Stadium, Gouna',
      date: 'Sun 23 Mar 2025',
      tournament: 'EPL 2024/2025',
      matchNumber: 18,
      time: '08:00 PM',
      group: 'Group Two (Stage)',
      team1: 'El Gouna SC',
      team2: 'Smouha SC',
      staduim:'img/s3.jpg',
      team1Logo: 'img/ElGouna.png',
      team2Logo: 'img/Smouha.png',
      isFavorite: false,
      price: 250, // Add price
      word: "🔥 high",
      adv:"⏳ Limited Seats",
     category: '⚽ Football'
    },
    {
      id:4,
      image: 'img/m3.jpg',
      venue: 'Alexandria Stadium, Alexandria',
      date: 'Tue 25 Mar 2025',
      tournament: 'Derby Match',
      matchNumber: 20,
      time: '06:45 PM',
      group: 'Quarter Finals',
      team1: 'Al Ittihad Alexandria SC',
      team2: 'Smouha SC',
      team1Logo: 'img/AlIttihad.png',
      team2Logo: 'img/Smouha.png',
      isFavorite: false,
      price: 500, // Add price
      word: "🔥 high",
      adv:"⏳ Limited Seats",
     category: '⚽ Football',
     staduim:'img/m3.jpg',

    },


    {
      id:4,
      image: 'img/cairo3.jpg',
      venue: 'Cairo International Stadium, Cairo', // Corrected venue
      date: 'Sat 22 Mar 2025',
      tournament: 'Championship League',
      matchNumber: 17,
      time: '09:30 PM',
      group: 'Group Two (Stage)',

      team1: 'Al Ahly SC',
      team2: 'Pyramids FC',
      team1Logo: 'img/Al Ahly.svg',
      team2Logo: 'img/Pyramids.png',
      
      isFavorite: false,
      price: 500, // Add price
     
    },
    {
      id: 5,
      image: 'img/m4.jpg',
      venue: 'Borg El Arab Stadium, Alexandria',
      date: 'Tue 15 Apr 2025',
      tournament: 'World Cup Qualifiers 2025',
      matchNumber: 7,
      time: '09:00 PM',
      group: 'African Qualifiers Group B',
      team1: 'Egypt',
      team2: 'Nigeria',
      team1Logo: 'img/egypt.svg',
      team2Logo: 'img/nigeria.svg',
      isFavorite: true,
      price: 1200,
      word: "🔥 high",
      adv: "🌍 Must-win Match!",
      category: '🌎 World Cup Qualifiers'
    },
   
    
  
   
    {
      id:7,
      image: 'img/cairo.jpg',
      venue: 'Cairo International Stadium, Cairo',
      date: 'Mon 24 Mar 2025',
      tournament: 'EPL 2024/2025',
      matchNumber: 19,
      time: '07:30 PM',
      group: 'Group One (Stage)',
      team1: 'Zamalek SC',
      team2: 'Ismaily SC',
      staduim:'img/cairo staduim.jpg',
      team1Logo: 'img/zamalekv2.png',
      team2Logo: 'img/ismaily.png',
      isFavorite: true,
      price: 300, // Add price
      word: "🔥 high",
      adv:"⏳ Limited Seats",
     category: '⚽ Football'
    },
    
   
 
    {
      id:8,
      image: 'img/m2.jpg',
      venue: 'Suez Canal Stadium, Ismailia',
      date: 'Sat 22 Mar 2025',
      tournament: 'EPL 2024/2025',
      matchNumber: 17,
      time: '09:30 PM',
      group: 'Group Two (Stage)',
      team1: 'Ismaily SC',
      team2: 'Ghazl Elmahala FC',
      team1Logo: 'img/ismaily.png',
      team2Logo: 'img/mahalla.png',
      isFavorite: false,
      price: 300, // Add price
    },
    {
      id: 9,
      image: 'img/m1.jpg',
      venue: 'Suez Canal Stadium, Ismailia',
      date: 'Sat 22 Mar 2025',
      tournament: 'EPL 2024/2025',
      matchNumber: 17,
      time: '09:30 PM',
      group: 'Group Two (Stage)',
      team1: 'Ceramica Cleopatra FC',
      team2: 'Zamalek SC',
      team1Logo: 'img/Cleopatra.png',
      team2Logo: 'img/zamalekv2.png',
      isFavorite: false,
      price: 100,
      category: '⚽ Egyptian Premier League'
    },
    {
      id: 10,
      image: 'img/cairo4.jpg',
      venue: 'Cairo International Stadium, Cairo',
      date: 'Fri 1 Apr 2025',
      tournament: 'Derby Match',
      matchNumber: 22,
      time: '09:00 PM',
      group: 'Main Stage',
      team1: 'Al Ahly SC',
      team2: 'Zamalek SC',
      team1Logo: 'img/Al Ahly.svg',
      team2Logo: 'img/zamalekv2.png',
      isFavorite: true,
      price: 900,
     
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
    this.locationUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(this.item.location)}`;

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
    { type: 'VIP', price: 400, description: 'Premium seats with VIP facilities' },
    { type: 'CAT 1', price: 300, description: 'Premium sideline seats' },

    { type: 'CAT 2', price: 200, description: 'Mid-field seats' },
    { type: 'CAT 3', price: 150, description: 'Mid-field seats' }
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
