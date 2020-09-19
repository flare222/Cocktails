import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './styles/main.scss'

import Nav from './Components/Nav'
import Searchbar from './Components/Searchbar';
import Home from './Components/Home'
import CocktailIndex from './Components/CocktailIndex';
import CocktailShow from './Components/CocktailShow';
import SearchResults from './Components/SearchResults';
import SearchError from './Components/SearchError'
import CheckAge from './Components/CheckAge';

export default class App extends React.Component {

  render() {
    return (
      <div className="page-wrap">
        <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}> 
        <Nav />
        <Searchbar />
        <Switch>
          <Route exact path="/" component={CheckAge} />
          <Route path="/home" component={Home} />
          <Route path='/cocktails/:id' component={CocktailShow} />
          <Route path="/searchresults/notfound" component={SearchError} />
          <Route path="/searchresults/:cocktail" component={SearchResults} />
          <Route path="/list/:alcohol" component={CocktailIndex}/>
        
        </Switch>
        </BrowserRouter>
      </div>
    )
  }
}


