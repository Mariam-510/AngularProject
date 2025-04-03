import { CommonModule } from '@angular/common';
declare var bootstrap: any; // Required for Bootstrap modal handling
import { Component, HostListener, ViewChild, ElementRef, AfterViewInit, Renderer2, OnInit, ChangeDetectorRef } from '@angular/core';
import { LeafletMapComponent } from '../../leaflet-map/leaflet-map.component';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { team, match, SharedService } from '../../../Services/shared.service';


@Component({
  selector: 'app-sdetails-page',
  imports: [CommonModule, LeafletMapComponent, RouterLink, RouterModule],
  templateUrl: './sdetails-page.component.html',
  styleUrl: './sdetails-page.component.css'
})
export class SDetailsPageComponent implements AfterViewInit, OnInit {
  matches: match[] = [];
  // teams: team[] = [];
  reviews: any;
  tickets: any;
  Math = Math;
  sections!: NodeListOf<HTMLElement>;
  stopSection!: HTMLElement;
  isNavigationSticky: boolean = false; // Indicates whether the navigation buttons are sticky
  currentActiveSection: string = 'overview'; // Default active section
  private lastScrollTop: number = 0;
  isMapVisible: boolean = true;
  locationUrl: string = '';
  showMore: boolean = false;
  private initialCardTop = 0;
  private stickyThreshold = 0;

  constructor(private renderer: Renderer2, private elRef: ElementRef, private route: ActivatedRoute, private _sharedService: SharedService, private cdr: ChangeDetectorRef) { }

  match: match = {
    id: 1,
    image: 'img/cairo staduim.jpg',
    venue: 'Cairo International Stadium, Cairo', // location
    date: 'Fri 28 Mar 2025',
    tournament: 'World Cup Qualifiers 2025', //title
    staduim: 'img/cairo staduim.jpg',
    matchNumber: 5,
    time: '08:30 PM', //Kickoff
    GatesOpen: '05:00 PM',
    group: 'African Qualifiers Group B', //Group
    team1: 'Egypt',
    team2: 'Algeria',
    team1Logo: 'img/egypt.svg',
    team2Logo: 'img/algeria.svg',
    isFavorite: true,
    price: 1100,
    word: "🔥 high",
    adv: "⏳ Limited Seats",
    category: '⚽ Football',
    location: 'Cairo, Egypt'
  };

  description: string = `Football isn't just a sport—it's a passion that unites people across the world. It's more than just a game of skill and strategy; it's a celebration of culture, identity, and community. When the whistle blows, it signals the start of something bigger than a match—it’s an event that stirs emotions, fuels rivalries, and builds lifelong memories. Whether it’s the roar of the crowd, the anticipation of a goal, or the heartbreak of a last-minute loss, football has the power to bring people together, transcending borders and languages. It's a shared experience that connects fans in a way few other things can, making it a universal language spoken in every corner of the globe.`


  homeTeam: team = {
    id: 1,
    name: 'Egypt',
    logo: '/img/egypt.svg',
    description: 'One of the most successful and storied teams in African football history. The team has won the Africa Cup of Nations (AFCON) a record seven times',
    coach: 'Hossam Hassan',
    keyPlayers: 'Mohamed Salah, Omar Marmoush, Zizo'
  }

  awayTeam: team = {
    id: 2,
    name: 'Algeria',
    logo: '/img/algeria.svg',
    description: 'One of the most prominent teams in African football. They have won the Africa Cup of Nations (AFCON) twice, in 1990 and 2019.',
    coach: 'Vladimir Petković',
    keyPlayers: 'Riyad Mahrez, Ismaël Bennacer, Saïd Benrahma'
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const newId = Number(params.get('id'));
      const foundMatch = this._sharedService.matches.find(m => m.id === newId);
      console.log(foundMatch);

      if (foundMatch) {
        this.match = foundMatch;
        this.homeTeam = this._sharedService.teams.find(t => t.name === this.match.team1) || this._sharedService.teams[0];
        this.awayTeam = this._sharedService.teams.find(t => t.name === this.match.team2) || this._sharedService.teams[1];
      } else {
        console.warn("Match not found for ID:", newId);
      }
    });

    this.matches = this._sharedService.matches.filter(match => {
      return (match.id !== this.match.id) &&
        ((match.price >= this.match.price - 100 && match.price <= this.match.price + 100)
          || match.venue === this.match.venue);
    }).slice(0, 2);

    this.reviews = this._sharedService.generateReviewsForMatch(this.match.date, 5);
    this.tickets = this._sharedService.generateMatchTicketsFromPrice(this.match.price);
  }

  ngAfterViewInit() {
    this.calculateInitialPosition();

    this.sections = this.elRef.nativeElement.querySelectorAll('section');
    this.stopSection = this.elRef.nativeElement.querySelector('#stop-scroll')!;

    if (!this.tabLinks) {
      console.warn("tabLinks is not available in ngAfterViewInit");
      return;
    }
    this.checkScrollTicket();
    this.updateScrollButtonState();
  }

  toggleFavorite(event: any) {
    event.isFavorite = !event.isFavorite;
  }

  shareItem(item: any): void {
    const shareText = `Check out this event: ${item.title} - ${item.description} at ${item.venue} on ${item.date}. Price: $${item.price} .Group: ${item.Group} .Kickoff: ${item.Kickoff} .GatesOpen: ${item.GatesOpen} .`;
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

  private calculateInitialPosition() {
    const hero = this.heroSection.nativeElement;
    const card = this.eventCard.nativeElement;
    this.stickyThreshold = hero.offsetTop + hero.offsetHeight - card.offsetHeight;
  }

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
    const scrollingDown = (scrollY) > this.lastScrollTop;
    console.log(card.offsetHeight);

    // Stop scrolling effect at "YOU MIGHT ALSO LIKE"
    if (this.stopSection) {
      const stopPoint = this.stopSection.offsetTop - 300;

      if (scrollingDown) {
        //card
        if (scrollPosition >= stopPoint - 300) {
          this.renderer.removeClass(card, 'fixed-event-card');
          // this.renderer.setStyle(card, 'position', 'absolute');
          this.renderer.setStyle(card, 'top', `${stopPoint - card.offsetHeight + 100}px`);
          // console.log('card-----------------------------------------');
        }
        else {
          this.renderer.addClass(card, 'fixed-event-card');
          // console.log('card************************************************');
        }
      }
      //card
      if (!scrollingDown && scrollPosition < stopPoint - 300) {
        this.renderer.addClass(card, 'fixed-event-card');
        // console.log('card#################################################');
      }

      //tabBar
      if (scrollingDown && scrollPosition >= stopPoint) {
        flag = false;
        tabBar.classList.remove('sticky'); // Remove when reaching stop section
        // console.log('---------------------------------');
      }

      //tabBar
      else if (!scrollingDown && scrollPosition < stopPoint) {
        flag = true;
        tabBar.classList.add('sticky'); // Re-add when scrolling up above stop section
        // console.log('**************************************');

      }
    }

    // Keep tabBar sticky only when scrolling down and past the tabBar's original position
    //tabBar
    if (scrollingDown && scrollY >= tabBarOffset && flag) {
      tabBar.classList.add('sticky');
      // console.log('///////////////////////////////////////////////////');

    }
    else if (!scrollingDown && scrollY <= tabBarOffset + 500) {
      flag = true;
      tabBar.classList.remove('sticky'); // Return to original position when scrolling up
      // console.log('####################################################');

    }

    // Change active tab based on scroll
    this.sections.forEach((section) => {
      if (
        scrollPosition >= section.offsetTop - 50 &&
        scrollPosition < section.offsetTop + section.offsetHeight && scrollingDown
      ) {
        this.setActiveTab(section.id);
        // console.log("*************************************");
      }

      if (
        scrollPosition >= section.offsetTop - 200 &&
        scrollPosition < section.offsetTop + section.offsetHeight && !scrollingDown
      ) {
        this.setActiveTab(section.id);
        // console.log("---------------------------------------------");
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


  @ViewChild('eventContainer') eventContainer!: ElementRef;
  canScrollLeft: boolean = false;
  canScrollRight: boolean = true;

  updateScrollButtonState() {
    const container = this.eventContainer?.nativeElement;
    if (container) {
      this.canScrollLeft = container.scrollLeft > 0;
      this.canScrollRight = container.scrollWidth > container.clientWidth + container.scrollLeft;
    }
    this.cdr.detectChanges();
  }

  scrollLeft() {
    if (this.eventContainer) {
      this.eventContainer.nativeElement.scrollBy({ left: -500, behavior: 'smooth' });
      setTimeout(() => this.updateScrollButtonState(), 300);
    }
  }

  scrollRight() {
    if (this.eventContainer) {
      this.eventContainer.nativeElement.scrollBy({ left: 500, behavior: 'smooth' });
      setTimeout(() => this.updateScrollButtonState(), 300);
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.updateScrollButtonState();
  }


  toggleMap() {
    this.isMapVisible = !this.isMapVisible;
  }

  openShareModal() {
    this.locationUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(this.match.venue)}`;

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

  @ViewChild('ticketContainer') ticketContainer!: ElementRef;

  canScrollLeftTicket: boolean = false;
  canScrollRightTicket: boolean = true;

  checkScrollTicket() {
    const container = this.ticketContainer.nativeElement;
    this.canScrollLeftTicket = container.scrollLeft > 0;
    this.canScrollRightTicket = container.scrollLeft < container.scrollWidth - (container.clientWidth + 25);
    this.cdr.detectChanges();
  }

  scrollLeftTicket() {
    this.ticketContainer.nativeElement.scrollBy({ left: -200, behavior: 'smooth' });
    setTimeout(() => this.checkScrollTicket(), 300);
  }

  scrollRightTicket() {
    this.ticketContainer.nativeElement.scrollBy({ left: 200, behavior: 'smooth' });
    setTimeout(() => this.checkScrollTicket(), 300);
  }
}
