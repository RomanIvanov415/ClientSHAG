import React, { Component } from 'react'
import ProductCard from './ProductCard'

export default class CategoryProducts extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className='category-products'>
                <div className='category-products__breadcrumbs'>
                    <a href=''>Главная</a> / <a href='/category'>Категория</a>
                </div>
                <div className='category-products__title'>Категория</div>
                <div className='category-products__quantity'>Товаров в категории: 10</div>
                <div className='category-products__open-selectors' onClick={() => this.props.toOpen()}>Фильтр и сортировка</div>
                <div className='category-products__cards'>
                    <div className='category-products__card'>
                        <ProductCard/>
                    </div>
                    <div className='category-products__card'>
                        <ProductCard/>
                    </div>
                    <div className='category-products__card'>
                        <ProductCard/>
                    </div>
                    <div className='category-products__card'>
                        <ProductCard/>
                    </div>
                    <div className='category-products__card'>
                        <ProductCard/>
                    </div>
                    <div className='category-products__card'>
                        <ProductCard/>
                    </div>
                    <div className='category-products__card'>
                        <ProductCard/>
                    </div>
                </div>
            </div>
        )
    }
}
