import React, { Component } from 'react'
import ProductCard from './ProductCard'

export default class CategoryHomePage extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className='category-home-page'>
               <div className='container'>
                   <div className='category-home-page__breadcrumbs'>
                       <div className='category-home-page__start-crumb'>{this.props.content.path}</div> / <div className='category-home-page__breadcrumb'>все товары</div> 
                   </div>
                   <div className='category-home-page__product-cards'>
                       <div className='category-home-page__product-card'>
                            <ProductCard/>
                        </div>
                        <div className='category-home-page__product-card'>
                            <ProductCard/>
                        </div>
                        <div className='category-home-page__product-card'>
                            <ProductCard/>
                        </div>
                        <div className='category-home-page__product-card'>
                            <ProductCard/>
                        </div>
                        <div className='category-home-page__product-card'>
                            <ProductCard/>
                        </div>
                        <div className='category-home-page__product-card'>
                            <ProductCard/>
                        </div>
                        <div className='category-home-page__product-card'>
                            <ProductCard/>
                        </div>
                        <div className='category-home-page__product-card'>
                            <ProductCard/>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}
