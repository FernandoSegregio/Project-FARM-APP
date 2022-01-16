import React from 'react';
import FavoriteRecipesCard from '../components/body-components/FavoriteRecipesCard';
import ExploreHeader from '../components/ExploreHeader';
import Footer from '../components/Footer';

function FavoriteRecipes() {
  const pageName = 'Receitas Favoritas';

  return (
    <div>
      <ExploreHeader pageName={ pageName } />
      <FavoriteRecipesCard />
      <Footer />
    </div>
  );
}

export default FavoriteRecipes;
