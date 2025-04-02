import { CommonModule } from '@angular/common';
declare var bootstrap: any; // Required for Bootstrap modal handling
import { Component, HostListener, ViewChild, ElementRef, AfterViewInit, Renderer2, OnInit } from '@angular/core';
import { LeafletMapComponent } from '../../leaflet-map/leaflet-map.component';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { eventItem, team, match, SharedService } from '../../../Services/shared.service';

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
  match: any;
  isMapVisible: boolean = true;
  locationUrl: string = '';
  showMore: boolean = false;
  canScrollLeft = false;
  canScrollRight = true; // Assume initial state
  private initialCardTop = 0;
  private stickyThreshold = 0;

  constructor(private renderer: Renderer2, private elRef: ElementRef, private route: ActivatedRoute, private _sharedService: SharedService) { }

  item: eventItem =
    {
      id: 1,
      location: 'Cairo International Stadium, Cairo',
      Group: 'Group Two (Stage)',
      title: 'Championship League',
      date: 'Mar 2 - 2025',
      Kickoff: '7:00 PM',
      GatesOpen: '06:00 PM',
      price: 500,
      description: "Football isn't just a sport—it's an emotion that brings people together...",
      isFavorite: false,
      word: "🔥 high",
      adv: "⏳ Limited Seats",
      category: '⚽ Football'
    }

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
      this.match = this._sharedService.matches.find(m => m.id === newId);

      if (this.match) {
        this.homeTeam = this._sharedService.teams.find(t => t.name === this.match.team1) || this._sharedService.teams[0];
        this.awayTeam = this._sharedService.teams.find(t => t.name === this.match.team2) || this._sharedService.teams[1];
      }
    });

    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Match ID:', id);

    this.match = this._sharedService.matches.find(m => m.id === id);

    console.log(this.match)

    const foundItem = this._sharedService.eventItems.find((e: eventItem) => e.id === id);
    if (foundItem) {
      this.item = foundItem;
    }

    console.log(this.item)

    if (this.match) {
      this.homeTeam = this._sharedService.teams.find(t => t.name === this.match.team1) || this._sharedService.teams[0];
      this.awayTeam = this._sharedService.teams.find(t => t.name === this.match.team2) || this._sharedService.teams[1];
    }

    // this.matches = this._sharedService.matches;

    this.matches = this._sharedService.matches.filter(match => {
      return (match.id !== this.item.id) &&
        ((match.price >= this.item.price - 100 && match.price <= this.item.price + 100)
          || match.venue === this.item.location);
    });

    this.reviews = this._sharedService.generateReviewsForMatch(this.item.date, 5);
    this.tickets = this._sharedService.generateMatchTicketsFromPrice(this.item.price);
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
    const scrollingDown = scrollY > this.lastScrollTop;

    // Stop scrolling effect at "YOU MIGHT ALSO LIKE"
    if (this.stopSection) {
      const stopPoint = this.stopSection.offsetTop - 200;

      if (scrollingDown) {
        if (scrollPosition >= stopPoint - 350) {
          this.renderer.removeClass(card, 'fixed-event-card');

          // this.renderer.setStyle(card, 'position', 'absolute');
          this.renderer.setStyle(card, 'top', `${stopPoint - 500}px`);
        }
        else {
          this.renderer.addClass(card, 'fixed-event-card');
        }
      }

      if (scrollingDown && scrollPosition >= stopPoint) {
        flag = false;
        tabBar.classList.remove('sticky'); // Remove when reaching stop section
      }

      if (!scrollingDown && scrollPosition < stopPoint - 350) {
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

  scrollLeft() {
    const container = document.querySelector('.event-scroll-wrapper') as HTMLElement;
    container.scrollLeft -= 450; // Adjust scroll distance as needed
  }

  scrollRight() {
    const container = document.querySelector('.event-scroll-wrapper') as HTMLElement;
    container.scrollLeft += 450; // Adjust scroll distance as needed
  }

  toggleMap() {
    this.isMapVisible = !this.isMapVisible;
  }

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

  @ViewChild('ticketContainer') ticketContainer!: ElementRef;

  canScrollLeftTicket: boolean = false;
  canScrollRightTicket: boolean = true;

  checkScrollTicket() {
    const container = this.ticketContainer.nativeElement;
    this.canScrollLeftTicket = container.scrollLeft > 0;
    this.canScrollRightTicket = container.scrollLeft < container.scrollWidth - (container.clientWidth + 25);
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
