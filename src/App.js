import React, { Component } from 'react';
import './index.css';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

import Navbar from "./layout/Navbar";
import Home from './components/projects/Home';
// import Recipes from './layout/recipe navigation';
import AddRecipe from './components/projects/add recipe';
import Login from './components/autentication/login';
import SignUp from './components/autentication/signUp'
import ProjectDetails from "./components/projects/Project Details";



class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <header className="header d-flex">
              <div className="brand-logo">
                  <Link to="/" className='header-links'>Delicious Recipes</Link>
              </div>
              <Navbar/>
          </header>
          <main className="main">
              <Switch>
                  <Route exact path='/' component={Home}/>
                  <Route path='/add_recipe' component={AddRecipe}/>
                  <Route path='/login' component={Login}/>
                  <Route path='/authentication' component={SignUp}/>
                  <Route path='/project/:id' component={ProjectDetails}/>
              </Switch>
          </main>
        </BrowserRouter>
    )
  }
}

export default App;
