interface IWork {
  altText: string;
  client?: string;
  id: string;
  isVideo: boolean;
  keywords: string;
  path?: string;
  title: string;
  type: string;
  url?: string;
}

export const work: { [key: string]: IWork } = {
  robotex: {
    altText: "Robotex Japan",
    client: "Robotex International",
    id: "robotex",
    isVideo: false,
    keywords: "React, Gatsby, Storybook, Adobe Illustrator",
    path: "robotex",
    title: "Robotex Japan Corporate Website",
    type: "Design and Development",
  },
  naotatsu_kaku: {
    id: "naotatsu_kaku",
    title: "Visual Artist's Portfolio Website",
    client: "Naotatsu Kaku",
    type: "Design and Development",
    keywords: "React, Gatsby",
    path: "naotatsu-kaku",
    altText: "Visual Artist, Naotatsu Kaku",
    isVideo: true,
  },
  the_light_of_tokyo: {
    id: "the_light_of_tokyo",
    title: "The Light of Tokyo",
    client: "Hotel Ryumeikan Tokyo",
    type: "Postcard Design",
    keywords: 'Graphic design, "Tokyo Postcard Award"',
    path: "the-light-of-tokyo",
    altText: "Postcard, The light of Tokyo",
    isVideo: false,
  },
  manhattan_portage: {
    id: "manhattan_portage",
    title: "Manhattan Portage Art Collection",
    client: "Manhattan Portage",
    type: "Messenger Bag Design",
    keywords: "Graphic design, Manhattan Portage Art Award 2019",
    path: "manhattan-portage",
    altText: "Messenger Bag, Manhattan Portage",
    isVideo: false,
  },
  satte: {
    id: "satte",
    title: "Satte City Logo",
    client: "Satte City, Japan",
    type: "Logo Design for a Local Government",
    keywords: "Logo, Branding, Public sector",
    path: "satte",
    altText: "Satte City Logo Design",
    isVideo: false,
  },
  mera: {
    id: "mera",
    title: "Indoor Farming System Logo Design",
    client: "Kyoritsu Lighting Systems",
    type: "Product Logo Design",
    keywords: "Logo Design, Branding",
    path: "mera",
    altText: "Logo design for indoor faming system",
    isVideo: false,
  },
  soreike: {
    id: "soreike",
    title: "Soreike San Francisco Tee",
    client: "Lovely neighbors",
    type: "T-shirt Design",
    keywords: "Japanese, Typography, T-shirt",
    path: "soreike",
    altText: "Soreike San Francisco Tee",
    isVideo: false,
  },
};

interface IApp {
  id: string;
  title: string;
  client?: string;
  type: string;
  keywords: string;
  url: string;
  altText: string;
  isVideo: boolean;
}

export const apps: { [key: string]: IApp } = {
  sobasquare: {
    id: "sobasquare",
    title: "Sobasquare",
    client: "People",
    type: "Soba Noodle Restaurant Exploring App",
    keywords: "React, Redux, Foursquare API, Google Maps API, FLIP Animation",
    url: "https://soba.madmak.me",
    altText: "Never stop exploring soba place",
    isVideo: true,
  },
};

export const featured: { [key: string]: IWork } = {
  sobasquare: apps.sobasquare,
  robotex: work.robotex,
  the_light_of_tokyo: work.the_light_of_tokyo,
  naotatsu_kaku: work.naotatsu_kaku,
};

interface INews {
  date: string;
  to: string;
  text: string;
  href?: string;
}

export const news: INews[] = [];

export const wearItems = [
  {
    id: "enjoy",
    label: "Enjoy",
    desc: "Enjoy, Spring 2020, €22.000,00",
  },
  {
    id: "greenery",
    label: "GREENERY",
    desc: "GREENERY (Navy), Winter 2019, €860.000,00",
  },
  {
    id: "berliner",
    label: "ベルリナー",
    desc: "Berliner, Autumn 2019, €920,00",
  },
  {
    id: "masterclass",
    label: "Masterclass",
    desc: "Absolute Masterclass, Autumn 2019, €1980,00",
  },
  {
    id: "soreike",
    label: "Go! San Francisco",
    desc: "Go! San Francisco (Gray), Spring 2017, $130.00 (Sold out)",
  },
  {
    id: "mean",
    label: "Mean SF-TYO",
    desc: "Mean SF-TYO, Summer 2017, $58.99 (Sold out)",
  },
];
