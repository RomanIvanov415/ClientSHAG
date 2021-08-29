import React, { Component } from 'react'
import Slider from './Slider'
import HomePageCategories from './HomePageCategories'
import CategoryHomePage from './CategoryHomePage'


export default class HomePage extends Component {
    render() {
        return (
            <div className='home-page'>
                <Slider/>
                <HomePageCategories/>
                <CategoryHomePage content={{
                    path: 'Электроника',
                }}/>
                <CategoryHomePage content={{
                    path: 'Мебель',
                }}/>
                <CategoryHomePage content={{
                    path: 'Одежда',
                }}/>
            </div>
        )
    }
}
