import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { LeafletMapComponent } from "../../leaflet-map/leaflet-map.component";

declare var bootstrap: any; // Required for Bootstrap modal handling

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
      description: "It's not going to win Nobel prizes or Pulitzers, but it will keep you entertained for two and a half hours.It's not going to win Nobel prizes or Pulitzers, but it will keep you entertained for two and a half hours.It's not going to win Nobel prizes or Pulitzers, but it will keep you entertained for two and a half hours.It's not going to win Nobel prizes or Pulitzers, but it will keep you entertained for two and a half hours.It's not going to win Nobel prizes or Pulitzers, but it will keep you entertained for two and a half hours.It's not going to win Nobel prizes or Pulitzers, but it will keep you entertained for two and a half hours.It's not going to win Nobel prizes or Pulitzers, but it will keep you entertained for two and a half hours.It's not going to win Nobel prizes or Pulitzers, but it will keep you entertained for two and a half hours.It's not going to win Nobel prizes or Pulitzers, but it will keep you entertained for two and a half hours.",
      isFavorite: true
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

  // -------------------------------------------------------------------------------------------

  @ViewChild('tabLinks') tabLinks!: ElementRef;

  sections!: NodeListOf<HTMLElement>;
  stopSection!: HTMLElement;

  constructor(private elRef: ElementRef) { }


  ngAfterViewInit() {
    this.sections = this.elRef.nativeElement.querySelectorAll('section');
    this.stopSection = this.elRef.nativeElement.querySelector('#stop-scroll')!;

    if (!this.tabLinks) {
      console.warn("tabLinks is not available in ngAfterViewInit");
      return;
    }

  }


  private lastScrollTop: number = 0;


  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!this.tabLinks || !this.tabLinks.nativeElement) return;

    let scrollPosition = window.scrollY + 100;
    const tabBar = this.tabLinks.nativeElement;
    const tabBarOffset = tabBar.offsetTop;
    let flag = true;

    // Detect Scroll Direction
    const scrollingDown = window.scrollY > this.lastScrollTop;

    // Stop scrolling effect at "YOU MIGHT ALSO LIKE"
    if (this.stopSection) {
      // console.log("--------------------------------------------");
      const stopPoint = this.stopSection.offsetTop - 150;

      if (scrollingDown && scrollPosition >= stopPoint) {
        // console.log("//////////////////////////////");
        flag = false;
        tabBar.classList.remove('sticky'); // Remove when reaching stop section
      }
      else if (!scrollingDown && scrollPosition < stopPoint) {
        flag = true;
        // console.log("*******************************************");
        tabBar.classList.add('sticky'); // Re-add when scrolling up above stop section
      }
    }

    // Keep tabBar sticky only when scrolling down and past the tabBar's original position
    if (scrollingDown && window.scrollY >= tabBarOffset && flag) {
      // console.log("#########################################################");
      tabBar.classList.add('sticky');
    } else if (!scrollingDown && window.scrollY <= tabBarOffset + 500) {
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

    this.lastScrollTop = window.scrollY; // Update last scroll position
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
      date: "July 7",
      rating: 5,
      image: "img/4.jpg",
      isFavorite: true

    },
    {
      title: "Phantom Of The Opera",
      venue: "Ahmanson Theater",
      date: "July 7",
      rating: 3.5,
      image: "img/10.jpg",
      isFavorite: false
    },
    {
      title: "Umphrey's McGee",
      venue: "Ahmanson Theater",
      date: "July 7",
      rating: 4,
      image: "img/11.jpg",
      isFavorite: true
    },
    {
      title: "PAUL SIMON",
      venue: "Ahmanson Theater",
      date: "July 7",
      rating: 5,
      image: "img/4.jpg",
      isFavorite: true

    },
    {
      title: "Umphrey's McGee",
      venue: "Ahmanson Theater",
      date: "July 7",
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

  // shareLocation() {
  //   const locationUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(this.item.fullLocation)}`;
  //   navigator.clipboard.writeText(locationUrl).then(() => {
  //     alert('Location link copied to clipboard!');
  //   });
  // }

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

}
