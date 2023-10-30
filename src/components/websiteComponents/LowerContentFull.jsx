import LowerContent from './LowerContent';
import PegasusCloth from '../../components/images/website-img/PegasusCloth1.png';
import PopeSaga from '../../components/images/website-img/PopeSaga.webp';

const LowerContentFull = () => {
  const emailLink = 'mailto:sanchezruizfederico@gmail.com';

  const pegasusCloth = (
    <LowerContent
      path={'inventory'}
      image={PegasusCloth}
      heading={'Feel the Power'}
      text={
        'Check your inventory to behold the prizes you have acquired throughout the missions.'
      }
    />
  );

  const popeSaga = (
    <LowerContent
      path={emailLink}
      mx={{ base: 'none', sm: '20px', md: '30px', lg: '40px' }}
      image={PopeSaga}
      heading={'Any Questions?'}
      text={
        'Feel free to click Pope Saga to contact the creator for any doubts you may have.'
      }
      flexDir={'row-reverse'}
    />
  );

  return (
    <>
      {pegasusCloth}
      {popeSaga}
    </>
  );
};

export default LowerContentFull;
