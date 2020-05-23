import React from 'react'
import { getAlcoholSelection } from '../lib/api'
import useFetch from '../utils/useFetch'
import { Link } from 'react-router-dom'

export default function CocktailIndex({ match }) {
  const alchohol = match.params.alcohol
  console.log(alchohol)
  const { data: alcoholSelection, loading } = useFetch(getAlcoholSelection, alchohol)

    return (
      <div className="section-wrapper">
      <h1>{alchohol}</h1>
      
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