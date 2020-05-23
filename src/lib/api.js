import axios from 'axios'

const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1'

export const getRandomCocktail = () => {
  return axios.get(`${baseUrl}/random.php`)
}

export const getOneCocktail = id => {
  return axios.get(`${baseUrl}/lookup.php?i=${id}`)
}

export const getAlcoholList = () => {
  return axios.get(`${baseUrl}/list.php?i=list`)
}

export const getAlcoholSelection = alcohol => {
  return axios.get(`${baseUrl}/filter.php?i=${alcohol}`)
}

export const getCocktailByName = cocktail => {
  return axios.get(`${baseUrl}/search.php?s=${cocktail}`)
}
