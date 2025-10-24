import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { HomePage } from '../pages/Home';
import { PokemonDetailsPage } from '../pages/PokemonDetails';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ErrorBoundary>
        <HomePage />
      </ErrorBoundary>
    ),
  },
  {
    path: '/pokemon/:id',
    element: (
      <ErrorBoundary>
        <PokemonDetailsPage />
      </ErrorBoundary>
    ),
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
