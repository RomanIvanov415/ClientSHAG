import React, { Component } from 'react'
import ProductCard from './ProductCard'

export default class Article extends Component {
    render() {
        return (
            <div className='article'>
            <div className='container'>
                <div className='article__breadcrumbs'>
                    <a className='article__breadcrumb'>Главная</a> / <a className='article__breadcrumb'>Блог</a> / <a className='article__breadcrumb'>Статья</a>
                </div>
                <div className='article__title'>Новость</div>
                <div className='article__content'>
                    Содержание новости
                </div>
                <div className='article__cards'>
                    <div className='article__card'>
                        <ProductCard/>
                    </div>
                    <div className='article__card'>
                        <ProductCard/>
                    </div>
                    <div className='article__card'>
                        <ProductCard/>
                    </div>
                    <div className='article__card'>
                        <ProductCard/>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
