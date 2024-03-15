type Owner = {
  name: string;
  title: string;
};

type Quote = {
  quote: string;
  owner: Owner;
};

export const quotes: Quote[] = [
  {
    quote:
      "Turn your wounds into wisdom The biggest adventure you can take is to live the life of your dreams",
    owner: { name: "Oprah Winfrey", title: "Media Executive" },
  },
  {
    quote:
      "If you want to find the secrets of the universe, think in terms of energy, frequency, and vibration",
    owner: { name: "Nikola Tesla", title: "Inventor, Electrical Engineer" },
  },
  {
    quote: "A person who never made a mistake never tried anything new",
    owner: { name: "Albert Einstein", title: "Theoretical Physicist" },
  },
  {
    quote:
      "The two most important days in your life are the day you are born and the day you find out why",
    owner: { name: "Mark Twain", title: "Author" },
  },
  {
    quote:
      "Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose",
    owner: { name: "Steve Jobs", title: "Co-founder of Apple Inc." },
  },
  {
    quote:
      "Injustice anywhere is a threat to justice everywhere We are caught in an inescapable network of mutuality, tied in a single garment of destiny",
    owner: { name: "Martin Luther King Jr.", title: "Civil Rights Leader" },
  },
  {
    quote:
      "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel",
    owner: { name: "Maya Angelou", title: "Poet, Memoirist" },
  },
  {
    quote:
      "Success consists of going from failure to failure without loss of enthusiasm",
    owner: {
      name: "Winston Churchill",
      title: "Former Prime Minister of the UK",
    },
  },
  {
    quote:
      "Live as if you were to die tomorrow Learn as if you were to live forever",
    owner: {
      name: "Mahatma Gandhi",
      title: "Leader of Indian Independence Movement",
    },
  },
  {
    quote:
      "It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better",
    owner: { name: "Theodore Roosevelt", title: "26th President of the USA" },
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall",
    owner: {
      name: "Nelson Mandela",
      title: "Former President of South Africa",
    },
  },
  {
    quote:
      "Once you have tasted flight, you will forever walk the earth with your eyes turned skyward, for there you have been, and there you will always long to return",
    owner: { name: "Leonardo da Vinci", title: "Painter, Inventor, Polymath" },
  },
  {
    quote:
      "I have learned over the years that when one's mind is made up, this diminishes fear; knowing what must be done does away with fear",
    owner: { name: "Rosa Parks", title: "Civil Rights Activist" },
  },
  {
    quote: "Think of all the beauty still left around you and be happy",
    owner: { name: "Anne Frank", title: "Diarist during the Holocaust" },
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife",
    owner: { name: "Jane Austen", title: "Novelist" },
  },
  {
    quote:
      "By three methods we may learn wisdom: First, by reflection, which is noblest; second, by imitation, which is easiest; and third by experience, which is the bitterest",
    owner: { name: "Confucius", title: "Philosopher" },
  },
  {
    quote: "I am seeking, I am striving, I am in it with all my heart",
    owner: { name: "Vincent Van Gogh", title: "Painter" },
  },
  {
    quote:
      "In the midst of winter, I found there was, within me, an invincible summer And that makes me happy",
    owner: { name: "Albert Camus", title: "Philosopher, Author" },
  },
  {
    quote: "Be yourself; everyone else is already taken",
    owner: { name: "Oscar Wilde", title: "Writer" },
  },
  {
    quote: "I paint flowers so they will not die",
    owner: { name: "Frida Kahlo", title: "Painter" },
  },
];
