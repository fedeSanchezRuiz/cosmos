import { useState, useEffect } from 'react';
import { Flex, Box, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import BronzeSaints from '../../components/images/website-img/BronzeSaints3.webp';
import BlackSaints from '../../components/images/website-img/BlackSaints2.webp';
import SilverSaints from '../../components/images/website-img/SilverSaints2.jpeg';
import GoldSaints from '../../components/images/website-img/GoldSaints.jpeg';
import AsgardWarriors from '../../components/images/website-img/AsgardSaints.png';
import PoseidonScales from '../../components/images/website-img/PoseidonSaints2.jpeg';

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
  const [saintCategoriesData, setSaintCategoriesData] = useState([]);

  useEffect(() => {
    const fetchSaintsCategoriesData = async () => {
      let url = 'http://localhost:3000/website';
      const response = await fetch(url);
      const data = await response.json();
      setSaintCategoriesData(data);
    };
    fetchSaintsCategoriesData();
  }, []);

  const saintCategories = saintCategoriesData[0]?.saintsCategory?.map(addImageToCategory);

  return (
    <Flex
      justifyContent='center'
      wrap='wrap'
    >
      {saintCategories?.map((category) => (
        <Box key={category.name}>
          <Link to={category.path}>
          <Image
            style={imageStyles}
            _hover={{ filter: 'brightness(115%)', ...imageHoverStyles }}
            w={{ base: '400px', sm: '450px', md: '500px', lg: '650px' }}
            h={{ base: '210', sm: '270px', md: '320px', lg: '400px' }}
            mt={{ base: '6px', sm: '8px', md: '10px', lg: '30px' }}
            mx={{ sm: 'none', md: '10px', lg: '35px' }}
            borderRadius='20px'
            src={category.image}
            alt={category.name}
          />
          </Link>
        </Box>
      ))}
    </Flex>
  );
};

export default MiddleContent;