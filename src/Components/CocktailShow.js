import React from 'react'
import { getOneCocktail} from '../lib/api'
import useFetch from '../utils/useFetch'


export default function CocktailShow({ match }) {
  const cocktailId = match.params.id
  // console.log(match.params)
  const { data: oneCocktail, loading} = useFetch(getOneCocktail, cocktailId)

  return (
    <div className="section-wrapper">
       {loading ? 
    console.log('loading')
    :
      <div className='surround-show'>
        <h1>{oneCocktail.drinks[0].strDrink}</h1>
        <div className="show-top">
        <img className="img-show" src={oneCocktail.drinks[0].strDrinkThumb} alt={oneCocktail.drinks[0].strDrink}></img>
        <div className='ingredients'>
          <h3>Ingredients</h3>
          <ul>
            <li>{oneCocktail.drinks[0].strIngredient1}</li>
            <li>{oneCocktail.drinks[0].strIngredient2}</li>
            <li>{oneCocktail.drinks[0].strIngredient3}</li>
            <li>{oneCocktail.drinks[0].strIngredient4}</li>
            <li>{oneCocktail.drinks[0].strIngredient5}</li>
            <li>{oneCocktail.drinks[0].strIngredient6}</li>
            <li>{oneCocktail.drinks[0].strIngredient7}</li>
            <li>{oneCocktail.drinks[0].strIngredient8}</li>
            <li>{oneCocktail.drinks[0].strIngredient9}</li>
            <li>{oneCocktail.drinks[0].strIngredient10}</li>
            <li>{oneCocktail.drinks[0].strIngredient11}</li>
          </ul>
        </div>
        </div>
        <div className="instructions">
          <h3>Mix Instructions</h3>
          <p>{oneCocktail.drinks[0].strInstructions}</p>
        </div>

      </div>
}
    </div>
  )

}