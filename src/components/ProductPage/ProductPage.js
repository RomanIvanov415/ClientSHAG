import React, { Component } from 'react'
import ProductPageNavMain from './ProductPageNavMain'
import ProductPageNavReviews from './ProductPageNavReviews'
import ProductPageNavCharacteristics from './ProductPageNavCharacteristics'
import { Link } from 'react-router-dom'

export default class ProductPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            openedNavPoint: 'ProductPageNavMain'
        }
        this.toOpenNavPoint = this.toOpenNavPoint.bind(this)
    }
    toOpenNavPoint(name){
        this.setState({openedNavPoint: name})
    }
    render() {
        return (
            <div className='product-page'>
                <div className='product-page__main-information'>
                    <div className='container'>
                        <div className='product-page__slider'>
                            <div className='product-page__chosen-picture'></div>
                            <div className='product-page__all-pictures'>
                                <div className='product-page__picture'></div>
                                <div className='product-page__picture product-page__picture_little-chosen'></div>
                            </div>
                        </div>
                        <div className='product-page__characteristics'>
                            <div className='product-page__breadcrumbs'>
                                <a className='product-page__breadcrumb'>Главная</a> / <a className='product-page__breadcrumb'>Категория</a> / <a className='product-page__breadcrumb'>Товар</a>
                            </div>
                            <div className='product-page__title'>Все возможности карточки товара</div>
                            <div className='product-page__vendor-code'>Артикул: <span>sk-42</span></div>
                        <div className='product-page__price'>232.00 €</div>
                        <div className='product-page__appraisal'><div className='icon-star'></div>4 / 5</div>
                        <a className='product-page__link-to-review '>Оставить отзыв</a>
                        <div className='product-page__short-description'>Краткое описание</div>
                        <div className='product-page__toggle-characteristic'>
                            <div className='product-page__toggle-characteristic-title'>Размер</div>
                            <div className='product-page__toggle-characteristic-point product-page__toggle-characteristic-point_chosen'>S</div>
                            <div className='product-page__toggle-characteristic-point'>M</div>
                        </div>
                        <div className='product-page__toggle-characteristic'>
                            <div className='product-page__toggle-characteristic-title'>Цвет</div>
                            <div className='product-page__toggle-characteristic-point'>Черный</div>
                            <div className='product-page__toggle-characteristic-point product-page__toggle-characteristic-point_chosen'>Серый</div>
                        </div>
                        <div className='product-page__are-available'>В наличии</div>
                            <div className='product-page__options'>
                                <div className='product-page__counter'>
                                    <button className='product-page__counter-button_left'><div className='icon-minus-sign'></div></button>
                                    <div className='product-page__counter-number'>1</div>
                                    <button className='product-page__counter-button_right'><div className='icon-plus'></div></button>
                                </div>
                                <Link to='/cart' className='product-page__to-cart'><div className='icon-shopping-cart'></div>В корзину</Link>
                                <div className='product-page__to-favorites icon-like'></div>  
                            </div>                          
                        </div> 
                    </div>
                </div>
                <div className='product-page__detailed-information'>
                        <nav className='product-page__nav'>
                            <div className={`product-page__nav-point ${this.state.openedNavPoint === 'ProductPageNavMain' ? 'product-page__nav-point_chosen' : ''}`} onClick={() => this.toOpenNavPoint('ProductPageNavMain')}>Главная</div>
                            <div className={`product-page__nav-point ${this.state.openedNavPoint === 'ProductPageNavCharacteristics' ? 'product-page__nav-point_chosen' : ''}`} onClick={() => this.toOpenNavPoint('ProductPageNavCharacteristics')}>Характеристики</div>
                            <div className={`product-page__nav-point ${this.state.openedNavPoint === 'ProductPageNavReviews' ? 'product-page__nav-point_chosen' : ''}`} onClick={() => this.toOpenNavPoint('ProductPageNavReviews')}>Отзывы</div>
                        </nav>
                        <div className='container'>
                            {this.state.openedNavPoint === 'ProductPageNavMain' &&
                                <ProductPageNavMain/>}
                            {this.state.openedNavPoint === 'ProductPageNavReviews' &&
                                <ProductPageNavReviews/>}
                            {this.state.openedNavPoint === 'ProductPageNavCharacteristics' &&
                                <ProductPageNavCharacteristics/>}
                        </div>
                </div>
            </div>
        )
    }
}
