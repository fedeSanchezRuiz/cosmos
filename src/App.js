import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import About from './pages/About';
import Cloths from './pages/Cloths';
import Rules from './pages/Rules';
import Characters from './pages/Characters';
import RootLayput from './pages/RootLayout';
import ErrorPage from './pages/Error';
import './App.css';
import { Box } from '@chakra-ui/react';
import CharacterDetails from './pages/CharactersDetails';

const router = createBrowserRouter([
  {
    path: '/', element: <RootLayput />, errorElement: <ErrorPage />, children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <About /> },
      { path: 'rules', element: <Rules /> },
      { path: 'cloths', element: <Cloths /> },
      { path: 'characters', element: <Characters /> },
      { path: 'characters/:saintsId', element: <CharacterDetails /> },
    ]
  },
])

function App() {
  return (
    <Box m='auto'>
      <RouterProvider router={router} />
    </Box>
  );
}

export default App;
