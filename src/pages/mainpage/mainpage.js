import React from 'react';
import NewProducts from './newProducts';
import Sales from './sales';
import BestSellers from './bestseller';
import SocialIcons from '../social_media/social_media'


const MainPage = () => {
  return (
    
    <div>
      <NewProducts />
      <Sales />
      <BestSellers />
      <SocialIcons />  
    </div>
      
  );
};

export default MainPage;