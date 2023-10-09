import { Flex, Image, Box } from "@chakra-ui/react";
import seiya from '../bronze-img/SeiyaPegasus2.jpeg';
import shiryu from '../bronze-img/ShiryuDragon2.jpeg';
import hyoga from '../bronze-img/HyogaCygnus2.jpeg';
import shun from '../bronze-img/ShunAndromeda.jpeg';
import ikki from '../bronze-img/IkkiPhoenix2.jpeg';
import jabu from '../bronze-img/JabuUnicorn2.jpeg';
import ban from '../bronze-img/BanLeon.jpeg';
import geki from '../bronze-img/GekiOso.jpeg';
import ichi from '../bronze-img/IchiHydra.jpeg';
import nachi from '../bronze-img/NachiLobo.jpeg';

const saintsList = [
  { name: 'Seiya', country: 'Japan', age: '13', height: '1.65cm', weight: '53kg', cloth: 'Pegasus', attacks: ['Pegasus Meteor Fist', 'Pegasus Comet Fist'], source: seiya },
  { name: 'Shiryu', country: 'China', age: '14', height: '1.72cm', weight: '53kg', cloth: 'Dragon', attacks: ['Rozan Rising Dragon', 'Rozan Flying Dragon'], source: shiryu },
  { name: 'Hyoga', country: 'Russia', age: '14', height: '1.73cm', weight: '60kg', cloth: 'Cygnus', attacks: ['Diamond Dust', 'Aurora Thunder Attack'], source: hyoga },
  { name: 'Shun', country: 'Japan', age: '13', height: '1.65cm', weight: '51kg', cloth: 'Andromeda', attacks: ['Nebula Chain', 'Rolling Defense'], source: shun },
  { name: 'Ikki', country: 'Japan', age: '15', height: '1.75cm', weight: '62kg', cloth: 'Phoenix', attacks: ["Phoenix's Wings Rise", "Phoenix's Illusion Demon Fist"], source: ikki },
  { name: 'Jabu', country: 'Japan', age: '13', height: '1.65cm', weight: '55kg', cloth: 'Unicorn', attacks: ['Unicorn Gallop'], source: jabu },
  { name: 'Ban', country: 'Japan', age: '14', height: '1.81cm', weight: '83kg', cloth: 'Lionet', attacks: ['Lionet Bomber'], source: ban },
  { name: 'Geki', country: 'Japan', age: '15', height: '1.88cm', weight: '102kg', cloth: 'Bear', attacks: ['Hanging Bear'], source: geki },
  { name: 'Ichi', country: 'Japan', age: '14', height: '1.70cm', weight: '56kg', cloth: 'Hydra', attacks: ['Hydra Fangs'], source: ichi },
  { name: 'Nachi', country: 'Japan', age: '14', height: '1.71cm', weight: '57kg', cloth: 'Wolf', attacks: ['Dead Howling'], source: nachi },
];

const BronzeSaints = () => {

  // function fetchBronzeSaintsHandler() {
  //   fetch('https://cosmos-92e61-default-rtdb.firebaseio.com/bronze.json').then(response => {
  //     return response.json();
  //   }).then(data => {
  //     data.results
  //   });
  // }

  const cardStyle = {
    w: '140px',
    justifyContent: 'left',
  }

  return (
      <Flex
          mt='3%'
          textAlign='center'
          justifyContent='center'
          alignItems='center'
          wrap='wrap'
        >
          {saintsList.map(saint => 
          <Flex flexDir='row'  key={saint.name} justifyContent='center' alignItems='center' textAlign='center' flexWrap='wrap'>
            <Image w='50%' key={saint.source} src={saint.source} margin= '3% auto' />
            <Flex fontFamily='ARCADECLASSIC' fontSize={{ sm:'1.2rem', md:'1.3rem', lg:'1.5rem', xl:'1.5rem' }} h={{base:'179px', sm:'250px', md:'388px', lg:'492px', xl:'492px'}}  w='50%' bg='linear-gradient(to bottom, #A55628, #CD7F32, #E2A45C)' flexDir='column' textAlign='left' justifyContent='space-evenly' alignItems='center' border='4px solid #7E421C' flexWrap='wrap' >
              <Flex sx={{...cardStyle}}><Box fontWeight='extrabold'>Name:</Box><Box fontWeight='medium'>{saint.name}</Box></Flex>
              <Flex sx={{...cardStyle}}><Box fontWeight='extrabold'>Country:</Box><Box fontWeight='medium'>{saint.country}</Box></Flex>
              <Flex sx={{...cardStyle}}><Box fontWeight='extrabold'>Age:</Box><Box fontWeight='medium'>{saint.age}</Box></Flex>
              <Flex sx={{...cardStyle}}><Box fontWeight='extrabold'>Height:</Box><Box fontWeight='medium'>{saint.height}</Box></Flex>
              <Flex sx={{...cardStyle}}><Box fontWeight='extrabold'>Weight:</Box><Box fontWeight='medium'>{saint.weight}</Box></Flex>
              <Flex sx={{...cardStyle}}><Box fontWeight='extrabold'>Cloth:</Box><Box fontWeight='medium'>{saint.cloth}</Box></Flex>
              {/* <Box fontWeight='extrabold'><Flex>Cloth:<Box fontWeight='medium'>{saint.attacks}</Box></Flex></Box> */}
            </Flex>
          </Flex>)}
        </Flex>
  )
};

export default BronzeSaints;