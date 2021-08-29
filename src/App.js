import React, {useContext} from 'react'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import './App.scss';

import UserRouter from './components/routers/UserRouter';
import AdminRouter from './components/routers/AdminRouter'
/*import Ctx from './components/Ctx'
import Header from './components/Header'
import HomePage from './components/HomePage'

import Footer from './components/Footer'
import Category from './components/Category'
import ProductPage from './components/ProductPage/ProductPage';
import Cart from './components/Cart/Cart'
import Favorites from './components/Favorites';
import PrivacyPolicy from './components/PrivacyPolicy';
import ExchangeAndReturn from './components/ExchangeAndReturn';
import Blog from './components/Blog/Blog';
import Article from './components/Article';
import HeaderCatalog from './components/HeaderCatalog';
import Registration from './components/Registration';
import Login from './components/Login';
import ChangePassword from './components/ChangePassword';*/




function App() {
  const admin = true

  return (
    <Router>
    <div className="App">
      {admin && 
        <AdminRouter/>
      }
      {!admin && 
        <UserRouter/>
      }
      {/*<Switch>
        <Route path='/' exact>
          <Header/>
          <HeaderCatalog/>
          <Switch>
          <Route path='/' exact>
            <HomePage/>
          </Route>
          <Route path="/category" exact>
            <Category/>
          </Route>
          <Route path="/category/product">
            <ProductPage/>
          </Route>
          <Route path="/cart">
            <Cart/>
          </Route>
          <Route path="/favorites">
            <Favorites/>
          </Route>
          <Route path="/privacypolicy">
            <PrivacyPolicy/>
          </Route> 
          <Route path="/exchangeandreturn">
            <ExchangeAndReturn/>
          </Route> 
          <Route path="/blog" exact>
            <Blog/>
          </Route> 
          <Route path="/blog/article:id">
            <Article/>
          </Route>
          <Route path="/registration">
            <Registration/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/changePassword">
            <ChangePassword/>
          </Route>
          </Switch>
          <Footer/>
        </Route>
        {admin &&
        <Route path='/admin'>
          ADMIN
        </Route>}
        <Redirect to='/'></Redirect>
      </Switch>*/}
    </div>
    </Router>
  )
}

export default App;
