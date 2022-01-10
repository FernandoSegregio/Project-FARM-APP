import React, { useContext, useEffect } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import useClippy from 'use-clippy';
import RecipesContext from '../../context/RecipesContext';
import IngredientsList from './IngredientsList';
import shareIcon from '../../images/shareIcon.svg';
import FavoriteRecipeBtn from './FavoriteRecipeBtn';

function RecipeCard() {
  const [clipboard, setClipboard] = useClippy();
  const {
    recipe,
    getRecipe,
    doneRecipe,
    setAnyToLocalStorage,
  } = useContext(RecipesContext);
  const { pathname } = useLocation();
  const params = useParams();

  useEffect(() => {
    getRecipe(pathname, params.id);
    console.log('[RecipeDetails] Fetch do Recipe');
  }, [getRecipe, params, pathname]);

  function getCategory(item) {
    if (item.type === 'comidas') {
      return item.strCategory;
    }

    return item.strAlcoholic;
  }

  function getClipboard() {
    const { href } = window.location;
    setClipboard(href);
  }

  return (
    <div>
      <img
        className="image-details"
        src={ recipe.image }
        alt={ recipe.title }
        data-testid="recipe-photo"
      />
      <div className="header-recipe">
        <div>
          <h2 data-testid="recipe-title">{ recipe.title }</h2>
          <p
            data-testid="recipe-category"
          >
            {getCategory(recipe)}
          </p>
          <div className="icons-svg">
            <input
              className="share-icon"
              alt="Compartilhar"
              data-testid="share-btn"
              onClick={ getClipboard }
              src={ shareIcon }
              type="image"
            />

            <FavoriteRecipeBtn />
          </div>
          {
            clipboard && (
              <p className="link-copy">Link copiado!</p>
            )
          }
        </div>
      </div>

      <h1>Ingredients</h1>
      <IngredientsList />
      {
        pathname.includes('in-progress') && (
          <Link to="/receitas-feitas">
            <button
              disabled={ doneRecipe }
              data-testid="finish-recipe-btn"
              type="button"
              className="button-finish-recipe"
              onClick={ () => setAnyToLocalStorage(recipe, 'doneRecipes') }
            >
              Finalizar Receita
            </button>
          </Link>
        )
      }
      <h1>Instructions</h1>
      <p
        className="instructions"
        data-testid="instructions"
      >
        {
          recipe.strInstructions
        }
      </p>

    </div>
  );
}

export default RecipeCard;
