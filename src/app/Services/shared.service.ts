import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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

export interface CheckoutTicket{
  type: string;
  quantity: number;
  price: number;
}

export interface Schedule {
  date: string;
  day: string;
  time: string
}

//---------------------------------------------------------------------------------------------------
export interface match {
  id: number;
  image: string;
  venue: string;
  date: string;
  tournament: string;
  staduim?: string;
  matchNumber: number;
  time: string;
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

export interface eventItem {
  id: number;
  location: string;
  Group: string;
  title: string;
  date: string;
  Kickoff: string;
  GatesOpen: string;
  price: number;
  description: string;
  isFavorite: boolean;
  word: string;
  adv: string;
  category: string;
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
        imageSmall: 'img/Shows/d1.jpg',
        imageLarge: 'img/Shows/d11.jpg',
        rating: 3.5,
        description: `A mesmerizing performance blending ballet and storytelling, Cinderella brings the classic fairytale to life with stunning choreography and enchanting music.`,
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
        imageSmall: 'img/Shows/d2.jpg',
        imageLarge: 'img/Shows/d22.jpg',
        rating: 3,
        description: `A breathtaking fusion of contemporary and African-American dance, this performance captivates with its raw emotion and powerful storytelling.`,
        date: 'Apr 2 - 2025',
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
        imageSmall: 'img/Shows/c1.jpg',
        imageLarge: 'img/Shows/c11.jpg',
        rating: 4,
        description: `Relive the magic of The Beatles with this incredible tribute, featuring iconic hits and an unforgettable live experience.`,
        date: 'Oct 4 - 2025',
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
        imageSmall: 'img/Shows/c2.jpg',
        imageLarge: 'img/Shows/c22.jpg',
        rating: 3.5,
        description: `Pop sensation Dua Lipa takes the stage for an electrifying night of chart-topping hits and high-energy performances.`,
        date: 'Apr 29 - 2025',
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
        imageSmall: 'img/Shows/c3.jpg',
        imageLarge: 'img/Shows/c33.jpg',
        rating: 3,
        description: `A dazzling spectacle of music and performance, Katy Perry’s show is filled with hits, stunning visuals, and endless energy.`,
        date: 'Jul 13 - 2025',
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
        imageSmall: 'img/Shows/s1.jpg',
        imageLarge: 'img/Shows/s11.jpg',
        rating: 3.5,
        description: `A night of sharp wit and fearless comedy, Ricky Gervais delivers his signature humor with bold and hilarious takes on life.`,
        date: 'May 31 - 2025',
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
      },
      {
        id: 8,
        title: 'Stereophonic',
        category: 'Theater',
        imageSmall: 'img/Shows/t2.jpg',
        imageLarge: 'img/Shows/t22.jpg',
        rating: 3,
        description: `A gripping drama that takes audiences behind the scenes of a band on the edge of fame, blending music and storytelling seamlessly.`,
        date: 'May 6 - 2025',
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
        imageSmall: 'img/Shows/t3.jpg',
        imageLarge: 'img/Shows/t33.jpg',
        rating: 4.5,
        description: `An extraordinary theatrical adaptation of the beloved novel, bringing to life a tale of survival, imagination, and adventure.`,
        date: 'Dec 9 - 2025',
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
    const reviews: any[] = [];
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
        date: reviewDate
      });

      // Update the showDate for the next review to be the next day
      showDate = reviewDate;
    }

    return reviews;
  }

  //---------------------------------------------------------------------------------------------------------

  cast = [
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
          name: 'Mark Jones',
          role: 'Prince Charming',
          image: 'https://source.unsplash.com/300x400/?prince,costume,man'
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
          image: 'https://source.unsplash.com/300x400/?beatles,singer,man'
        },
        {
          name: 'Paul Adams',
          role: 'Paul McCartney Tribute',
          image: 'https://source.unsplash.com/300x400/?bassist,man,musician'
        },
        {
          name: 'George Smith',
          role: 'George Harrison Tribute',
          image: 'https://source.unsplash.com/300x400/?guitarist,man,musician'
        },
        {
          name: 'Ringo Bell',
          role: 'Ringo Starr Tribute',
          image: 'https://source.unsplash.com/300x400/?drummer,man,musician'
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
          image: 'https://source.unsplash.com/300x400/?female,singer,popstar'
        },
        {
          name: 'Tommy Perez',
          role: 'Backup Dancer',
          image: 'https://source.unsplash.com/300x400/?dancer,man,performance'
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
          image: 'https://source.unsplash.com/300x400/?female,singer,colorful'
        },
        {
          name: 'David Green',
          role: 'Lead Guitarist',
          image: 'https://source.unsplash.com/300x400/?guitarist,rock,man'
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
          image: 'https://source.unsplash.com/300x400/?comedian,man,microphone'
        }
      ]
    },
    // Theater - Harry Potter (showId: 7)
    {
      showId: 7,
      cast: [
        {
          name: 'Emma Stone',
          role: 'Hermione Granger',
          image: 'https://source.unsplash.com/300x400/?actress,book,glasses'
        },
        {
          name: 'Daniel Radcliffe',
          role: 'Harry Potter',
          image: 'https://source.unsplash.com/300x400/?actor,glasses,scar'
        },
        {
          name: 'Rupert Grint',
          role: 'Ron Weasley',
          image: 'https://source.unsplash.com/300x400/?actor,redhair,young'
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
          image: 'https://source.unsplash.com/300x400/?actor,man,stage'
        },
        {
          name: 'Rachel Adams',
          role: 'Supporting Actor',
          image: 'https://source.unsplash.com/300x400/?actress,women,theater'
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
          image: 'https://source.unsplash.com/300x400/?indian,actor,boat'
        },
        {
          name: 'Irrfan Khan',
          role: 'Richard Parker',
          image: 'https://source.unsplash.com/300x400/?tiger,animal,orange'
        }
      ]
    }
  ];

  //---------------------------------------------------------------------------------------------------------
  //MATCHES

  matches: match[] = [
    {
      id: 1,
      image: 'img/cairo staduim.jpg',
      venue: 'Cairo International Stadium, Cairo',
      date: 'Fri 28 Mar 2025',
      tournament: 'World Cup Qualifiers 2025',
      staduim: 'img/cairo staduim.jpg',
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
      adv: "⏳ Limited Seats",
      category: '⚽ Football',
      location: 'Cairo, Egypt'
    },

    {
      id: 2,
      image: 'img/s1.jpg',
      venue: 'Petro Sport Stadium, Cairo',
      date: 'Mon 24 Mar 2025',
      tournament: 'Egypt Cup 2025',
      matchNumber: 19,
      time: '07:30 PM',
      group: 'Quarter Finals',
      staduim: 'img/s1.jpg',
      team2: 'ZED FC',
      team1: 'ENPPI SC',
      team1Logo: 'img/ENPPI.png',
      team2Logo: 'img/ZED.png',
      isFavorite: true,
      price: 290, // Add price
      word: "🔥 high",
      adv: "⏳ Limited Seats",
      category: '⚽ Football',
      location: 'Cairo, Egypt'
    },

    {
      id: 3,
      image: 'img/s3.jpg',
      venue: 'Khaled Bichara Stadium, Gouna',
      date: 'Sun 23 Mar 2025',
      tournament: 'EPL 2024/2025',
      matchNumber: 18,
      time: '08:00 PM',
      group: 'Group Two (Stage)',
      team1: 'El Gouna SC',
      team2: 'Smouha SC',
      staduim: 'img/s3.jpg',
      team1Logo: 'img/ElGouna.png',
      team2Logo: 'img/Smouha.png',
      isFavorite: false,
      price: 250, // Add price
      word: "🔥 high",
      adv: "⏳ Limited Seats",
      category: '⚽ Football',
      location: 'Gouna, Egypt'
    },

    {
      id: 4,
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
      isFavorite: true,
      price: 500, // Add price
      word: "🔥 high",
      adv: "⏳ Limited Seats",
      category: '⚽ Football',
      staduim: 'img/m3.jpg',
      location: 'Alexandria, Egypt'
    },

    {
      id: 5,
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
      isFavorite: true,
      price: 500, // Add price
      category: '⚽ Egyptian Premier League',
      location: 'Cairo, Egypt'
    },

    {
      id: 6,
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
      adv: "⏳ Limited Seats",
      category: '⚽ Football',
      location: 'Alexandria, Egypt'
    },

    {
      id: 7,
      image: 'img/cairo.jpg',
      venue: 'Cairo International Stadium, Cairo',
      date: 'Mon 24 Mar 2025',
      tournament: 'EPL 2024/2025',
      matchNumber: 19,
      time: '07:30 PM',
      group: 'Group One (Stage)',
      team1: 'Zamalek SC',
      team2: 'Ismaily SC',
      staduim: 'img/cairo staduim.jpg',
      team1Logo: 'img/zamalekv2.png',
      team2Logo: 'img/ismaily.png',
      isFavorite: false,
      price: 300, // Add price
      word: "🔥 high",
      adv: "⏳ Limited Seats",
      category: '⚽ Football',
      location: 'Cairo, Egypt'
    },

    {
      id: 8,
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
      word: "🔥 high",
      adv: "⏳ Limited Seats",
      category: '⚽ Football',
      location: 'Ismailia, Egypt'
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
      word: "🔥 high",
      adv: "⏳ Limited Seats",
      category: '⚽ Football',
      location: 'Ismailia, Egypt'
    },

    {
      id: 10,
      image: 'img/cairo4.jpg',
      venue: 'Cairo International Stadium, Cairo',
      date: 'Tue 1 Apr 2025',
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
      word: "🔥 high",
      adv: "⏳ Limited Seats",
      category: '⚽ Football',
      location: 'Cairo, Egypt'
    }
  ];

  categories: categories[] = [
    {
      image: 'img/cairo3.jpg',
      title: 'All Tournaments',
      subtitle: 'View All Matches Across Competitions',
      badgeText: 'All Matches',
      badgeClass: 'bg-dark'
    },

    {
      image: 'img/EPL_1.jpg',
      title: 'EPL 2024/2025',
      subtitle: 'Egypt’s Top-Tier Football League',
      badgeText: 'Home Matches',
      badgeClass: 'bg-primary'
    },

    {
      image: 'img/ECUP.gif',
      title: 'Egypt Cup 2025',
      subtitle: 'Cairo Stadium Matches',
      badgeText: 'Quarterfinals',
      badgeClass: 'bg-success'
    },

    {
      image: 'img/national.jpg',
      title: 'World Cup Qualifiers 2025',
      subtitle: 'Pharaohs',
      badgeText: 'Cairo Venue',
      badgeClass: 'bg-warning'
    },

    {
      image: 'img/derby.jpg',
      title: 'Derby Match',
      subtitle: 'Egypt’s Biggest Rivalries',
      badgeText: 'Cairo Derby',
      badgeClass: 'bg-danger'
    },
  ];

  // Filter options (sHome Page)
  venues = ['All Venues', ...new Set(this.matches.map(m => m.venue))];

  prices = [
    'All Prices',
    'Below 300',
    '300 - 600',
    '600 - 1000',
    'Above 1000'
  ];

  dates = [
    'All Dates',
    'Most Recent',
    'Least Recent'
  ];

  //---------------------------------------------------------------------------------------------------------
  //MATCH DETAILS

  eventItems: eventItem[] = [
    {
      id: 1,
      location: 'Cairo International Stadium, Cairo',
      Group: 'African Qualifiers Group B',
      title: 'World Cup Qualifiers 2025',
      date: 'Mar 28 - 2025',
      Kickoff: '08:30 PM',
      GatesOpen: '05:00 PM',
      price: 1100,
      description: "Football isn't just a sport—it's an emotion that brings people together...",
      isFavorite: true,
      word: "🔥 high",
      adv: "⏳ Limited Seats",
      category: '⚽ Football'
    },
    {
      id: 2,
      location: 'Petro Sport Stadium, Cairo',
      Group: 'Quarter Finals',
      title: 'Egypt Cup 2025',
      date: 'Mar 24 - 2025',
      Kickoff: '7:30 PM',
      GatesOpen: '3:00 PM',
      price: 290,
      description: "Football isn't just a sport—it's an emotion that brings people together...",
      isFavorite: true,
      word: "🔥 high",
      adv: "⏳ Limited Seats",
      category: '⚽ Football'
    },
    {
      id: 3,
      location: 'Khaled Bichara Stadium, Gouna',
      Group: 'Group Two (Stage)',
      title: 'EPL 2024/2025',
      date: 'Mar 23 - 2025',
      Kickoff: '8:00 PM',
      GatesOpen: '05:00 PM',
      price: 250,
      description: "Football isn't just a sport—it's an emotion that brings people together...",
      isFavorite: false,
      word: "🔥 high",
      adv: "⏳ Limited Seats",
      category: '⚽ Football'
    },
    {
      id: 4,
      location: 'Alexandria Stadium, Alexandria',
      Group: 'Quarter Finals',
      title: 'EPL 2024/2025',
      date: 'Mar 25 - 2025',
      Kickoff: '6:45 PM',
      GatesOpen: '03:00 PM',
      price: 500,
      description: "Football isn't just a sport—it's an emotion that brings people together...",
      isFavorite: true,
      word: "🔥 high",
      adv: "⏳ Limited Seats",
      category: '⚽ Football'
    },
    {
      id: 5,
      location: 'Cairo International Stadium, Cairo',
      Group: 'Group Two (Stage)',
      title: 'Championship League',
      date: 'Mar 22 - 2025',
      Kickoff: '9:30 PM',
      GatesOpen: '06:00 PM',
      price: 500,
      description: "Football isn't just a sport—it's an emotion that brings people together...",
      isFavorite: true,
      word: "🔥 high",
      adv: "⏳ Limited Seats",
      category: '⚽ Football'
    },
    {
      id: 6,
      location: 'Borg El Arab Stadium, Alexandria',
      Group: 'African Qualifiers Group B',
      title: 'EPL 2024/2025',
      date: 'Mar 23 - 2025',
      Kickoff: '9:00 PM',
      GatesOpen: '06:00 PM',
      price: 100,
      description: "Football isn't just a sport—it's an emotion that brings people together...",
      isFavorite: true,
      word: "🔥 high",
      adv: "⏳ Limited Seats",
      category: '⚽ Football'
    },
    {
      id: 7,
      location: 'Cairo International Stadium, Cairo',
      Group: 'Group One (Stage)',
      title: 'EPL 2024/2025',
      date: 'Mar 24 - 2025',
      Kickoff: '7:30 PM',
      GatesOpen: '06:00 PM',
      price: 300,
      description: "Football isn't just a sport—it's an emotion that brings people together...",
      isFavorite: false,
      word: "🔥 high",
      adv: "⏳ Limited Seats",
      category: '⚽ Football'
    },
    {
      id: 8,
      location: 'Suez Canal Stadium, Ismailia',
      Group: 'Group Two (Stage)',
      title: 'EPL 2024/2025',
      date: 'Mar 22 - 2025',
      Kickoff: '9:30 PM',
      GatesOpen: '06:00 PM',
      price: 300,
      description: "Football isn't just a sport—it's an emotion that brings people together...",
      isFavorite: false,
      word: "🔥 high",
      adv: "⏳ Limited Seats",
      category: '⚽ Football'
    },
    {
      id: 9,
      location: 'Suez Canal Stadium, Ismailia',
      Group: 'Group Two (Stage)',
      title: 'EPL 2024/2025',
      date: 'Mar 22 - 2025',
      Kickoff: '9:30 PM',
      GatesOpen: '06:00 PM',
      price: 100,
      description: "Football isn't just a sport—it's an emotion that brings people together...",
      isFavorite: false,
      word: "🔥 high",
      adv: "⏳ Limited Seats",
      category: '⚽ Football'
    },
    {
      id: 10,
      location: 'Cairo International Stadium, Cairo',
      Group: 'Main Stage',
      title: 'Championship League',
      date: 'Apr 1 - 2025',
      Kickoff: '9:00 PM',
      GatesOpen: '06:00 PM',
      price: 900,
      description: "Football isn't just a sport—it's an emotion that brings people together...",
      isFavorite: true,
      word: "🔥 high",
      adv: "⏳ Limited Seats",
      category: '⚽ Football'
    },
  ]

  teams: team[] = [
    {
      id: 1,
      name: 'Egypt',
      logo: '/img/egypt.svg',
      description: 'One of the most successful and storied teams in African football history. The team has won the Africa Cup of Nations (AFCON) a record seven times',
      coach: 'Hossam Hassan',
      keyPlayers: 'Mohamed Salah, Omar Marmoush, Zizo'
    },
    {
      id: 2,
      name: 'Algeria',
      logo: '/img/algeria.svg',
      description: 'One of the most prominent teams in African football. They have won the Africa Cup of Nations (AFCON) twice, in 1990 and 2019.',
      coach: 'Vladimir Petković',
      keyPlayers: 'Riyad Mahrez, Ismaël Bennacer, Saïd Benrahma'
    },
    {
      id: 3,
      name: 'ENPPI SC',
      logo: '/img/ENPPI.png',
      description: 'Professional football club based in Cairo, Egypt. Founded in 1980',
      coach: 'Sayed Yassin',
      keyPlayers: 'Reda El Sayed, Ahmed Kalosha, Ahmed El Agouz'
    },

    {
      id: 4,
      name: 'ZED FC',
      logo: '/img/ZED.png',
      description: 'Relatively new football club based in Cairo, Egypt. Founded in 2020, ZED FC is part of the ZED Group, a diversified company with interests in real estate, entertainment, and sports.',
      coach: 'Magdy Abdel Aaty',
      keyPlayers: 'Amr Hossam, Ali Lotfi, Amar Hamdy'
    },

    {
      id: 5,
      name: 'El Gouna SC',
      logo: '/img/ElGouna.png',
      description: 'Professional football club based in the coastal city of El Gouna, Egypt. The club was founded in 2003 and quickly rose to prominence in the Egyptian football scene.',
      coach: 'Reda Shehata',
      keyPlayers: 'Ahmed Hamed Shousha, Amr Shaaban, Mohamed Alaa'
    },

    {
      id: 6,
      name: 'Smouha SC',
      logo: '/img/Smouha.png',
      description: 'Professional football club based in Alexandria, Egypt. Founded in 1949, the club is named after the Smouha district in Alexandria',
      coach: 'Ahmed Sami',
      keyPlayers: 'El-Hani Soliman, Barakat Haggag, Dokou Dodo'
    },

    {
      id: 7,
      name: 'Al Ittihad Alexandria SC',
      logo: '/img/AlIttihad.png',
      description: 'Professional football club based in Alexandria, Egypt. Founded in 1914, it is one of the oldest and most respected football clubs in Egypt.',
      coach: 'Nikodimos Papavasiliou',
      keyPlayers: 'El Mahdi Soliman, Marwan Daoud, Karim El Deeb'
    },

    {
      id: 8,
      name: 'Al Ahly SC',
      logo: '/img/Al Ahly.svg',
      description: 'The most successful club in Africa, based in Cairo. Record holder of CAF Champions League titles.',
      coach: 'Marcelo Koller',
      keyPlayers: 'Mohamed El Shenawy, Percy Tau, Ahmed Abdelkader'
    },

    {
      id: 9,
      name: 'Pyramids FC',
      logo: '/img/Pyramids.png',
      description: 'Ambitious Cairo-based club known for their attacking style of play and modern facilities.',
      coach: 'Jamie Pacheco',
      keyPlayers: 'Abdallah El Said, Fiston Mayele, Mohamed Chibi'
    },

    {
      id: 10,
      name: 'Ismaily SC',
      logo: '/img/Ismailyy.png',
      description: 'Professional football club based in Ismailia, Egypt. Founded in 1924, Ismaily is one of the oldest and most successful clubs in Egyptian football.',
      coach: 'Shawky Gharib',
      keyPlayers: 'Ahmed El Sheikh, Kamal El Sayed, Eric Traoré'
    },

    {
      id: 11,
      name: 'Ghazl Elmahala FC',
      logo: '/img/mahalla.png',
      description: 'Professional football club based in Mahalla El Kubra, Egypt. Founded in 1936, the club has a rich history and is one of the well-known teams in Egyptian football.',
      coach: 'Khaled Eid',
      keyPlayers: 'Amr El Gazzar, Mohamed Gaber, Bassam Walid'
    },

    {
      id: 12,
      name: 'Ceramica Cleopatra FC',
      logo: '/img/Cleopatra.png',
      description: 'Relatively new football club based in 10th of Ramadan City, Egypt. The club was founded in 2006 and is part of the Ceramica Cleopatra Group, a prominent Egyptian ceramics company.',
      coach: 'Ayman El Ramadi',
      keyPlayers: 'Ali El Gabry, Nour Alaa, Marwan Otaka'
    },

    {
      id: 13,
      name: 'Zamalek SC',
      logo: '/img/Zamalek.svg',
      description: 'One of the most successful and prestigious football clubs in Egypt and Africa. Based in Cairo, the club was founded in 1911 and has a rich history in both domestic and international football.',
      coach: 'José Peseiro',
      keyPlayers: 'Zizo, Mahmoud El Wensh, Ahmed Fatouh'
    },
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

  generateReviewsForMatch(matchDate: string, numberOfReviews: number): any[] {
    const reviews: any[] = [];
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
      const reviewDate = this.generateReviewDate(matchDate); // Generate review date incrementally

      // Choose a random English name from the list
      const userName = englishNames[Math.floor(Math.random() * englishNames.length)];

      reviews.push({
        user: userName,
        rating: parseFloat(rating),
        comment: comment,
        date: reviewDate
      });

      // Update the showDate for the next review to be the next day
      matchDate = reviewDate;
    }

    return reviews;
  }

  //---------------------------------------------------------------------------------------------------------



  //---------------------------------------------------------------------------------------------------------
  //favorite shows
  private favoriteShowsSubject = new BehaviorSubject<show[]>(this.shows.filter(show => show.isFavorite));
  favoriteShows$ = this.favoriteShowsSubject.asObservable();

  // Toggle favorite status of a show by its ID
  toggleFavorite(showId: number): void {
    const show = this.shows.find(s => s.id === showId);
    if (show) {
      // Toggle the favorite status
      show.isFavorite = !show.isFavorite;

      // Update the favorite shows list and emit the updated array
      this.favoriteShowsSubject.next(this.getFavoriteShows());
    }
  }

  // Get the list of favorite shows (filtered)
  getFavoriteShows(): any[] {
    // Filter shows to get only those that are marked as favorite
    return this.shows.filter(show => show.isFavorite);
  }
  // Add or set the shows list
  setShows(shows: any[]): void {
    this.shows = shows;
    // Emit the updated list of favorites
    this.favoriteShowsSubject.next(this.getFavoriteShows());
  }


  private favoriteMatchesSubject = new BehaviorSubject<match[]>(this.matches.filter(match => match.isFavorite));
  favoriteMatches$ = this.favoriteMatchesSubject.asObservable();

  // Toggle favorite status of a show by its ID
  toggleFavoritematch(matchId: number): void {
    const match = this.matches.find(m => m.id === matchId);
    if (match) {
      // Toggle the favorite status
      match.isFavorite = !match.isFavorite;

      // Update the favorite shows list and emit the updated array
      this.favoriteMatchesSubject.next(this.getFavoriteShows());
    }
  }



//---------------------------------------------------------------------------------------------------------


  getFavoriteMatches(): any[] {
    // Filter shows to get only those that are marked as favorite
    return this.matches.filter(match => match.isFavorite);
  }
  // Add or set the shows list
  setMatches(matches: any[]): void {
    this.matches = matches;
    // Emit the updated list of favorites
    this.favoriteMatchesSubject.next(this.getFavoriteMatches());
  }

}
