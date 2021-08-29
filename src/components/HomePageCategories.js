import React, { Component } from 'react'
import hpCategories0 from '../assets/img/rastr/hpCategories0.jpg'
import hpCategories1 from '../assets/img/rastr/hpCategories1.jpg'
import hpCategories2 from '../assets/img/rastr/hpCategories2.jpg'
import { Link } from 'react-router-dom'

export default class HomePageCategories extends Component {
    render() {
        return (
            <div className='container'>
            <div className='home-page-categories'>
                <Link to='/category' className='category-card' >
                    <div className='category-card__title'>Ноутбуки</div>
                    <div className='category-card__background' style={{
                    backgroundImage: `url(${hpCategories0})`
                }}></div>
                </Link>
                <Link to='/category' className='category-card'>
                    <div className='category-card__title'>Смартфоны</div>
                    <div className='category-card__background' style={{
                    backgroundImage: `url(${hpCategories1})`
                }}></div>
                </Link>
                <Link to='/category' className='category-card'>
                    <div className='category-card__title'>Аксессуары</div>
                    <div className='category-card__background' style={{
                    backgroundImage: `url(${hpCategories2})`
                }}></div>
                </Link>
            </div></div>
        )
    }
}
