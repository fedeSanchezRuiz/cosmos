import { useState, useEffect } from 'react';
import { Flex, Box, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { NavbarLogo } from '../UI/navbar/NavbarLogo';
import { useFetch } from '../hooks/useFetch';
import BronzeSaints from '../../components/images/website-img/BronzeSaints3.webp';
import BlackSaints from '../../components/images/website-img/BlackSaints2.webp';
import SilverSaints from '../../components/images/website-img/SilverSaints2.jpeg';
import GoldSaints from '../../components/images/website-img/GoldSaints.jpeg';
import AsgardWarriors from '../../components/images/website-img/AsgardSaints .png';
import PoseidonScales from '../../components/images/website-img/PoseidonSaints2.jpeg';
import ErrorCustom from '../UI/ErrorCustom';
import ModalCard from '../UI/ModalCard';

const images = {
  BronzeSaints,
  BlackSaints,
  SilverSaints,
  GoldSaints,
  AsgardWarriors,
  PoseidonScales,
};

const imageStyles = {
  transition: 'transform 0.3s',
};

const imageHoverStyles = {
  transform: 'scale(1.03)',
};

const addImageToCategory = (category) => {
  const newCategory = { ...category };
  newCategory.image = images[category.image];
  return newCategory;
};

const MiddleContent = () => {
  const fetchUrl = 'http://localhost:3000/website';
  const errorMessage = 'Failed to fetch Saint Categories';
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const { error, fetchedData } = useFetch(
    fetchUrl,
    errorMessage
  );

  const saintCategories = fetchedData ? fetchedData[0]?.saintsCategory?.map(
    addImageToCategory
  ) : [];

  const saintCategoriesDisplay = (
    <Flex
      justifyContent='center'
      wrap='wrap'
    >
      {saintCategories?.map((category) => (
        <Box key={category.name}>
          <Link to={category.path}>
            <Image
              style={imageStyles}
              boxShadow='2px 3px 10px rgba(0, 0, 0, 0.5)'
              _hover={{
                filter: 'brightness(115%)',
                ...imageHoverStyles,
              }}
              w={{
                base: '400px',
                sm: '450px',
                md: '500px',
                lg: '650px',
              }}
              h={{
                base: '210',
                sm: '270px',
                md: '320px',
                lg: '400px',
              }}
              mt={{
                base: '6px',
                sm: '8px',
                md: '10px',
                lg: '30px',
              }}
              mx={{ sm: 'none', md: '10px', lg: '35px' }}
              borderRadius='20px'
              src={category.image}
              alt={category.name}
            />
          </Link>
        </Box>
      ))}
      {error && (
        <>
        <ErrorCustom message={errorMessage} />
        {isModalOpen && <ModalCard
        height={{
          base: '330px',
          sm: '350px',
          md: '330px',
          lg: '340px',
          xl: '350px',
        }}
        onClick={handleModalClose}
      >
        <Flex
          flexDir='column'
          justifyContent='center'
          alignItems='center'
          textAlign='center'
        >
          <NavbarLogo
            logoSSHeight={{
              base: '67px',
              sm: '72px',
              md: '74px',
              lg: '76px',
              xl: '80px',
            }}
            logoHeight={{
              base: '30px',
              sm: '32px',
              md: '33px',
              lg: '34px',
              xl: '36px',
            }}
            disableLink={true}
          />
          <Flex
            wrap='wrap'
            justifyContent='center'
            alignItems='center'
            textAlign='center'
            color='rgb(13, 32, 61)'
            fontSize={{
              base: '26px',
              sm: '27px',
              md: '28px',
              lg: '29px',
              xl: '30px',
            }}
            px={{
              base: '5%',
              sm: '9%',
              md: '8%',
              lg: '8%',
              xl: '8%',
            }}
            whiteSpace='pre-line'
            flexDir='column'
          >
            Run "JSON-SERVER --watch src/json/db.json" on your terminal to load the full content of the web
          </Flex>
        </Flex>
      </ModalCard>}
      </>
      )}
    </Flex>
  );

  return (saintCategoriesDisplay);
};

export default MiddleContent;
