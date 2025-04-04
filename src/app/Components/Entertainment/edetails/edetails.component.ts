import { CommonModule } from '@angular/common';
import { Component, HostListener, ViewChild, ElementRef, AfterViewInit, Renderer2, OnInit, ChangeDetectorRef } from '@angular/core';
import { LeafletMapComponent } from '../../leaflet-map/leaflet-map.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SharedService } from '../../../Services/shared.service';
import { ToastrService } from '../../../Services/toastr.service';

declare var bootstrap: any; // Required for Bootstrap modal handling

export interface show {
  id: number;
  title: string;
  category: string;
  imageSmall: string;
  imageLarge: string;
  rating: number;
  description: string;
  date: string;
  location: string;
  fullLocation: string;
  price: number;
  isFavorite: boolean;
  word: string;
  reviews: number;
  qoute: string;
  subQoute: string;
}

@Component({
  selector: 'app-edetails',
  imports: [CommonModule, LeafletMapComponent, RouterModule],
  templateUrl: './edetails.component.html',
  styleUrl: './edetails.component.css'
})
export class EdetailsComponent implements AfterViewInit, OnInit {

  constructor(private sharedService: SharedService, private route: ActivatedRoute, private renderer: Renderer2,
     private elRef: ElementRef, private cdr: ChangeDetectorRef, private toastr: ToastrService) { }

  item: show =
    {
      id: 7,
      title: 'Harry Potter and the Cursed Child',
      category: 'Theater',
      imageSmall: 'img/Shows/t1.jpg',
      imageLarge: 'img/Shows/t11.jpg',
      rating: 4,
      description: `Step into the magical world of Harry Potter with this spectacular theatrical experience, full of wonder and adventure.`,
      date: 'Jun 22 - 2025',
      location: 'Cairo Opera House',
      fullLocation: 'Cairo, Egypt',
      price: 500,
      isFavorite: true,
      word: 'Magical!',
      reviews: 15,
      qoute: "An enchanting journey!",
      subQoute: "Experience the magic live."
    };

  tickets: any;
  schedules: any
  eventList: any;
  reviews: any;
  castList: any;


  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); // Get ID from URL
    console.log(id);

    const foundItem = this.sharedService.shows.find((s: show) => s.id === id);
    if (foundItem) {
      this.item = foundItem;
    }

    this.tickets = this.sharedService.generateTicketsFromPrice(this.item.price);
    this.schedules = this.sharedService.generateSchedule(this.item.date);
    this.eventList = this.sharedService.shows.filter(show => {
      return (show.id !== this.item.id) &&
        ((show.price >= this.item.price - 5 && show.price <= this.item.price + 5)
          || show.category === this.item.category);
    });


    this.reviews = this.sharedService.generateReviewsForShow(this.item.date, 5);
    this.castList = this.sharedService.cast.find(castItem => castItem.showId === this.item.id)?.cast || [];

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
      this.toastr.success(`Copy and share this: ${shareText}`);
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

  ngAfterViewInit() {
    this.calculateInitialPosition();

    this.sections = this.elRef.nativeElement.querySelectorAll('section');
    this.stopSection = this.elRef.nativeElement.querySelector('#stop-scroll')!;

    if (!this.tabLinks) {
      console.warn("tabLinks is not available in ngAfterViewInit");
      return;
    }

    this.checkScrollTicket();

    this.checkScrollSchedule();

    this.checkScrollCast();

    this.updateScrollButtonState();

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

  // -----------------------------------------------------------------------------------------------------

  isLeftDisabled = true;  // Initially disable the left button
  isRightDisabled = false; // Initially enable the right button

  scrollLeft() {
    const container = document.querySelector('.event-scroll-wrapper') as HTMLElement;
    container.scrollLeft -= 500; // Adjust scroll distance as needed
    this.updateScrollButtonState();
  }

  scrollRight() {
    const container = document.querySelector('.event-scroll-wrapper') as HTMLElement;
    container.scrollLeft += 500; // Adjust scroll distance as needed
    this.updateScrollButtonState();
  }

  updateScrollButtonState() {
    const container = document.querySelector('.event-scroll-wrapper') as HTMLElement;
    const maxScroll = container.scrollWidth - container.clientWidth;

    // Disable left button if we're at the beginning
    this.isLeftDisabled = container.scrollLeft === 0;

    // Disable right button if we've reached the end
    this.isRightDisabled = container.scrollLeft === maxScroll;
  }

  // -----------------------------------------------------------------------------------------------------
  isMapVisible: boolean = true;

  toggleMap() {
    this.isMapVisible = !this.isMapVisible;
  }

  locationUrl: string = '';

  openShareModal() {
    this.locationUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(this.item.location + ', ' + this.item.fullLocation)}`;

    // Open Bootstrap Modal
    const modalElement = document.getElementById('shareLocationModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.locationUrl).then(() => {
      this.toastr.success('Location link copied to clipboard!');
    });
  }

  // -----------------------------------------------------------------------------------------------------
  showMore: boolean = false;


  // -----------------------------------------------------------------------------------------------------

  @ViewChild('ticketContainer') ticketContainer!: ElementRef;

  canScrollLeftTicket: boolean = false;
  canScrollRightTicket: boolean = true;

  scrollLeftTicket() {
    this.ticketContainer.nativeElement.scrollBy({ left: -200, behavior: 'smooth' });
    setTimeout(() => this.checkScrollTicket(), 300);
  }

  scrollRightTicket() {
    this.ticketContainer.nativeElement.scrollBy({ left: 200, behavior: 'smooth' });
    setTimeout(() => this.checkScrollTicket(), 300);
  }

  checkScrollTicket() {
    const container = this.ticketContainer.nativeElement;
    this.canScrollLeftTicket = container.scrollLeft > 0;
    this.canScrollRightTicket = container.scrollLeft < container.scrollWidth - (container.clientWidth + 25);
    // Trigger change detection manually to prevent the ExpressionChangedAfterItHasBeenCheckedError
    this.cdr.detectChanges();
  }

  // -----------------------------------------------------------------------------------------------------
  showFullTerms: boolean = false;
  terms: string = `Here you would place the full terms and conditions of the event.
                     This could include rules about refunds, behavior, liability, and more.
                     Ensure that all critical details are covered.`;


  // -----------------------------------------------------------------------------------------------------

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
    // Trigger change detection manually to prevent the ExpressionChangedAfterItHasBeenCheckedError
    this.cdr.detectChanges();
  }


  // -----------------------------------------------------------------------------------------------------
  @ViewChild('castContainer') castContainer!: ElementRef;


  canScrollLeftCast: boolean = false;
  canScrollRightCast: boolean = true;

  scrollLeftCast() {
    this.castContainer.nativeElement.scrollBy({ left: -200, behavior: 'smooth' });
    setTimeout(() => this.checkScrollCast(), 300);
  }

  scrollRightCast() {
    this.castContainer.nativeElement.scrollBy({ left: 200, behavior: 'smooth' });
    setTimeout(() => this.checkScrollCast(), 300);
  }

  checkScrollCast() {
    const container = this.castContainer.nativeElement;
    this.canScrollLeftCast = container.scrollLeft > 0;
    this.canScrollRightCast = container.scrollLeft < container.scrollWidth - (container.clientWidth + 25);
    // Trigger change detection manually to prevent the ExpressionChangedAfterItHasBeenCheckedError
    this.cdr.detectChanges();
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
