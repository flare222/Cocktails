
import React from 'react'
import { Link, Redirect } from 'react-router-dom'

import { getCocktailByName} from '../lib/api'
import useFetch from '../utils/useFetch'
import SearchError from './SearchError'

const SearchResults = ({ match }) => {
  const cocktail = match.params.cocktail
  const { data: cocktailName, loading, error} = useFetch(getCocktailByName, cocktail)
  console.log(cocktailName, match, error)

  if (cocktailName === null) {
    console.log('error')
  }


  return (
    <div className="section-wrapper">
      <div className="thumb-div">
        {loading ? 
        console.log('loading')
        :
        cocktailName.drinks.map((cocktail, i) => (
          <div className="thumb-cocktail" key={i} >
          <Link to={`/cocktails/${cocktail.idDrink}`}>
          <img className="img-thumb"src={cocktail.strDrinkThumb} alt={cocktail.strDrink}/>
          </Link>
          </div>
          ))
        }
      </div>
    </div>

  )
}

export default SearchResults
