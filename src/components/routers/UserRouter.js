import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'

import Footer from '../Footer'
import Category from '../Category'
import ProductPage from '../ProductPage/ProductPage';
import Cart from '../Cart/Cart'
import Favorites from '../Favorites';
import PrivacyPolicy from '../PrivacyPolicy';
import ExchangeAndReturn from '../ExchangeAndReturn';
import Blog from '../Blog/Blog';
import Article from '../Article';
import HeaderCatalog from '../HeaderCatalog';
import Registration from '../Registration';
import Login from '../Login';
import ChangePassword from '../ChangePassword';
import HomePage from '../HomePage'
import Header from '../Header'

export default function UserRouter() {
    return (
        <div className='user'>
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
          <Redirect to='/'></Redirect>
          </Switch>
          <Footer/>
          </div>
    )
}
