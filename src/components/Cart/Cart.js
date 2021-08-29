import React, { Component } from 'react'
import ProductInCart from './ProductInCart'
import { Link } from 'react-router-dom' 

export default class Cart extends Component {
    render() {
        return (
            <div className='cart'>
                <div className='container'>
                    <div className='cart__shopping-list'>
                        <ProductInCart/>
                        <ProductInCart/>
                        <ProductInCart/>
                        <ProductInCart/>
                        <ProductInCart/>
                        <ProductInCart/>
                        
                    </div>
                    <div className='cart__tools'>
                        <div className='cart__total'>
                            <div>Итого:</div>
                            <div className='cart__total-price'>217 €</div>
                        </div>
                        <div className='cart__promo'>
                            <input className='cart__promo-input' type='text' placeholder='Промо-код'/><button className='cart__to-apply-promo'>Применить</button>
                        </div>
                        <button className='cart__checkout'>Оформить заказ</button>
                        <Link to='' className='cart__continue-shopping'>Продолжить покупки</Link>
                    </div>
                </div>           
            </div>
        )
    }
}
