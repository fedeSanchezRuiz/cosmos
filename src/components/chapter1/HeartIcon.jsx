import heart2 from '../../images/pixelheart3.png';

const HeartIcon = ({ size }) => {
  return (
    <img
      src={heart2}
      alt='Heart Icon'
      width={size}
      height={size}
    />
  );
};

export default HeartIcon;