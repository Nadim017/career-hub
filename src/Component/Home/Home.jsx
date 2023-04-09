import React from 'react';
import Banner from './Banner/Banner';
import CategoryList from './CategoryList/CategoryList';
import { Outlet } from 'react-router-dom';
import FeaturedJob from './FeaturedJob/FeaturedJob';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CategoryList></CategoryList>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
