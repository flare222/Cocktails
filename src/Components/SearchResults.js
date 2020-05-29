import React from 'react'
import { Link, Redirect } from 'react-router-dom'

import { getCocktailByName} from '../lib/api'
import useFetch from '../utils/useFetch'
// import SearchError from './SearchError'

export default function SearchResults({ match }) {
  const cocktail = match.params.cocktail
  const { data: cocktailName, loading, error} = useFetch(getCocktailByName, cocktail)

  console.log(match.params)

  if (!cocktail) {
    return <Redirect to="/searchresults/notfound" /> 
  }

  return (
    <div className="section-wrapper">
      <h1 className="index-h1">Search Results</h1>
      <div className="thumb-div">
          {loading && !error ? (
          console.log('loading')
          ) : cocktailName.drinks === null || !cocktailName ? (
            <Redirect to="/searchresults/notfound" /> 
          ) : (
          cocktailName.drinks.map((cocktail, i) => (
          <div className="thumb-cocktail" key={i} >
          <Link to={`/cocktails/${cocktail.idDrink}`}>
          <img className="img-thumb"src={cocktail.strDrinkThumb} alt={cocktail.strDrink}/>
          </Link>
          </div>
          ))
          )}
      

      </div>
    </div>

  )
}


