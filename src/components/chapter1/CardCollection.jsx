import CardBattle from './CardBattle';
import StarryBack from '../../images/StarryBack.jpeg';
import SeiyaA from '../../images/SeiyaFirst.jpeg';
import SeiyaB from '../bronze-img/SeiyaPegasus2.jpeg';
import Cassios from '../../images/Cassios1.jpeg';
import PopeAres from '../../images/PopeAresA.jpeg';

const imageStyle = {
  h: {
    base: '200px',
    sm: '260px',
    md: '280px',
    lg: '300px',
    xl: '300px',
  },
};

const cardData = [
  {
    name: 'Pegasus Seiya',
    life: 35,
    color: '#D72638',
    image: SeiyaB,
    attack: 'Pegasus Meteor',
    round: 3,
    extraDamage: 8,
    background: `linear-gradient(to top, rgba(173, 216, 230, 0.6), rgba(102, 153, 204, 0.6), rgba(0, 115, 230, 0.6)), url(${StarryBack})`,
    glow: 'rgba(173, 216, 230, 1)',
  },
  {
    name: 'Seiya',
    life: 25,
    color: '#D72638',
    image: SeiyaA,
    attack: 'Meteor Fist',
    round: 3,
    extraDamage: 6,
    background: `linear-gradient(to top, rgba(173, 216, 230, 0.6), rgba(102, 153, 204, 0.6), rgba(0, 115, 230, 0.6)), url(${StarryBack})`,
    glow: 'rgba(173, 216, 230, 1)',
  },
  {
    name: 'Cassios',
    life: 20,
    color: '#1A0D05',
    image: Cassios,
    attack: 'Crushing Fist',
    round: 1,
    extraDamage: 4,
    background: `linear-gradient(to bottom, rgba(92, 64, 51, 0.6), rgba(140, 112, 75, 0.6), rgba(191, 160, 114, 0.6)), url(${StarryBack})`,
    glow: 'rgba(92, 64, 51, 1)',
  },
  {
    name: 'Pope Ares',
    life: 'UNK',
    color: '#CDA333',
    image: PopeAres,
    attack: 'unknown',
    round: null,
    extraDamage: null,
    background: `linear-gradient(to bottom, rgba(128, 0, 128, 0.6), rgba(75, 0, 130, 0.6), rgba(182, 149, 221, 0.6)), url(${StarryBack})`,
    glow: 'rgba(128, 0, 128, 1)',
  },
];

const CardCollection = cardData.map((card) => (
  <CardBattle
    key={card.name}
    name={card.name}
    image={card.image}
    fontColor={card.color}
    hp={card.life}
    specialAttack={card.attack}
    backgroundImage={card.background}
    imageStyle={imageStyle}
    visibleText={true}
    visibleHp={true}
    visibleImage={true}
    visibleSpecialAttack={true}
    glow={card.glow}
  />
));

export default CardCollection;
