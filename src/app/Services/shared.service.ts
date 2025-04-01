import { Injectable } from '@angular/core';

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

export interface ticket {
  type: string;
  price: number;
  description: string;
}

export interface review {
  user: string;
  rating: number;
  comment: string;
  date: string;
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
  //ENTERTAINMENT HOME

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
        description: `A ball of an evening is making its way to California this summer as the Los Angeles Ballet stages its performance of everyone's favorite fairytale, Cinderella. With choreography provided by the inspirational Edwaard Liang and a score by Sergei Prokofiev, prepare to be transported to a land of princes and paupers, fairies and evil stepmothers, all with twists and turns you've never seen. But don't leave it too late to get your tickets, you know what happens when the clock strikes midnight! After the death of her beloved father, the kind and gentle Cinderella is kept as a downtrodden servant by her wicked stepmother and stepsisters. A Prince arrives with the aim of finding his Princess. Cinderella's family seek to keep her away from the ball, but will true love prevail?`,
        date: 'Jun 12 - 2025',
        location: 'Dolby Theatre',
        fullLocation: 'Maadi, Cairo',
        price: 50,
        isFavorite: false,
        word: 'Stunning!',
        reviews: 6,
        qoute: "Experience the Best Moments!",
        subQoute: "Unforgettable events, unforgettable memories."
      },
      {
        id: 2,
        title: 'Alvin Ailey American Dance',
        category: 'Dance',
        imageSmall: 'img/Shows/d2.jpg',
        imageLarge: 'img/Shows/d22.jpg',
        rating: 4,
        description: `A ball of an evening is making its way to California this summer as the Los Angeles Ballet stages its performance of everyone's favorite fairytale, Cinderella. With choreography provided by the inspirational Edwaard Liang and a score by Sergei Prokofiev, prepare to be transported to a land of princes and paupers, fairies and evil stepmothers, all with twists and turns you've never seen. But don't leave it too late to get your tickets, you know what happens when the clock strikes midnight! After the death of her beloved father, the kind and gentle Cinderella is kept as a downtrodden servant by her wicked stepmother and stepsisters. A Prince arrives with the aim of finding his Princess. Cinderella's family seek to keep her away from the ball, but will true love prevail?`,
        date: 'Apr 2 - 2025',
        location: 'Dorothy Chandler Pavilion',
        fullLocation: 'Maadi, Cairo',
        price: 70,
        isFavorite: true,
        word: 'Stunning!',
        reviews: 0,
        qoute: "Your Next Adventure Awaits!",
        subQoute: "Book now and be part of something extraordinary."
      },
      //Concerts
      {
        id: 3,
        title: 'A Tribute to the Beatles',
        category: 'Concerts',
        imageSmall: 'img/Shows/c1.jpg',
        imageLarge: 'img/Shows/c11.jpg',
        rating: 4,
        description: `Together longer than The Beatles themselves, RAIN has mastered every song, gesture and nuance of the legendary group, delivering a totally live, note-for-note performance that's as infectious as it is transporting. From the early hits to later classics that The Beatles never got the chance to play live - including the most complex and challenging songs - this adoring tribute will take you back to a time when all you needed was love, peace and a little help from your friends!`,
        date: 'Apr 29 - 2025',
        location: 'The Wiltern',
        fullLocation: 'Maadi, Cairo',
        price: 60,
        isFavorite: false,
        word: 'Stunning!',
        reviews: 7,
        qoute: "Unmissable Experience!",
        subQoute: "Join us for an unforgettable journey."
      },
      {
        id: 4,
        title: 'Dua Lipa',
        category: 'Concerts',
        imageSmall: 'img/Shows/c2.jpg',
        imageLarge: 'img/Shows/c22.jpg',
        rating: 4.5,
        description: `What a year it's been for Dua Lipa! Headlining the Glastonbury Pyramid Stage, releasing a string of hot new hits, and dropping an album that'll Blow Your Mind (Mwah)! After taking the world by storm with her quintessential lockdown album, Future Nostalgia (2020), which earned her two record-breaking worldwide Top 5 hits ("Don't Start Now," "Levitating"), the Princess of pop-disco is getting all Physical on stage with The Radical Optimism World Tour, performing the hits alongside tracks from her breezy and confident, chart-topping third album, Radical Optimism. Dua Lipa knows that one song is all it takes to make a crowd go wild! First gaining attention on YouTube at just 14 for her standout covers of P!nk and Nelly Furtado, Dua Lipa quickly rose to become the dark pop sensation she is today. Edgy and heartfelt, with a honeyed voice that injects sassy style into both ballads and EDM-infused bops, she's strong, honest, and super cool. Responsible for some of the biggest modern pop floor-fillersBe the One, New Rules, One Kiss, Houdini, and so many more Dua is unstoppable!`,
        date: 'Oct 4 - 2025',
        location: 'Kia Forum',
        fullLocation: 'Maadi, Cairo',
        price: 85,
        isFavorite: true,
        word: 'Stunning!',
        reviews: 10,
        qoute: "Experience the Magic Live!",
        subQoute: "Don't miss out—secure your tickets today!"
      },
      {
        id: 5,
        title: 'Katy Perry',
        category: 'Concerts',
        imageSmall: 'img/Shows/c3.jpg',
        imageLarge: 'img/Shows/c33.jpg',
        rating: 4,
        description: `After an extended break from the spotlight, pop megastar Katy Perry returns with her highly anticipated seventh album, 143. The accompanying Lifetimes Tour is set to take the world by storm, hitting North America in the peak summer of 2025. This marks Katy's first tour in seven years, get ready KatyCats, your queen is ready to give your dance party you'll never forget! The concerts will feature a state-of-the art stage, specifically designed by Katy to get closer to you, her fans, than ever before, providing audiences with a truly magical experience from every angle in the arena. If you caught her now legendary Superbowl performance, you'll know that Katy's shows are really something to behold, so expect spectacular stage effects and enough costume changes to make even Lady Gaga jealous! `,
        date: 'Jul 13 - 2025',
        location: 'Honda Center Anaheim',
        fullLocation: 'Maadi, Cairo',
        price: 80,
        isFavorite: true,
        word: 'Stunning!',
        reviews: 8,
        qoute: "Experience the Best Moments!",
        subQoute: "Unforgettable events, unforgettable memories."
      },
      //Stand-Up Comedy
      {
        id: 6,
        title: 'Ricky Gervais',
        category: 'Stand-Up Comedy',
        imageSmall: 'img/Shows/s1.jpg',
        imageLarge: 'img/Shows/s11.jpg',
        rating: 3.5,
        description: `Golden Globe Award winner Ricky Gervais returns to the stage in 2025 with his newest tour, Mortality! As one of the most recognizable comics on the planet, Gervais is known for his controversial yet hilarious style, unafraid to question every aspect of life in ways that resonate deeply with audiences. Get ready for his trademark sarcasm and sharp satire, this show is not for the faint-hearted. Having enjoyed a renaissance with his globally acclaimed Netflix series, After Life, at the beginning of 2019, Gervais is riding another peak of his already illustrious career. A big hit in Britain as well as the USA, The Office genius is rarely seen on TV let alone live on stage, don't miss your chance to be in the room where it happens when Ricky hits your town! `,
        date: 'May 31 - 2025',
        location: 'Hollywood Bowl',
        fullLocation: 'Maadi, Cairo',
        price: 30,
        isFavorite: false,
        word: 'Stunning!',
        reviews: 8,
        qoute: "Unmissable Experience!",
        subQoute: "Join us for an unforgettable journey."
      },
      //Theater
      {
        id: 7,
        title: 'Harry Potter and the Cursed Child',
        category: 'Theater',
        imageSmall: 'img/Shows/t1.jpg',
        imageLarge: 'img/Shows/t11.jpg',
        rating: 4.5,
        description: `Wands at the ready! The theatrical heavyweight, Harry Potter and the Cursed Child is coming to you on tour! Following record-breaking and multi-award-winning runs in London's West End and on Broadway, countrywide audiences can now experience the magic of the astounding production when it apparates to your city from 2025 onwards. A continuation of The Boy Who Lived's story, 'Cursed Child catches up with Harry and co. as grown-ups, where the challenges of adulthood, jobs, and kids prove far scarier than anything Voldemort could have cooked up! Leaving critics impressed and fans bowled over, the show expertly recaptures the magic of the books, while crafting a totally unique world of its own. The story is brought to life with an intelligent script, wondrous costumes and a whole Defence Against the Dark Arts class worth of great theatrical special effects. The wish of every Potter fan to find out what happens after the final line of The Deathly Hallows is truly granted!`,
        date: 'Jun 22 - 2025',
        location: 'Hollywood Bowl',
        fullLocation: 'Maadi, Cairo',
        price: 50,
        isFavorite: true,
        word: 'Stunning!',
        reviews: 15,
        qoute: "Your Next Adventure Awaits!",
        subQoute: "Book now and be part of something extraordinary."
      },
      {
        id: 8,
        title: 'Stereophonic',
        category: 'Theater',
        imageSmall: 'img/Shows/t2.jpg',
        imageLarge: 'img/Shows/t22.jpg',
        rating: 3,
        description: `Last year, the Broadway production of Stereophonic captivated both audiences and critics, winning an impressive five Tony Awards: Best New Play, Best Featured Actor, Best Direction of a Play, Best Sound Design, and Best Scenic Design. Stereophonic is a powerhouse show that excels in every aspect. It's not just the story that's been making waves; the production has also enchanted countless hearts with its original songs, written by former Arcade Fire star Will Butler. This is a must-see show for both music and drama enthusiasts.`,
        date: 'Dec 9 - 2025',
        location: 'Pantages Theater Hollywood',
        fullLocation: 'Maadi, Cairo',
        price: 30,
        isFavorite: true,
        word: 'Stunning!',
        reviews: 3,
        qoute: "Experience the Magic Live!",
        subQoute: "Don't miss out—secure your tickets today!"
      },
      {
        id: 9,
        title: 'Life of Pi',
        category: 'Theater',
        imageSmall: 'img/Shows/t3.jpg',
        imageLarge: 'img/Shows/t33.jpg',
        rating: 4.5,
        description: `As transformative as it is captivating, Martel's Life of Pi is a magical masterpiece that introduces us to Pi, a 16-year-old boy adrift in a lifeboat with four fellow survivors - a hyena, a zebra, an orangutan, and a terrifying Bengal Tiger. As they navigate the unpredictable waters of the Pacific Ocean, Pi's boundless imagination soon becomes his greatest asset.`,
        date: 'May 6 - 2025',
        location: 'Ahmanson Theater',
        fullLocation: 'Maadi, Cairo',
        price: 45,
        isFavorite: true,
        word: 'Stunning!',
        reviews: 10,
        qoute: "Unmissable Experience!",
        subQoute: "Join us for an unforgettable journey."
      },
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
      isFavorite: false,
      price: 500, // Add price
      category: '⚽ Egyptian Premier League'
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
      category: '⚽ Egyptian Premier League'
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
      category: '⚽ Egyptian Premier League'
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
      date: 'Fri, March 28, 2025',
      Kickoff: '08:30 PM',
      GatesOpen: '05:00 PM',
      price: 1100,
      description: "Football isn't just a sport—it's an emotion that brings people together...",
      isFavorite: false,
      word: "🔥 high",
      adv: "⏳ Limited Seats",
      category: '⚽ Football'
    },
    {
      id: 2,
      location: 'Petro Sport Stadium, Cairo',
      Group: 'Quarter Finals',
      title: 'Egypt Cup 2025',
      date: 'Mon, March 24, 2025',
      Kickoff: '7:30 PM',
      GatesOpen: '3:00 PM',
      price: 290,
      description: "Football isn't just a sport—it's an emotion that brings people together...",
      isFavorite: false,
      word: "🔥 high",
      adv: "⏳ Limited Seats",
      category: '⚽ Football'
    },
    {
      id: 3,
      location: 'Khaled Bichara Stadium, Gouna',
      Group: 'Group Two (Stage)',
      title: 'EPL 2024/2025',
      date: 'Sun, March 23, 2025',
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
      date: 'Tue, March 25, 2025',
      Kickoff: '6:45 PM',
      GatesOpen: '03:00 PM',
      price: 500,
      description: "Football isn't just a sport—it's an emotion that brings people together...",
      isFavorite: false,
      word: "🔥 high",
      adv: "⏳ Limited Seats",
      category: '⚽ Football'
    },
    {
      id: 5,
      location: 'Cairo International Stadium, Cairo',
      Group: 'Group Two (Stage)',
      title: 'Championship League',
      date: 'Sat, March 22, 2025',
      Kickoff: '9:30 PM',
      GatesOpen: '06:00 PM',
      price: 500,
      description: "Football isn't just a sport—it's an emotion that brings people together...",
      isFavorite: false,
      word: "🔥 high",
      adv: "⏳ Limited Seats",
      category: '⚽ Football'
    },
    {
      id: 6,
      location: 'Borg El Arab Stadium, Alexandria',
      Group: 'African Qualifiers Group B',
      title: 'EPL 2024/2025',
      date: 'Sun, March 23, 2025',
      Kickoff: '9:00 PM',
      GatesOpen: '06:00 PM',
      price: 100,
      description: "Football isn't just a sport—it's an emotion that brings people together...",
      isFavorite: false,
      word: "🔥 high",
      adv: "⏳ Limited Seats",
      category: '⚽ Football'
    },
    {
      id: 7,
      location: 'Cairo International Stadium, Cairo',
      Group: 'Group One (Stage)',
      title: 'EPL 2024/2025',
      date: 'Mon, March 24, 2025',
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
      date: 'Sat, March 22, 2025',
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
      date: 'Sat, March 22, 2025',
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
      date: 'Tue, April 1, 2025',
      Kickoff: '9:00 PM',
      GatesOpen: '06:00 PM',
      price: 900,
      description: "Football isn't just a sport—it's an emotion that brings people together...",
      isFavorite: false,
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
      logo: '/img/ismaily.png',
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
      logo: '/img/zmalekk.png',
      description: 'One of the most successful and prestigious football clubs in Egypt and Africa. Based in Cairo, the club was founded in 1911 and has a rich history in both domestic and international football.',
      coach: 'José Peseiro',
      keyPlayers: 'Zizo, Mahmoud El Wensh, Ahmed Fatouh'
    },
  ];

  reviews: review[] = [
    { user: 'Ahmed', rating: 3.5, comment: 'Amazing service! Highly recommended.', date: '2025-03-25' },
    { user: 'Sara', rating: 4, comment: 'Great experience, but there’s room for improvement.', date: '2025-03-24' },
    { user: 'Mariam', rating: 5, comment: 'Fantastic! Everything was perfect.', date: '2025-03-23' },
    { user: 'Omar', rating: 3, comment: 'It was good, but not exceptional.', date: '2025-03-22' },
    { user: 'Nour', rating: 4, comment: 'Really enjoyed it! Will come back again.', date: '2025-03-21' }
  ];

  tickets: ticket[] = [
    { type: 'VIP', price: 400, description: 'Premium seats with VIP facilities' },
    { type: 'CAT 1', price: 300, description: 'Premium sideline seats' },
    { type: 'CAT 2', price: 200, description: 'Mid-field seats' },
    { type: 'CAT 3', price: 150, description: 'Mid-field seats' }
  ];

  //---------------------------------------------------------------------------------------------------------
  
  

  //---------------------------------------------------------------------------------------------------------

  

}
