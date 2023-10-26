import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { HeartProvider } from './context/heartProvider';
import ScrollToTop from '../../cosmos/src/components/UI/ScrollToTop';
import HomePage from './pages/Home';
import About from './pages/About';
import Inventory from './pages/Inventory';
import Rules from './pages/Rules';
import Characters from './pages/Characters';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/Error';
import CharacterDetails from './pages/CharactersDetails';
// import MainScreen from './pages/MainScreen';
// import Chapter1 from './pages/Chapter1';
// import Introduction from './components/gameComponents/screens/Introduction';
// import FightComponent from './components/gameComponents/screens/FightComponent';
// import Congratulations from './components/gameComponents/screens/Congratulations';
// import TryAgain from './components/gameComponents/screens/TryAgain';
// import GameOver from './components/gameComponents/screens/GameOver';
import CosmosWarriors from './pages/CosmosWarriors';

const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />, errorElement: <ErrorPage />, children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <About /> },
      { path: 'rules', element: <Rules /> },
      { path: 'inventory', element: <Inventory /> },
      { path: 'characters', element: <Characters /> },
      { path: 'characters/:saintsId', element: <CharacterDetails /> },
    ]
  },
  // { path: 'main-screen', element: <MainScreen />, errorElement: <ErrorPage /> },
  // { path: 'chapter1', element: <Chapter1 />, errorElement: <ErrorPage />, children: [
  //   { index: true, element: <Introduction /> },
  //   { path: 'fight', element: <FightComponent /> },
  //   { path: 'congratulations', element: <Congratulations /> },
  //   { path: 'try-again', element: <TryAgain /> },
  //   { path: 'game-over', element: <GameOver /> },
  // ] },
  { path: 'cosmos-warriors', element: <CosmosWarriors />, errorElement: <ErrorPage /> },
]);

function App() {
  return (
    <HeartProvider>
    <Box m='auto'>
      <RouterProvider router={router}>
      <ScrollToTop />
      </RouterProvider>
    </Box>
    </HeartProvider>
  );
}

export default App;