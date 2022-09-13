const speakers = [
  {
    imgSrc: './assets/mobile/kilnam.png',
    speakerName: 'Yochai Benkler',
    speakerField: 'Berkan Professor of History with over 20 years experience in podcast',
    speakerDesc: 'Benkler studies commons-based peer production and published his seminal book Journey to the podcasting world.',
  },
  {
    imgSrc: './assets/mobile/yochai.png',
    speakerName: 'Kilnam Chon',
    speakerField: '',
    speakerDesc: 'Kilnam Chon helped bring the podcast submit to Asia and is an outspoken advocate for open podcast and digital commons',
  },
  {
    imgSrc: './assets/mobile/sohyeong.png',
    speakerName: 'SohYeong Noh',
    speakerField: 'Director of Art Center and a board member of PD Podcasting',
    speakerDesc: 'As the main venue for new media art production in korea, Nabi promotes cross-displinary collaboration and understanding',
  },
  {
    imgSrc: './assets/mobile/julia.png',
    speakerName: 'Julia Leda',
    speakerField: 'President of young pirates of Europe',
    speakerDesc: 'European Interation, political democracy and participation of youth through online as her major condem',
  },
  {
    imgSrc: './assets/mobile/lila.png',
    speakerName: 'Lila Tretikov',
    speakerField: 'Executive Director of the media foundation',
    speakerDesc: 'Lila Tretikov is the executive director of wikimedia foundation, the non profit organisation that operates wikipedia',
  },
  {
    imgSrc: './assets/mobile/reagan.png',
    speakerName: 'Ryan Merkley',
    speakerField: 'CEO of PD Podcast',
    speakerDesc: 'Ryan has been leading open source project at the mozilla foundation such as the open source movement.',
  },
];

const speakersList = document.querySelector('.speakers-list');
for (let i = 0; speakersList && i < speakers.length; i += 1) {
  const div = document.createElement('div');
  div.className = 'speaker';

  const img = document.createElement('img');
  img.src = speakers[i].imgSrc;
  img.setAttribute('alt', 'speaker'.concat(i + 1));

  const article = document.createElement('article');
  const h3 = document.createElement('h3');
  h3.className = 'speaker-name';
  h3.textContent = speakers[i].speakerName;
  const h4 = document.createElement('h4');
  h4.className = 'speaker-field';
  h4.textContent = speakers[i].speakerField;
  const pDot = document.createElement('p');
  pDot.textContent = '.....';
  const p = document.createElement('p');
  p.className = 'speaker-desc';
  p.textContent = speakers[i].speakerDesc;

  article.append(h3);
  article.append(h4);
  article.append(pDot);
  article.append(p);

  div.append(img);
  div.append(article);
  speakersList.append(div);
}

const hambuger = document.querySelector('.hambuger');
const nav = document.querySelector('.navigator');
const exit = document.querySelector('.exit-btn');
const links = nav.querySelectorAll('a');
hambuger.addEventListener('click', () => nav.classList.remove('toggle-ON'));
exit.addEventListener('click', () => nav.classList.add('toggle-ON'));
links.forEach((element) => {
  element.addEventListener('click', () => nav.classList.add('toggle-ON'));
});