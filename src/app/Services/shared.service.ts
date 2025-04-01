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


@Injectable({
  providedIn: 'root'
})
export class SharedService {

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
}
