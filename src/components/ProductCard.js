import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ProductCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            pickedTag: null,
        }
        this.pickThis = this.pickThis.bind(this)
    }
    pickThis(number){
        this.setState({
            pickedTag: number 
        })
    }
    render() {
        return (
            <Link to='/category/product' className='product-card'>
                <div className='product-card__picture'></div>
                <div className='product-card__name'>Название товара</div>
                <div className='product-card__characteristic'>
                    <div className='product-card__characteristic-name'>Характеристика</div>
                    <div className='product-card__characteristic-tags'>
                        <div className='product-card__characteristic-tag' onClick={() => this.pickThis(1)} style={{
                            backgroundColor: this.state.pickedTag === 1 ? 'rgb(0, 75, 214)' : 'rgb(219, 219, 219)',
                            color: this.state.pickedTag === 1 ? '#fff' : '#000'
                        }}>Тег1</div>
                        <div className='product-card__characteristic-tag' onClick={() => this.pickThis(2)} style={{
                            backgroundColor: this.state.pickedTag === 2 ? 'rgb(0, 75, 214)' : 'rgb(219, 219, 219)',
                            color: this.state.pickedTag === 2 ? '#fff' : '#000'
                        }}>Тег2</div>
                    </div>
                </div>
                <div className='product-card__price'>5000Р</div>
                <div className='product-card__tags'>
                    <div className='product-card__tag'>Новинка</div>
                </div>
                <div className='product-card__like icon-like'></div>
                <Link to='/cart' className='product-card__toCart'>В корзину<div className='icon-shopping-cart'></div></Link>
            </Link>
        )
    }
}
