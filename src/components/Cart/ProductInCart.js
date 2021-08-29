import React, { Component } from 'react'

export default class ProductInCart extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className='product-in-cart'>
                <div className='product-in-cart__information'>
                    <div className='product-in-cart__image'></div>
                    <div className='product-in-cart__text'>
                        <div className='product-in-cart__name'>Название товара</div>
                        <div className='product-in-cart__price'>217 € / шт</div>
                    </div>
                </div>
                <div className='product-in-cart__tools'>
                    <div className='product-in-cart__counter'>
                        <button className='product-in-cart__counter-button-left'><div className='icon-minus-sign'></div></button>
                        <div className='product-in-cart__counter-number'>1</div>
                        <button className='product-in-cart__counter-button-right'><div className='icon-plus'></div></button>
                    </div>
                    <button className='product-in-cart__delete-button'><div className='icon-delete'></div></button>
                </div>
            </div>
        )
    }
}
