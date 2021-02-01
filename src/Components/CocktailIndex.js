import React from 'react'
import { getAlcoholSelection } from '../lib/api'
import useFetch from '../utils/useFetch'
import { Link } from 'react-router-dom'

export default function CocktailIndex({ match }) {
  const alchohol = match.params.alcohol
  
  const { data: alcoholSelection, loading, error } = useFetch(getAlcoholSelection, alchohol)

  // console.log(match)
  // console.log(error)

    return (
      <div className="section-wrapper">
      <h1 className="index-h1">{alchohol}</h1>
      
      <div className="thumb-div">
      {loading ? 
      console.log('loading')
      :
      alcoholSelection.drinks.map(cocktail => (
        <div className="thumb-cocktail"
        key={cocktail.idDrink}>
        {/* <h2 className="h2-thumb">{cocktail.strDrink}</h2> */}
        <Link to={`/cocktails/${cocktail.idDrink}`}>
        <img className="img-thumb" 
        src={cocktail.strDrinkThumb} 
        alt={cocktail.strDrink}
        />
        </Link>
        </div>
        ))
      }
      </div>
  
    </div>
    )
}