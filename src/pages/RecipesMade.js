import React from 'react';
import DoneRecipesCard from '../components/body-components/DoneRecipesCard';
import ExploreHeader from '../components/ExploreHeader';
import Footer from '../components/Footer';

function RecipesMade() {
  const pageName = 'Receitas Feitas';

  return (
    <div>
      <ExploreHeader pageName={ pageName } />
      <DoneRecipesCard />
      <Footer />
    </div>
  );
}

export default RecipesMade;
