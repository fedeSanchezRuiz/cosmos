import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import About from './pages/About';
import Cloths from './pages/Cloths';
import Rules from './pages/Rules';
import Characters from './pages/Characters';
import RootLayput from './pages/RootLayout';
import Footer from './components/Footer';
import ErrorPage from './pages/Error';
import './App.css';
//import ParticlesBackground from './components/ParticlesBackground';

const router = createBrowserRouter([
  {
    path: '/', element: <RootLayput />, errorElement: <ErrorPage />, children: [
      { index: true, element: <HomePage /> },
      { path: 'cosmos', element: <About /> },
      { path: 'rules', element: <Rules /> },
      { path: 'characters', element: <Characters /> },
      { path: 'cloths', element: <Cloths /> },
    ]
  },
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
