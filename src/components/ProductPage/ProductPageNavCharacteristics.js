import React, { Component } from 'react'

export default class ProductPageNavCharacteristics extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className='product-page__characteristics-nav-point'>
                <div className='product-page__characteristics-nav-point-one'>
                    <div className='product-page__characteristics-nav-point-name'>Метка</div>
                    <div className='product-page__characteristics-nav-point-value'>Новинка, распродажа</div>
                </div>
                <div className='product-page__characteristics-nav-point-one'>
                    <div className='product-page__characteristics-nav-point-name'>Характеристика</div>
                    <div className='product-page__characteristics-nav-point-value'>10, 20</div>
                </div>
                <div className='product-page__characteristics-nav-point-one'>
                    <div className='product-page__characteristics-nav-point-name'>Цвет</div>
                    <div className='product-page__characteristics-nav-point-value'>Вишня</div>
                </div>
                <div className='product-page__characteristics-nav-point-one'>
                    <div className='product-page__characteristics-nav-point-name'>Бренд</div>
                    <div className='product-page__characteristics-nav-point-value'>Apple</div>
                </div>
            </div>
        )
    }
}
