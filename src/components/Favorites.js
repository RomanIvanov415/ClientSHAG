import React, { Component } from 'react'
import ProductCard from './ProductCard'

export default class Favorites extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className='favorites'>
                <div className='container'>
                    <div className='favorites__breadcrumbs'><a>Главная</a> / <a>Избранное</a></div>
                    <div className='favorites__title'>Избранное</div>
                    <div className='favorites__products'>
                        <div className='favorites__product'>
                            <ProductCard/>
                        </div>
                        <div className='favorites__product'>
                            <ProductCard/>
                        </div>
                        <div className='favorites__product'>
                            <ProductCard/>
                        </div>
                        <div className='favorites__product'>
                            <ProductCard/>
                        </div>
                        <div className='favorites__product'>
                            <ProductCard/>
                        </div>
                        <div className='favorites__product'>
                            <ProductCard/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
