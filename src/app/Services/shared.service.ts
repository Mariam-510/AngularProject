import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DatePipe } from '@angular/common';
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

export interface ShowTicket {
  type: string;
  price: number;
  description: string;
}

export interface CheckoutTicket {
  type: string;
  quantity: number;
  price: number;
}

export interface Schedule {
  date: string;
  day: string;
  time: string
}

export interface ShowCategory {
  name: string;
  link: string;
}

export interface Review {
  user: string;
  rating: number;
  comment: string;
  date: string;
  title: string;
  location: string;
  category: string;

}

export interface CastMember {
  name: string;
  role: string;
  image: string;
}

export interface ShowCast {
  showId: number;
  cast: CastMember[];
}

//---------------------------------------------------------------------------------------------------
export interface match {
  id: number;
  venue: string;
  date: string;
  tournament: string;
  staduim?: string;
  matchNumber: number;
  time: string;
  GatesOpen: string;
  group: string;
  team1: string;
  team2: string;
  team1Logo: string;
  team2Logo: string;
  isFavorite: boolean;
  price: number;
  word?: string;
  adv?: string;
  category: string;
  location: string;
}

export interface categories {
  image: string;
  title: string;
  subtitle: string;
  badgeText: string;
  badgeClass: string;
}

export interface team {
  id: number;
  name: string;
  logo: string;
  description: string;
  coach: string;
  keyPlayers: string;
}

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  //---------------------------------------------------------------------------------------------------------
  //Shows
  shows: show[] =
    [
      //Dance
      {
        id: 1,
        title: 'Cinderella',
        category: 'Dance',
        imageSmall: './img/Shows/d1.jpg',
        imageLarge: './img/Shows/d11.jpg',
        rating: 3.5,
        description: `A mesmerizing performance blending ballet and storytelling, Cinderella brings the classic fairytale to life with stunning choreography and enchanting music. Witness the magic unfold as breathtaking costumes, dazzling stage effects, and a captivating musical score transport you into a world of wonder. With graceful movements and expressive artistry, the dancers narrate Cinderella’s journey from hardship to happiness, making it an unforgettable experience for audiences of all ages.`,
        date: 'Jun 12 - 2025',
        location: 'Cairo Opera House',
        fullLocation: 'Cairo, Egypt',
        price: 500,
        isFavorite: false,
        word: 'Enchanting!',
        reviews: 6,
        qoute: "Step into a world of wonder!",
        subQoute: "Experience a fairytale on stage."
      },
      {
        id: 2,
        title: 'Alvin Ailey American Dance',
        category: 'Dance',
        imageSmall: './img/Shows/d2.jpg',
        // imageSmall: 'img/s.png',
        imageLarge: './img/Shows/d22.jpg',
        rating: 3,
        description: `A breathtaking fusion of contemporary and African-American dance, this performance captivates with its raw emotion and powerful storytelling.`,
        date: 'May 31 - 2025',
        location: 'Cairo International Conference Center',
        fullLocation: 'Cairo, Egypt',
        price: 700,
        isFavorite: true,
        word: 'Spectacular!',
        reviews: 0,
        qoute: "Dance like never before!",
        subQoute: "Feel the rhythm, embrace the movement."
      },
      //Concerts
      {
        id: 3,
        title: 'A Tribute to the Beatles',
        category: 'Concerts',
        imageSmall: './img/Shows/c1.jpg',
        imageLarge: './img/Shows/c11.jpg',
        rating: 4,
        description: `Relive the magic of The Beatles with this incredible tribute, featuring iconic hits and an unforgettable live experience.`,
        date: 'Apr 2 - 2025',
        location: 'The American University in Cairo (AUC)', // this location is found
        fullLocation: 'New Cairo, Egypt',
        price: 600,
        isFavorite: false,
        word: 'Legendary!',
        reviews: 7,
        qoute: "A night of nostalgia!",
        subQoute: "Sing along to the greatest hits."
      },
      {
        id: 4,
        title: 'Dua Lipa',
        category: 'Concerts',
        imageSmall: './img/Shows/c2.jpg',
        imageLarge: './img/Shows/c22.jpg',
        rating: 3.5,
        description: `Pop sensation Dua Lipa takes the stage for an electrifying night of chart-topping hits and high-energy performances. Experience an unforgettable evening as she delivers her biggest hits with stunning vocals, dynamic choreography, and breathtaking stage effects. From the pulsating beats of "Don't Start Now" to the anthemic energy of "Levitating," this concert promises an immersive journey through her iconic discography. With dazzling lights, mesmerizing visuals, and an atmosphere filled with excitement, Dua Lipa's live show is a must-see event that will have the audience dancing all night long!`,
        date: 'Jul 13 - 2025',
        location: 'The American University in Cairo (AUC)', // this location is found
        fullLocation: 'New Cairo, Egypt',
        price: 850,
        isFavorite: true,
        word: 'Unmissable!',
        reviews: 10,
        qoute: "Feel the energy!",
        subQoute: "Dance the night away."
      },
      {
        id: 5,
        title: 'Katy Perry',
        category: 'Concerts',
        imageSmall: './img/Shows/c3.jpg',
        imageLarge: './img/Shows/c33.jpg',
        rating: 3,
        description: `A dazzling spectacle of music and performance, Katy Perry’s show is filled with hits, stunning visuals, and endless energy.`,
        date: 'Apr 29 - 2025',
        location: 'El Gouna Conference & Culture Center',
        fullLocation: 'El Gouna, Egypt',
        price: 800,
        isFavorite: true,
        word: 'Electrifying!',
        reviews: 8,
        qoute: "A pop spectacle!",
        subQoute: "Sing, dance, and celebrate music."
      },
      //Stand-Up Comedy
      {
        id: 6,
        title: 'Ricky Gervais',
        category: 'Stand-Up Comedy',
        imageSmall: './img/Shows/s1.jpg',
        imageLarge: './img/Shows/s11.jpg',
        rating: 3.5,
        description: `A night of sharp wit and fearless comedy, Ricky Gervais delivers his signature humor with bold and hilarious takes on life.`,
        date: 'Oct 4 - 2025',
        location: 'Bibliotheca Alexandrina',
        fullLocation: 'Alexandria, Egypt',
        price: 300,
        isFavorite: false,
        word: 'Hilarious!',
        reviews: 8,
        qoute: "Laughter guaranteed!",
        subQoute: "The best medicine is comedy."
      },
      //Theater
      {
        id: 7,
        title: 'Harry Potter and the Cursed Child',
        category: 'Theater',
        imageSmall: './img/Shows/t1.jpg',
        imageLarge: './img/Shows/t11.jpg',
        rating: 4,
        description: `Step into the magical world of Harry Potter with this spectacular theatrical experience, full of wonder and adventure. Witness spellbinding performances, breathtaking special effects, and a captivating storyline that brings the wizarding world to life like never before. From the bustling streets of Diagon Alley to the grandeur of Hogwarts Castle, immerse yourself in a world of magic, friendship, and bravery. With dazzling set designs, enchanting music, and unforgettable characters, this production is a must-see for fans of all ages. Prepare to be transported into a world where anything is possible, and the magic is real!`,
        date: 'Jun 22 - 2025',
        location: 'Cairo Opera House',
        fullLocation: 'Cairo, Egypt',
        price: 500,
        isFavorite: true,
        word: 'Magical!',
        reviews: 15,
        qoute: "An enchanting journey!",
        subQoute: "Experience the magic live."
      },
      {
        id: 8,
        title: 'Stereophonic',
        category: 'Theater',
        imageSmall: './img/Shows/t2.jpg',
        imageLarge: './img/Shows/t22.jpg',
        rating: 3,
        description: `A gripping drama that takes audiences behind the scenes of a band on the edge of fame, blending music and storytelling seamlessly.`,
        date: 'Dec 9 - 2025',
        location: 'Cairo International Conference Center',
        fullLocation: 'Cairo, Egypt',
        price: 300,
        isFavorite: true,
        word: 'Captivating!',
        reviews: 3,
        qoute: "Music meets drama!",
        subQoute: "A story that resonates."
      },
      {
        id: 9,
        title: 'Life of Pi',
        category: 'Theater',
        imageSmall: './img/Shows/t3.jpg',
        imageLarge: './img/Shows/t33.jpg',
        rating: 4.5,
        description: `An extraordinary theatrical adaptation of the beloved novel, bringing to life a tale of survival, imagination, and adventure.`,
        date: 'May 6 - 2025',
        location: 'El Gouna Conference & Culture Center',
        fullLocation: 'El Gouna, Egypt',
        price: 450,
        isFavorite: true,
        word: 'Mesmerizing!',
        reviews: 10,
        qoute: "A journey of survival!",
        subQoute: "Be part of the adventure."
      }
    ];


  addShow(show: any) {
    const newShow = {
      id: this.shows.length + 1,
      title: show.EventName,
      category: show.EventCategory,
      imageSmall: show.EventImage,
      imageLarge: show.EventImage,
      rating: 0,
      description: show.EventDescription,
      date: this.getFormattedDate(),
      location: show.EventLocation,
      fullLocation: show.EventLocation,
      price: 150,
      isFavorite: false,
      word: 'Unforgettable!',
      reviews: 0,
      qoute: 'Feel the magic come to life!',
      subQoute: 'A story that will touch your heart.'
    };

    this.shows.push(newShow);

    console.log(this.shows);

  }

  convertTo12HourFormat(time: string): string {
    const [hours, minutes] = time.split(':').map(Number);
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; // Convert 0 -> 12 for AM
    return `${formattedHours}:${minutes.toString().padStart(2, '0')} ${period}`;
  }

  addMatch(match: any) {
    const datePipe = new DatePipe('en-US');
    const formattedDate = datePipe.transform(match.matchDate, 'EEE dd MMM yyyy') || '';
    const newMatch = {

      id: this.matches.length + 1,
      image: "img/m4.jpg",

      date: formattedDate,
      tournament: match.league,
      staduim: "img/m4.jpg",
      matchNumber: 19,
      time: this.convertTo12HourFormat(match.matchTime),
      GatesOpen: match.matchTime,
      group: 'Group Two (Stage)',
      team1: match.homeTeam,
      team2: match.awayTeam,
      team1Logo: match.homeTeamLogo,
      team2Logo: match.awayTeamLogo,
      isFavorite: false,
      price: 500,
      word: "🔥 high",
      adv: "⏳ Limited Seats",
      category: '⚽ Football',
      location: match.location,
      venue: match.stadium + ', ' + match.location,
    }
    this.matches.push(newMatch);

    console.log(this.matches);
  }

  getFormattedDate() {
    const now = new Date();

    const options: Intl.DateTimeFormatOptions = { month: 'short', day: '2-digit', year: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options).replace(',', '');

    return formattedDate;
  }


  //---------------------------------------------------------------------------------------------------------
  // Define ShowTicket array using the interface
  generateTicketsFromPrice(startingPrice: number): ShowTicket[] {
    // Create an array of ticket types with corresponding descriptions
    const ticketDetails = [
      { type: 'Economy', description: 'Basic seating with a decent view.' },
      { type: 'Regular', description: 'Standard seating with a better view.' },
      { type: 'Premium', description: 'Upgraded seating with more comfort.' },
      { type: 'VIP', description: 'Prime seating with perks like drinks/snacks.' },
      { type: 'Backstage Pass', description: 'Access to backstage + premium seating.' }
    ];

    // Generate ticket objects with increasing prices
    const tickets = ticketDetails.map((ticket, index) => ({
      type: ticket.type,
      price: startingPrice + (index * 50), // Increase by 50 for each subsequent ticket
      description: ticket.description
    }));

    // Sort tickets by price in descending order (high to low)
    return tickets.sort((a, b) => b.price - a.price);
  }

  //---------------------------------------------------------------------------------------------------------
  // Function to convert showDate (e.g., "Jun 12 - 2025") into a Date object
  private parseShowDate(showDate: string): Date {
    const [month, day, year] = showDate.replace(' - ', ' ').split(' ');
    return new Date(`${month} ${day}, ${year}`);
  }

  // Function to generate a schedule for 5 days after the given show date
  generateSchedule(showDate: string): { date: string; day: string; time: string }[] {
    const schedule: Schedule[] = [];
    const baseDate = this.parseShowDate(showDate);

    for (let i = 1; i <= 6; i++) {
      const newDate = new Date(baseDate);
      newDate.setDate(baseDate.getDate() + i);

      // Generate a random start time between 5:00 PM and 9:00 PM
      const startHour = Math.floor(Math.random() * 5) + 17; // 17 to 21 (5 PM to 9 PM)
      const startMinute = Math.floor(Math.random() * 60);

      // Set start time
      const startTime = new Date(newDate);
      startTime.setHours(startHour, startMinute, 0);

      // Set end time (2 hours after start time)
      const endTime = new Date(startTime);
      endTime.setHours(startTime.getHours() + 2);

      // Format the output
      schedule.push({
        date: newDate.toISOString().split('T')[0], // Format YYYY-MM-DD
        day: newDate.toLocaleDateString('en-US', { weekday: 'long' }), // Get day name
        time: `${startTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })} - ${endTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}`
      });
    }

    return schedule;
  }

  //---------------------------------------------------------------------------------------------------------
  showCategories: ShowCategory[] = [
    { name: 'All', link: '' },
    { name: 'Concerts', link: 'concerts' },
    { name: 'Theater', link: 'theater' },
    { name: 'Dance', link: 'dance' },
    { name: 'Stand-Up Comedy', link: 'standUpComedy' },
    { name: 'Other', link: 'other' }
  ];

  //---------------------------------------------------------------------------------------------------------
  // Function to generate a review date incrementing by 1 day after each review
  generateReviewDate(showDate: string): string {
    // Parse the show date to a Date object using the given format (e.g., "Jun 22 - 2025")
    const dateParts = showDate.split(' - ');
    const [monthStr, day] = dateParts[0].split(' ');
    const year = dateParts[1];

    // Map month name to a month index
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const monthIndex = monthNames.indexOf(monthStr);

    const showDateObj = new Date(Number(year), monthIndex, Number(day)); // Set the date using the parsed values
    showDateObj.setDate(showDateObj.getDate() + 1); // Increment the day by 1 for each subsequent review

    // Format the new date back to "Jun 23 - 2025"
    const newMonth = monthNames[showDateObj.getMonth()];
    const newDay = String(showDateObj.getDate()).padStart(2, '0');
    const newYear = showDateObj.getFullYear();

    return `${newMonth} ${newDay} - ${newYear}`;
  }

  // Function to generate random reviews based on a show date
  generateReviewsForShow(showDate: string, numberOfReviews: number): any[] {
    const reviews: Review[] = [];
    const comments = [
      'Amazing service! Highly recommended.',
      'Great experience, but there’s room for improvement.',
      'Fantastic! Everything was perfect.',
      'It was good, but not exceptional.',
      'Really enjoyed it! Will come back again.',
      'Not as expected, but decent.',
      'A wonderful experience, would definitely come again!'
    ];

    // English names list
    const englishNames = ['Ahmed', 'Sara', 'Mariam', 'Omar', 'Nour', 'Ali', 'Fatima', 'Khaled', 'Jamila', 'Mohamed'];

    // Generate reviews with random ratings and comments
    for (let i = 0; i < numberOfReviews; i++) {
      const rating = (Math.random() * 2 + 3).toFixed(1); // Random rating between 3.0 and 5.0
      const comment = comments[Math.floor(Math.random() * comments.length)]; // Random comment
      const reviewDate = this.generateReviewDate(showDate); // Generate review date incrementally

      // Choose a random English name from the list
      const userName = englishNames[Math.floor(Math.random() * englishNames.length)];

      reviews.push({
        user: userName,
        rating: parseFloat(rating),
        comment: comment,
        date: reviewDate,
        title: '',
        location: '',
        category: ''
      });

      // Update the showDate for the next review to be the next day
      showDate = reviewDate;
    }

    return reviews;
  }


  //---------------------------------------------------------------------------------------------------------

  cast: ShowCast[] = [
    // Dance - Cinderella (showId: 1)
    {
      showId: 1,
      cast: [
        {
          name: 'Sophia Lee',
          role: 'Cinderella',
          image: 'https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/lmSSHC6nC6IcQLD4RGigdC3KoBQ=/500x500/cultureampcom/production/b94/a47/9ea/b94a479eaece4ef09bda0e39/Sophia-Lee.jpeg'
        },
        {
          name: 'Olivia Watson',
          role: 'Fairy Godmother',
          image: 'https://media.licdn.com/dms/image/v2/D5603AQGRkHgI98wrFg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1698712378207?e=2147483647&v=beta&t=dYxTlLNmXutmHL1ZdQFyLSofv_4HaWz_EbQA10msTiE'
        }
      ]
    },
    // Dance - Alvin Ailey (showId: 2)
    {
      showId: 2,
      cast: [
        {
          name: 'Samuel Thompson',
          role: 'Lead Dancer',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkY6Yz1bndVqOI2-0i3vfm2rUei584Hm8kTw&s'
        },
        {
          name: 'Tina Garcia',
          role: 'Choreographer',
          image: 'https://www.gmlaw.com/wp-content/uploads/2016/09/Tina-Garcia-Landing.jpeg'
        }
      ]
    },
    // Concerts - Beatles Tribute (showId: 3)
    {
      showId: 3,
      cast: [
        {
          name: 'John Carter',
          role: 'John Lennon Tribute',
          image: 'https://louderthanwar.com/wp-content/uploads/2022/03/Jcart.jpg'
        },
        {
          name: 'Paul Adams',
          role: 'Paul McCartney Tribute',
          image: 'https://i.ytimg.com/vi/yiSw9tF1syA/sddefault.jpg'
        },
        {
          name: 'George Smith',
          role: 'George Harrison Tribute',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyNa9dLo-kJiBAu74_WXR_oXweZFEP4Sv5Hg&s'
        },
        {
          name: 'Ringo Bell',
          role: 'Ringo Starr Tribute',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkURsBau0sxjJ3M2NMiEZCtEaSy7y_G4Oldg&s'
        }
      ]
    },
    // Concerts - Dua Lipa (showId: 4)
    {
      showId: 4,
      cast: [
        {
          name: 'Dua Lipa',
          role: 'Dua Lipa',
          image: 'https://i.scdn.co/image/ab67616d0000b273838698485511bd9108fadadc'
        },
        {
          name: 'Tommy Perez',
          role: 'Backup Dancer',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAz2QKodvHb0m5iE8zcoCgYah3GZGEj155XQ&s'
        }
      ]
    },
    // Concerts - Katy Perry (showId: 5)
    {
      showId: 5,
      cast: [
        {
          name: 'Katy Perry',
          role: 'Katy Perry',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-5InQIZ6n4bjmkSlOW9F4afnHpNk3gVHKRA&s'
        },
        {
          name: 'David Green',
          role: 'Lead Guitarist',
          image: 'https://americanahighways.org/wp-content/uploads/2024/06/Ryan-David-Green_Press-Photo-5_By-Taylor-Noel-Photography-e1711573236611.jpeg'
        }
      ]
    },
    // Comedy - Ricky Gervais (showId: 6)
    {
      showId: 6,
      cast: [
        {
          name: 'Ricky Gervais',
          role: 'Comedian',
          image: 'https://variety.com/wp-content/uploads/2023/12/GettyImages-1433370505-e1703205019114.jpg?w=1000&h=563&crop=1'
        }
      ]
    },
    // Theater - Harry Potter (showId: 7)
    {
      showId: 7,
      cast: [
        {
          name: 'Daniel Radcliffe',
          role: 'Harry Potter',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTjgAU1UitAQVkRffri-vK2Pid4lzgO7wpig&s'
        },
        {
          name: 'Emma Stone',
          role: 'Hermione Granger',
          image: 'https://pyxis.nymag.com/v1/imgs/546/20b/13e6835736d340862bd8788f0fd13b5b3f-26-emma-stone.rsquare.w400.jpg'
        },
        {
          name: 'Rupert Grint',
          role: 'Ron Weasley',
          image: 'https://www.usatoday.com/gcdn/presto/2019/08/15/USAT/802e6fbd-9905-4455-8e1d-52382df19bd5-XXX_Rupert_Grint_rd319.JPG?crop=2096,2096,x0,y0'
        }
      ]
    },
    // Theater - Stereophonic (showId: 8)
    {
      showId: 8,
      cast: [
        {
          name: 'Chris Martin',
          role: 'Lead Actor',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy7yJTdsuhySgOHgFBjbPaCb-_fj6e7fJvjw9_dY0-ts_FZmOd1p7lNOGpj57iMvjJteY&usqp=CAU'
        },
        {
          name: 'Rachel Adams',
          role: 'Supporting Actor',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnmriUofHbn4k48Z7t1ogevIcOVjsyhcglAVjb6i4Rybgm_tPx49T6jhZ0PK9XdU4NpJM&usqp=CAU'
        }
      ]
    },
    // Theater - Life of Pi (showId: 9)
    {
      showId: 9,
      cast: [
        {
          name: 'Dev Patel',
          role: 'Pi Patel',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9svlB15vQ7KvPvCzPBwKSaqpQNSUhEfd2pg&s'
        },
        {
          name: 'Irrfan Khan',
          role: 'Richard Parker',
          image: 'https://img.jagranjosh.com/imported/images/E/GK/Irrfan_khan_passes_away.webp'
        }
      ]
    }
  ];

  //---------------------------------------------------------------------------------------------------------
  //MATCHES

  matches: match[] = [
    {
      id: 1,
      venue: 'Cairo International Stadium, Cairo', // location
      date: 'Fri 28 Mar 2025',
      tournament: 'World Cup Qualifiers 2025', //title
      staduim: './img/cairo staduim.jpg',
      matchNumber: 5,
      time: '08:30 PM', //Kickoff
      GatesOpen: '05:00 PM',
      group: 'African Qualifiers Group B', //Group
      team1: 'Egypt',
      team2: 'Algeria',
      team1Logo: './img/egypt.svg',
      team2Logo: './img/algeria.svg',
      isFavorite: true,
      price: 1100,
      word: "🔥 high",
      adv: "⏳ Limited Seats",
      category: '⚽ Football',
      location: 'Cairo, Egypt'
    },

    {
      id: 2,
      venue: 'Petro Sport Stadium, Cairo',
      date: 'Mon 24 Mar 2025',
      tournament: 'Egypt Cup 2025',
      matchNumber: 19,
      time: '07:30 PM',
      GatesOpen: '3:00 PM',
      group: 'Quarter Finals',
      staduim: './img/s1.jpg',
      team2: 'ZED FC',
      team1: 'ENPPI SC',
      team1Logo: './img/ENPPI.png',
      team2Logo: './img/ZED.png',
      isFavorite: true,
      price: 290, // Add price
      word: "🔥 high",
      adv: "⏳ Limited Seats",
      category: '⚽ Football',
      location: 'Cairo, Egypt'
    },

    {
      id: 3,
      venue: 'Khaled Bichara Stadium, Gouna',
      date: 'Sun 23 Mar 2025',
      tournament: 'EPL 2024/2025',
      matchNumber: 18,
      time: '08:00 PM',
      GatesOpen: '05:00 PM',
      group: 'Group Two (Stage)',
      team1: 'El Gouna SC',
      team2: 'Smouha SC',
      staduim: './img/s3.jpg',
      team1Logo: './img/ElGouna.png',
      team2Logo: './img/Smouha.png',
      isFavorite: false,
      price: 250, // Add price
      word: "🔥 high",
      adv: "⏳ Limited Seats",
      category: '⚽ Football',
      location: 'Gouna, Egypt'
    },

    {
      id: 4,
      venue: 'Alexandria Stadium, Alexandria',
      date: 'Tue 25 Mar 2025',
      tournament: 'Derby Match',
      matchNumber: 20,
      time: '06:45 PM',
      GatesOpen: '03:00 PM',
      group: 'Quarter Finals',
      team1: 'Al Ittihad Alexandria SC',
      team2: 'Smouha SC',
      team1Logo: './img/AlIttihad.png',
      team2Logo: './img/Smouha.png',
      isFavorite: true,
      price: 500, // Add price
      word: "🔥 high",
      adv: "⏳ Limited Seats",
      category: '⚽ Football',
      staduim: './img/m3.jpg',
      location: 'Alexandria, Egypt'
    },

    {
      id: 5,
      staduim: './img/cairo3.jpg',
      venue: 'Cairo International Stadium, Cairo', // Corrected venue
      date: 'Sat 22 Mar 2025',
      tournament: 'Championship League',
      matchNumber: 17,
      time: '09:30 PM',
      GatesOpen: '06:00 PM',
      group: 'Group Two (Stage)',
      team1: 'Al Ahly SC',
      team2: 'Pyramids FC',
      team1Logo: './img/Al Ahly.svg',
      team2Logo: './img/Pyramids.png',
      isFavorite: true,
      price: 500, // Add price
      word: "🔥 high",
      adv: "⏳ Limited Seats",
      category: '⚽ Football',
      location: 'Cairo, Egypt'
    },

    {
      id: 6,
      staduim: './img/m4.jpg',
      venue: 'Borg El Arab Stadium, Alexandria',
      date: 'Tue 15 Apr 2025',
      tournament: 'World Cup Qualifiers 2025',
      matchNumber: 7,
      time: '09:00 PM',
      GatesOpen: '06:00 PM',
      group: 'African Qualifiers Group B',
      team1: 'Egypt',
      team2: 'Nigeria',
      team1Logo: './img/egypt.svg',
      team2Logo: './img/nigeria.svg',
      isFavorite: true,
      price: 1200,
      word: "🔥 high",
      adv: "⏳ Limited Seats",
      category: '⚽ Football',
      location: 'Alexandria, Egypt'
    },

    {
      id: 7,
      venue: 'Cairo International Stadium, Cairo',
      date: 'Mon 24 Mar 2025',
      tournament: 'EPL 2024/2025',
      matchNumber: 19,
      time: '07:30 PM',
      GatesOpen: '06:00 PM',
      group: 'Group One (Stage)',
      team1: 'Zamalek SC',
      team2: 'Ismaily SC',
      staduim: './img/cairo staduim.jpg',
      team1Logo: './img/zamalekv2.png',
      team2Logo: './img/ismaily.png',
      isFavorite: false,
      price: 300, // Add price
      word: "🔥 high",
      adv: "⏳ Limited Seats",
      category: '⚽ Football',
      location: 'Cairo, Egypt'
    },

    {
      id: 8,
      staduim: './img/m2.jpg',
      venue: 'Suez Canal Stadium, Ismailia',
      date: 'Sat 22 Mar 2025',
      tournament: 'EPL 2024/2025',
      matchNumber: 17,
      time: '09:30 PM',
      GatesOpen: '06:00 PM',
      group: 'Group Two (Stage)',
      team1: 'Ismaily SC',
      team2: 'Ghazl Elmahala FC',
      team1Logo: './img/ismaily.png',
      team2Logo: './img/mahalla.png',
      isFavorite: false,
      price: 300, // Add price
      word: "🔥 high",
      adv: "⏳ Limited Seats",
      category: '⚽ Football',
      location: 'Ismailia, Egypt'
    },

    {
      id: 9,
      staduim: './img/m1.jpg',
      venue: 'Suez Canal Stadium, Ismailia',
      date: 'Sat 22 Mar 2025',
      tournament: 'EPL 2024/2025',
      matchNumber: 17,
      time: '09:30 PM',
      GatesOpen: '06:00 PM',
      group: 'Group Two (Stage)',
      team1: 'Ceramica Cleopatra FC',
      team2: 'Zamalek SC',
      team1Logo: './img/Cleopatra.png',
      team2Logo: './img/zamalekv2.png',
      isFavorite: false,
      price: 100,
      word: "🔥 high",
      adv: "⏳ Limited Seats",
      category: '⚽ Football',
      location: 'Ismailia, Egypt'
    },

    {
      id: 10,
      staduim: './img/cairo4.jpg',
      venue: 'Cairo International Stadium, Cairo',
      date: 'Tue 1 Apr 2025',
      tournament: 'Derby Match',
      matchNumber: 22,
      time: '09:00 PM',
      GatesOpen: '06:00 PM',
      group: 'Main Stage',
      team1: 'Al Ahly SC',
      team2: 'Zamalek SC',
      team1Logo: './img/Al Ahly.svg',
      team2Logo: './img/zamalekv2.png',
      isFavorite: true,
      price: 900,
      word: "🔥 high",
      adv: "⏳ Limited Seats",
      category: '⚽ Football',
      location: 'Cairo, Egypt'
    }
  ];

  categories: categories[] = [
    {
      image: './img/cairo3.jpg',
      title: 'All Tournaments',
      subtitle: 'View All Matches Across Competitions',
      badgeText: 'All Matches',
      badgeClass: 'bg-dark'
    },

    {
      image: './img/EPL_1.jpg',
      title: 'EPL 2024/2025',
      subtitle: 'Egypt’s Top-Tier Football League',
      badgeText: 'Home Matches',
      badgeClass: 'bg-primary'
    },

    {
      image: './img/ECUP.gif',
      title: 'Egypt Cup 2025',
      subtitle: 'Cairo Stadium Matches',
      badgeText: 'Quarterfinals',
      badgeClass: 'bg-success'
    },

    {
      image: './img/national.jpg',
      title: 'World Cup Qualifiers 2025',
      subtitle: 'Pharaohs',
      badgeText: 'Cairo Venue',
      badgeClass: 'bg-warning'
    },

    {
      image: './img/derby.jpg',
      title: 'Derby Match',
      subtitle: 'Egypt’s Biggest Rivalries',
      badgeText: 'Cairo Derby',
      badgeClass: 'bg-danger'
    },
  ];


  //---------------------------------------------------------------------------------------------------------

  teams: team[] = [
    {
      id: 1,
      name: 'Egypt',
      logo: './img/egypt.svg',
      description: 'One of the most successful and storied teams in African football history. The team has won the Africa Cup of Nations (AFCON) a record seven times',
      coach: 'Hossam Hassan',
      keyPlayers: 'Mohamed Salah, Omar Marmoush, Zizo'
    },
    {
      id: 2,
      name: 'Algeria',
      logo: './img/algeria.svg',
      description: 'One of the most prominent teams in African football. They have won the Africa Cup of Nations (AFCON) twice, in 1990 and 2019.',
      coach: 'Vladimir Petković',
      keyPlayers: 'Riyad Mahrez, Ismaël Bennacer, Saïd Benrahma'
    },
    {
      id: 3,
      name: 'ENPPI SC',
      logo: './img/ENPPI.png',
      description: 'Professional football club based in Cairo, Egypt. Founded in 1980',
      coach: 'Sayed Yassin',
      keyPlayers: 'Reda El Sayed, Ahmed Kalosha, Ahmed El Agouz'
    },

    {
      id: 4,
      name: 'ZED FC',
      logo: './img/ZED.png',
      description: 'Relatively new football club based in Cairo, Egypt. Founded in 2020, ZED FC is part of the ZED Group, a diversified company with interests in real estate, entertainment, and sports.',
      coach: 'Magdy Abdel Aaty',
      keyPlayers: 'Amr Hossam, Ali Lotfi, Amar Hamdy'
    },

    {
      id: 5,
      name: 'El Gouna SC',
      logo: './img/ElGouna.png',
      description: 'Professional football club based in the coastal city of El Gouna, Egypt. The club was founded in 2003 and quickly rose to prominence in the Egyptian football scene.',
      coach: 'Reda Shehata',
      keyPlayers: 'Ahmed Hamed Shousha, Amr Shaaban, Mohamed Alaa'
    },

    {
      id: 6,
      name: 'Smouha SC',
      logo: './img/Smouha.png',
      description: 'Professional football club based in Alexandria, Egypt. Founded in 1949, the club is named after the Smouha district in Alexandria',
      coach: 'Ahmed Sami',
      keyPlayers: 'El-Hani Soliman, Barakat Haggag, Dokou Dodo'
    },

    {
      id: 7,
      name: 'Al Ittihad Alexandria SC',
      logo: './img/AlIttihad.png',
      description: 'Professional football club based in Alexandria, Egypt. Founded in 1914, it is one of the oldest and most respected football clubs in Egypt.',
      coach: 'Nikodimos Papavasiliou',
      keyPlayers: 'El Mahdi Soliman, Marwan Daoud, Karim El Deeb'
    },

    {
      id: 8,
      name: 'Al Ahly SC',
      logo: './img/Al Ahly.svg',
      description: 'The most successful club in Africa, based in Cairo. Record holder of CAF Champions League titles.',
      coach: 'Marcelo Koller',
      keyPlayers: 'Mohamed El Shenawy, Percy Tau, Ahmed Abdelkader'
    },

    {
      id: 9,
      name: 'Pyramids FC',
      logo: './img/Pyramids.png',
      description: 'Ambitious Cairo-based club known for their attacking style of play and modern facilities.',
      coach: 'Jamie Pacheco',
      keyPlayers: 'Abdallah El Said, Fiston Mayele, Mohamed Chibi'
    },

    {
      id: 10,
      name: 'Ismaily SC',
      logo: './img/Ismailyy.png',
      description: 'Professional football club based in Ismailia, Egypt. Founded in 1924, Ismaily is one of the oldest and most successful clubs in Egyptian football.',
      coach: 'Shawky Gharib',
      keyPlayers: 'Ahmed El Sheikh, Kamal El Sayed, Eric Traoré'
    },

    {
      id: 11,
      name: 'Ghazl Elmahala FC',
      logo: './img/mahalla.png',
      description: 'Professional football club based in Mahalla El Kubra, Egypt. Founded in 1936, the club has a rich history and is one of the well-known teams in Egyptian football.',
      coach: 'Khaled Eid',
      keyPlayers: 'Amr El Gazzar, Mohamed Gaber, Bassam Walid'
    },

    {
      id: 12,
      name: 'Ceramica Cleopatra FC',
      logo: './img/Cleopatra.png',
      description: 'Relatively new football club based in 10th of Ramadan City, Egypt. The club was founded in 2006 and is part of the Ceramica Cleopatra Group, a prominent Egyptian ceramics company.',
      coach: 'Ayman El Ramadi',
      keyPlayers: 'Ali El Gabry, Nour Alaa, Marwan Otaka'
    },

    {
      id: 13,
      name: 'Zamalek SC',
      logo: './img/Zamalek.svg',
      description: 'One of the most successful and prestigious football clubs in Egypt and Africa. Based in Cairo, the club was founded in 1911 and has a rich history in both domestic and international football.',
      coach: 'José Peseiro',
      keyPlayers: 'Zizo, Mahmoud El Wensh, Ahmed Fatouh'
    },
    {
      id: 14,
      name: 'Nigeria',
      logo: './img/nigeria.svg',
      description: 'A dominant force in African football, Nigeria has won the Africa Cup of Nations (AFCON) three times and is known for its talented players and attacking style.',
      coach: 'José Peseiro',
      keyPlayers: 'Victor Osimhen, Kelechi Iheanacho, Moses Simon'
    }

  ];

  checkoutTicket: CheckoutTicket[] = [
    {
      type: 'VIP',
      quantity: 1,
      price: 950
    },
    {
      type: 'CAT 1',
      quantity: 1,
      price: 800
    },
    {
      type: 'CAT 2',
      quantity: 1,
      price: 650
    },
    {
      type: 'CAT 3',
      quantity: 1,
      price: 500
    }
  ];

  scheduleDetails: Schedule =
    {
      date: '2025-06-13',
      day: 'Friday',
      time: '07:30 PM - 09:30 PM'
    };

  // Define ShowTicket array using the interface
  generateMatchTicketsFromPrice(startingPrice: number): ShowTicket[] {
    // Create an array of ticket types with corresponding descriptions
    const ticketDetails = [
      { type: 'CAT 3', description: 'Standard seating' },
      { type: 'CAT 2', description: 'Mid-field seats' },
      { type: 'CAT 1', description: 'Premium sideline seats' },
      { type: 'VIP', description: 'Premium seats with VIP facilities' }
    ];

    // Generate ticket objects with increasing prices
    const tickets = ticketDetails.map((ticket, index) => ({
      type: ticket.type,
      price: startingPrice + (index * 150), // Increase by 150 for each subsequent ticket
      description: ticket.description
    }));

    // Sort tickets by price in descending order (high to low)
    return tickets.sort((a, b) => b.price - a.price);
  }

  generateDateMatch(matchDate: string): string {

    const date = new Date(matchDate);

    // Get the short month name, day, and year
    const month = date.toLocaleString('en-US', { month: 'short' });
    const day = date.getDate();
    const year = date.getFullYear();

    // Format as "Month Day - Year"
    return `${month} ${day} - ${year}`;
  }

  generateReviewsForMatch(matchDate: string, numberOfReviews: number): any[] {
    const reviews: Review[] = [];
    const comments = [
      'Seamless booking experience, got my tickets instantly!',
      'Easy and fast process, but the seating options could be clearer.',
      'Great service! No issues with ticket confirmation.',
      'Had trouble with payment, but support was helpful.',
      'Tickets were available at a great price, highly recommended!',
      'Smooth process, but wish there were more payment options.',
      'Quick and hassle-free booking. Would use again!',
      'Got my tickets without any issues. Great experience!',
      'The interface was simple and easy to navigate.',
      'Had to wait a bit for confirmation, but overall a good service.'
    ];
    // English names list
    const englishNames = ['Ahmed', 'Sara', 'Mariam', 'Omar', 'Nour', 'Ali', 'Fatima', 'Khaled', 'Jamila', 'Mohamed'];

    matchDate = this.generateDateMatch(matchDate);
    console.log(matchDate);

    // Generate reviews with random ratings and comments
    for (let i = 0; i < numberOfReviews; i++) {
      const rating = (Math.random() * 2 + 3).toFixed(1); // Random rating between 3.0 and 5.0
      const comment = comments[Math.floor(Math.random() * comments.length)]; // Random comment
      const reviewDate = this.generateReviewDate(matchDate); // Generate review date incrementally

      // Choose a random English name from the list
      const userName = englishNames[Math.floor(Math.random() * englishNames.length)];

      reviews.push({
        user: userName,
        rating: parseFloat(rating),
        comment: comment,
        date: reviewDate,
        title: '',
        location: '',
        category: ''
      });

      // Update the showDate for the next review to be the next day
      matchDate = reviewDate;
    }

    return reviews;
  }

  //---------------------------------------------------------------------------------------------------------

  reviews: Review[] = [
    // Shows Reviews
    {
      user: "Mariam Ashraf",
      rating: 3,
      comment: "A good blend of music and drama, but a bit slow at times.",
      date: "2025-03-26",
      title: "Stereophonic - Theater",
      location: "Cairo International Conference Center",
      category: "Shows",
    },
    // Sports Reviews
    {
      user: "Mariam Ashraf",
      rating: 4,
      comment: "A thrilling quarter-final match. The energy in the stadium was unmatched!",
      date: "2025-03-15",
      title: "ENPPI SC vs ZED FC - Egypt Cup 2025",
      location: "Petro Sport Stadium",
      category: "Sports",
    },
    // Shows Reviews
    {
      user: "Mariam Ashraf",
      rating: 3.5,
      comment: "A beautiful ballet performance with a magical twist.",
      date: "2025-03-16",
      title: "Cinderella - Dance",
      location: "Cairo Opera House",
      category: "Shows",
    },
    // Sports Reviews
    {
      user: "Mariam Ashraf",
      rating: 5,
      comment: "The iconic Cairo Derby, absolutely unforgettable!",
      date: "2025-04-07",
      title: "Al Ahly SC vs Zamalek SC - Derby Match",
      location: "Cairo International Stadium",
      category: "Sports",
    },
    // Shows Reviews
    {
      user: "Mariam Ashraf",
      rating: 4.5,
      comment: "An unforgettable magical experience for all Harry Potter fans.",
      date: "2025-03-24",
      title: "Harry Potter and the Cursed Child - Theater",
      location: "Cairo Opera House",
      category: "Shows",
    },
    // Shows Reviews
    {
      user: "Mariam Ashraf",
      rating: 4,
      comment: "Hilarious show with a lot of edgy humor.",
      date: "2025-04-5",
      title: "Ricky Gervais - Stand-Up Comedy",
      location: "Bibliotheca Alexandrina",
      category: "Shows",
    },
    // Sports Reviews
    {
      user: "Mariam Ashraf",
      rating: 4,
      comment: "Great match with some excellent goals.",
      date: "2025-04-04",
      title: "Ceramica Cleopatra FC vs Zamalek SC - EPL 2024/2025",
      location: "Suez Canal Stadium",
      category: "Sports",
    },
    // Shows Reviews
    {
      user: "Mariam Ashraf",
      rating: 4,
      comment: "A nostalgic tribute that captures the magic of The Beatles!",
      date: "2025-03-14",
      title: "A Tribute to the Beatles - Concert",
      location: "The American University in Cairo (AUC)",
      category: "Shows",
    },
    // Sports Reviews
    {
      user: "Mariam Ashraf",
      rating: 3.5,
      comment: "A nice match with some good moments, but not a standout.",
      date: "2025-04-02",
      title: "Ismaily SC vs Ghazl Elmahala FC - EPL 2024/2025",
      location: "Ismailia Stadium",
      category: "Sports",
    },
    // Shows Reviews
    {
      user: "Mariam Ashraf",
      rating: 3.5,
      comment: "An impressive show, but not everyone will connect with the style.",
      date: "2025-04-03",
      title: "Alvin Ailey American Dance - Dance",
      location: "Cairo Opera House",
      category: "Shows",
    },
    // Sports Reviews
    {
      user: "Mariam Ashraf",
      rating: 3,
      comment: "A decent match, but a lot more can be expected from these two teams.",
      date: "2025-03-30",
      title: "Zamalek SC vs Ismaily SC - EPL 2024/2025",
      location: "Cairo International Stadium",
      category: "Sports",
    },
    // Shows Reviews
    {
      user: "Mariam Ashraf",
      rating: 4.5,
      comment: "A high-energy concert that was truly unforgettable.",
      date: "2025-04-3",
      title: "Dua Lipa - Concert",
      location: "The American University in Cairo (AUC)",
      category: "Shows",
    },
    // Sports Reviews
    {
      user: "Mariam Ashraf",
      rating: 3.5,
      comment: "Decent match, but the crowd could have been more lively.",
      date: "2025-03-18",
      title: "El Gouna SC vs Smouha SC - EPL 2024/2025",
      location: "El Gouna Stadium",
      category: "Sports",
    },
    // Shows Reviews
    {
      user: "Mariam Ashraf",
      rating: 3,
      comment: "A dazzling show, but some performances felt a bit repetitive.",
      date: "2025-05-20",
      title: "Katy Perry - Concert",
      location: "El Gouna Conference & Culture Center",
      category: "Shows",
    }
  ];



}
