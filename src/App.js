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

export default class App extends React.Component {

  render() {
    return (
      <div className="page-wrap">
        <BrowserRouter>
        <Nav />
        <Searchbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path='/cocktails/:id' component={CocktailShow}/>
          <Route path="/searchresults/:cocktail" component={SearchResults}/>
          <Route path="/:alcohol" component={CocktailIndex}/>
          <Route path="/searchresults*" component={SearchError} />
        
        </Switch>
        </BrowserRouter>
      </div>
    )
  }
}


