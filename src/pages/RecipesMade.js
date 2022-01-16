import React from 'react';
import DoneRecipesCard from '../components/body-components/DoneRecipesCard';
import ExploreHeader from '../components/ExploreHeader';

function RecipesMade() {
  const pageName = 'Receitas Feitas';

  return (
    <div>
      <ExploreHeader pageName={ pageName } />
      <DoneRecipesCard />
    </div>
  );
}

export default RecipesMade;
