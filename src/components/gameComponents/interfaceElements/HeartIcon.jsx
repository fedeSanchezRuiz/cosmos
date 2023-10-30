import PixelatedHeart from '../../images/chapter1-img/pixelheart3.png';

const HeartIcon = ({ size }) => {
  return (
    <img
      src={PixelatedHeart}
      alt='Heart Icon'
      width={size}
      height={size}
    />
  );
};

export default HeartIcon;
