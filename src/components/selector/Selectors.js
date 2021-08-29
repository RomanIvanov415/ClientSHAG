import React, { Component } from 'react'
import SelectorPrices from './SelectorPrices'
import SelectorDisplayAndSearch from './SelectorDisplayAndSearch'
import SelectorCharacteristic from './SelectorCharacteristic'

export default class Selectors extends Component {
    constructor(props){
        super(props)

    }
    render() {
        return (
            <div className='selectors' style={{left: this.props.isOpened ? 0 : '-100%'}}>
                <SelectorDisplayAndSearch/>
                <SelectorPrices/>
                <SelectorCharacteristic/>
                <button className='selectors__reset selectors__section'>Сбросить</button>
                <div className='selectors__quantity-of-products selectors__section'>Найдено товаров: <div className='selectors__quantity-of-products-number'>10</div></div>
            </div>
        )
    }
}
