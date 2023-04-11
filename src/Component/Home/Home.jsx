import React from 'react';
import Banner from './Banner/Banner';
import CategoryList from './CategoryList/CategoryList';
import { Outlet } from 'react-router-dom';

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
