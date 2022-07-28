import React from 'react';
import './App.scss';
import { Routes , Route } from 'react-router-dom';
import { useMediaQuery } from '@mui/material'; 
import { useTheme } from '@mui/material/styles';
// component 
import Loader from './components/compound/Loader';
import Annouencement from './components/compound/Annouence';
import Navbar from './components/compound/Navbar';
import MuiDrawer from './components/compound/Drawer';
import NewsLetter from './components/compound/NewsLetters';
import Footer from './components/compound/Footer';

// lazy routes 
const LazyHome = React.lazy(() => import('./Pages/Home'));
const LazyLogin = React.lazy(() => import('./Pages/Login'));
const LazyRegister = React.lazy(() => import('./Pages/Register'));
const LazyShop = React.lazy(() => import('./Pages/Shop'));
const LazyContact = React.lazy(() => import('./Pages/Contact'));
const LazyAbout = React.lazy(() => import('./Pages/About'));
const LazyShoppingCart = React.lazy(() => import('./Pages/ShopCart'));
const LazyWishList = React.lazy(() => import('./Pages/Wishlist'));
const LazyCompare = React.lazy(() => import('./Pages/Compare'));



function App() {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div className="App">
      <Annouencement />
      {isTablet ? (
            <MuiDrawer />
          ) : (
            <Navbar />
          )}
      <Routes>
        <Route path='/' element={
            <React.Suspense fallback={<Loader />}>
              <LazyHome />
            </React.Suspense>
          }></Route>
        <Route path='login' element={
            <React.Suspense fallback={<Loader />}>
              <LazyLogin />
            </React.Suspense>
          }></Route>
        <Route path='register' element={
            <React.Suspense fallback={<Loader />}>
              <LazyRegister />
            </React.Suspense>
          }></Route>
        <Route path='shop' element={
            <React.Suspense fallback={<Loader />}>
              <LazyShop />
            </React.Suspense>
          }></Route>
        <Route path='contact' element={
            <React.Suspense fallback={<Loader />}>
              <LazyContact />
            </React.Suspense>
          }></Route>
        <Route path='about' element={
            <React.Suspense fallback={<Loader />}>
              <LazyAbout />
            </React.Suspense>
          }></Route>
        <Route path='shopping-cart' element={
            <React.Suspense fallback={<Loader />}>
              <LazyShoppingCart />
            </React.Suspense>
          }></Route>
        <Route path='wishlist' element={
            <React.Suspense fallback={<Loader />}>
              <LazyWishList />
            </React.Suspense>
          }></Route>
        <Route path='compare' element={
            <React.Suspense fallback={<Loader />}>
              <LazyCompare />
            </React.Suspense>
          }></Route>
      </Routes>
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
