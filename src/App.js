import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { AuthProvider } from './context/authProvider';
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
  { path: 'cosmos-warriors', element:
  <AuthProvider>
    <CosmosWarriors />
  </AuthProvider>, errorElement: <ErrorPage /> },
]);

function App() {
  return (
    <AuthProvider>
    <HeartProvider>
    <Box m='auto'>
      <RouterProvider router={router}>
      <ScrollToTop />
      </RouterProvider>
    </Box>
    </HeartProvider>
    </AuthProvider>
  );
}

export default App;