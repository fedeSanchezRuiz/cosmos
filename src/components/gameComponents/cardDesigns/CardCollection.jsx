import CardFrame from './CardFrame';
import StarryNight from '../../images/website-img/StarryBack.jpeg';
import SeiyaNoCloth from '../../images/chapter1-img/SeiyaFirst.jpeg';
import PegasusSeiya from '../../images/bronze-img/SeiyaPegasus2.jpeg';
import Cassios from '../../images/chapter1-img/Cassios1.jpeg';
import PopeAres from '../../images/chapter1-img/PopeAresA.jpeg';
import chapter1JSON from '../../../json/chapter1.json';

const rewardCardsData = chapter1JSON.rewards;

const images = {
  SeiyaNoCloth,
  PegasusSeiya,
  Cassios,
  PopeAres,
};

const imageStyle = {
  h: {
    base: '200px',
    sm: '260px',
    md: '280px',
    lg: '300px',
    xl: '300px',
  },
};

const addImageToCard = (card) => {
  const newCard = { ...card };
  newCard.background = `${card.background}, url(${StarryNight})`;
  newCard.image = images[card.image];
  return newCard;
};

const rewards = rewardCardsData.map(addImageToCard);

const CardCollection = rewards.map((reward) => (
  <CardFrame
    key={reward.name}
    name={reward.name}
    image={reward.image}
    fontColor={reward.color}
    hp={reward.life}
    specialAttack={reward.attack}
    backgroundImage={reward.background}
    imageStyle={imageStyle}
    visibleText={true}
    visibleHp={true}
    visibleImage={true}
    visibleSpecialAttack={true}
    glow={reward.glow}
  />
));

export default CardCollection;
