import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { AuthProvider } from './context/authProvider';
import { HeartProvider } from './context/heartProvider';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import About from './pages/About';
import Rules from './pages/Rules';
import PlayGame from './pages/PlayGame';

const Inventory = lazy(() => import('./pages/Inventory'));
const Characters = lazy(() => import('./pages/Characters'));
const CharacterDetails = lazy(() => import('./pages/CharactersDetails'));

const loading = (
  <Flex
      flexDir='column'
      textAlign='center'
    >
      <Heading
        mt='20%'
        fontFamily='ARCADECLASSIC'
        fontSize={{
          base: '30px',
          sm: '32px',
          md: '36px',
          lg: '40px',
          xl: '50px',
        }}
      >Loading...</Heading>
  </Flex>
);

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
  { path: 'play-game', element: <PlayGame />, errorElement: <ErrorPage /> },
]);

function App() {
  return (
    <AuthProvider>
      <HeartProvider>
        <Box m='auto'>
          <Suspense fallback={loading}>
            <RouterProvider router={router} />
          </Suspense>
        </Box>
      </HeartProvider>
    </AuthProvider>
  );
}

export default App;
