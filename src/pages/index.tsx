import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const General = lazy(() => import('./General'));
const ActorPage = lazy(() => import('./ActorPage'));
const Authorization = lazy(() => import('./Authorization'));
const Home = lazy(() => import('./Home'));
const MovieList = lazy(() => import('./MovieList'));
const MoviePage = lazy(() => import('./MoviePage'));
const MovieReviews = lazy(() => import('./MovieReviews'));
const AdminPanel = lazy(() => import('./AdminPanel'));

export const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<General />}>
        <Route path='/ActorPage' element={<ActorPage />} />
        <Route path='/Authorization' element={<Authorization />} />
        <Route path='/' element={<Home />} />
        <Route path='/MovieList' element={<MovieList />} />
        <Route path='/MoviePage' element={<MoviePage />} />
        <Route path='/MovieReviews' element={<MovieReviews />} />
        <Route path='/AdminPanel' element={<AdminPanel />} />
      </Route>
    </Routes>
  );
};
