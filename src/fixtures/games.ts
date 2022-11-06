import { v4 as uuidv4 } from 'uuid';
export interface IGame {
  /**
   * randomly generated UUID for each game
   */
  id: string;
  /**
   * Name of a given game
   */
  name: string;
  /**
   * URL of the image for the game from tiermaker.com
   */
  imageUrl: string;
}
//Didn't want to recreate these so stealing them from tiermaker for demo purposes
const BASE_IMAGE_URL =
  'https://tiermaker.com/images/chart/chart/jackbox-party-pack-games-1-8-15345';
export const games = [
  {
    id: uuidv4(),
    name: 'Quiplash 2',
    imageUrl: `${BASE_IMAGE_URL}/30quiplash23png.png`,
  },
  {
    id: uuidv4(),
    name: 'Fibbage 3',
    imageUrl: `${BASE_IMAGE_URL}/40fibbage34png.png`,
  },
  {
    id: uuidv4(),
    name: 'Quiplash 3',
    imageUrl: `${BASE_IMAGE_URL}/70quiplash37png.png`,
  },
  {
    id: uuidv4(),
    name: 'Survive the internet',
    imageUrl: `${BASE_IMAGE_URL}/41survivetheinternet4png.png`,
  },
  {
    id: uuidv4(),
    name: 'Fibbage 3',
    imageUrl: `${BASE_IMAGE_URL}/40fibbage34png.png`,
  },
  {
    id: uuidv4(),
    name: 'Tee K.O',
    imageUrl: `${BASE_IMAGE_URL}/34teeko3png.png`,
  },
  {
    id: uuidv4(),
    name: 'Job Job',
    imageUrl: `${BASE_IMAGE_URL}/80jobjob8png.png`,
  },
  {
    id: uuidv4(),
    name: 'Patently Stupid',
    imageUrl: `${BASE_IMAGE_URL}/54patentlystupid5png.png`,
  },
  {
    id: uuidv4(),
    name: 'Fibbage Enough About You',
    imageUrl: `${BASE_IMAGE_URL}/40fibbageeau4png.png`,
  },
  {
    id: uuidv4(),
    name: "Champ'd Up",
    imageUrl: `${BASE_IMAGE_URL}/72champdup7png.png`,
  },
  {
    id: uuidv4(),
    name: 'Trivia Murder Party 2',
    imageUrl: `${BASE_IMAGE_URL}/60tmp26png.png`,
  },
  {
    id: uuidv4(),
    name: 'Quiplash XL',
    imageUrl: `${BASE_IMAGE_URL}/23quiplashxl2png.png`,
  },
  {
    id: uuidv4(),
    name: 'Trivia Murder Party',
    imageUrl: `${BASE_IMAGE_URL}/31tmp3png.png`,
  },
  {
    id: uuidv4(),
    name: 'Guesspionage',
    imageUrl: `${BASE_IMAGE_URL}/32guesspionage3png.png`,
  },
  {
    id: uuidv4(),
    name: 'Mad Verse City',
    imageUrl: `${BASE_IMAGE_URL}/52madversecity5png.png`,
  },
  {
    id: uuidv4(),
    name: 'Talking Points',
    imageUrl: `${BASE_IMAGE_URL}/73talkingpoints7png.png`,
  },
  {
    id: uuidv4(),
    name: 'Monster seeking monster',
    imageUrl: `${BASE_IMAGE_URL}/42monsterseekingmonster4png.png`,
  },
  {
    id: uuidv4(),
    name: 'The Poll Mine',
    imageUrl: `${BASE_IMAGE_URL}/81pollmine8png.png`,
  },
  {
    id: uuidv4(),
    name: 'Split the room',
    imageUrl: `${BASE_IMAGE_URL}/51splittheroom5png.png`,
  },
  {
    id: uuidv4(),
    name: 'Fibbage XL',
    imageUrl: `${BASE_IMAGE_URL}/14fibbagexl1png.png`,
  },
  {
    id: uuidv4(),
    name: 'Fibbage 2',
    imageUrl: `${BASE_IMAGE_URL}/20fibbage22png.png`,
  },
  {
    id: uuidv4(),
    name: 'Blather Round',
    imageUrl: `${BASE_IMAGE_URL}/74blatherround7png.png`,
  },
  {
    id: uuidv4(),
    name: 'Drawful 2',
    imageUrl: `${BASE_IMAGE_URL}/drawful2png.png`,
  },
  {
    id: uuidv4(),
    name: 'Bidiots',
    imageUrl: `${BASE_IMAGE_URL}/22bidiots2png.png`,
  },
  {
    id: uuidv4(),
    name: 'Wheel of enormous proportions',
    imageUrl: `${BASE_IMAGE_URL}/82wheel8png.png`,
  },
  {
    id: uuidv4(),
    name: 'Push the button',
    imageUrl: `${BASE_IMAGE_URL}/64pushthebutton6png.png`,
  },
  {
    id: uuidv4(),
    name: 'Earwax',
    imageUrl: `${BASE_IMAGE_URL}/21earwax2png.png`,
  },

  //TODO find images
  {
    id: uuidv4(),
    name: 'Weapons Drawn',
    imageUrl: `${BASE_IMAGE_URL}/84weaponsdrawn8png.png`,
  },
  {
    id: uuidv4(),
    name: 'Drawful',
    imageUrl: `${BASE_IMAGE_URL}/11drawful1png.png`,
  },
  {
    id: uuidv4(),
    name: "Fakin' it",
    imageUrl: `${BASE_IMAGE_URL}/33fakinit3png.png`,
  },
  {
    id: uuidv4(),
    name: 'Role Models',
    imageUrl: `${BASE_IMAGE_URL}/61rolemodels6png.png`,
  },
  {
    id: uuidv4(),
    name: "You don't know, Jack",
    imageUrl: `${BASE_IMAGE_URL}/10ydkj1png.png`,
  },
  {
    id: uuidv4(),
    name: 'The devils and the details',
    imageUrl: `${BASE_IMAGE_URL}/71thedevilsandthedetails7png.png`,
  },
  {
    id: uuidv4(),
    name: 'Joke Boat',
    imageUrl: `${BASE_IMAGE_URL}/62jokeboat6png.png`,
  },
  {
    id: uuidv4(),
    name: 'Dictionarium',
    imageUrl: `${BASE_IMAGE_URL}/63dictionarium6png.png`,
  },
  {
    id: uuidv4(),
    name: 'Bracketeering',
    imageUrl: `${BASE_IMAGE_URL}/43bracketeering4png.png`,
  },
  {
    id: uuidv4(),
    name: 'Full Stream',
    imageUrl: `${BASE_IMAGE_URL}/50ydkjfullstream5png.png`,
  },
  {
    id: uuidv4(),
    name: 'Civic Doodle',
    imageUrl: `${BASE_IMAGE_URL}/44civicdoodle4png.png`,
  },
  {
    id: uuidv4(),
    name: 'Word Spud',
    imageUrl: `${BASE_IMAGE_URL}/12wordspud1png.png`,
  },
  {
    id: uuidv4(),
    name: 'Drawful Animate',
    imageUrl: `${BASE_IMAGE_URL}/83drawfulanim8png.png`,
  },
  {
    id: uuidv4(),
    name: 'Bomb Corp',
    imageUrl: `${BASE_IMAGE_URL}/24bombcorp2png.png`,
  },
  {
    id: uuidv4(),
    name: 'Lie Swatter',
    imageUrl: `${BASE_IMAGE_URL}/13lieswatter1png.png`,
  },
  {
    id: uuidv4(),
    name: 'Zeeple Dome',
    imageUrl: `${BASE_IMAGE_URL}/53zeepledome5png.png`,
  },
];
