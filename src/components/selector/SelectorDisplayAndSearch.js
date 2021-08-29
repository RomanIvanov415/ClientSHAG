import React, { Component } from 'react'
import SelectorHeader from './SelectorHeader'

export default class SelectorDisplayAndSearch extends Component {
    constructor(props){
        super(props)
        this.state = {
            showQuantityDropdown: false,
            showOrderDropdown: false,
            selectorIsOpened: false,
            quantity: 12,
            order: 'По умолчанию',
        }
        this.toggleSelector = this.toggleSelector.bind(this)
        this.toggleQuantityDropdown = this.toggleQuantityDropdown.bind(this)
        this.toggleOrderDropdown = this.toggleOrderDropdown.bind(this)
        this.changeQuantity = this.changeQuantity.bind(this)
        this.changeOrder = this.changeOrder.bind(this)
    }
    toggleSelector(){
        this.setState({selectorIsOpened: !this.state.selectorIsOpened})
        console.log('selector')
    }
    toggleQuantityDropdown(){
        this.setState({showQuantityDropdown: !this.state.showQuantityDropdown})
        console.log(this.state.showQuantityDropdown)
    }
    changeQuantity(q){
        this.setState({quantity: q})
    }
    toggleOrderDropdown(){
        this.setState({showOrderDropdown: !this.state.showOrderDropdown})
    }
    changeOrder(o){
        this.setState({order: o})
    }
    render() {
        return (
            <div className="selectors__display-and-search selectors__section">
                <SelectorHeader title='Отображение и поиск' toggle={this.toggleSelector}/>
                <div className='selectors__display-and-search-body' style={{display: this.state.selectorIsOpened ? 'block' : 'none'}}>
                <div className='selectors__search selectors__display-and-search-point'>
                    <input type='text' className='selectors__search-input' placeholder='Поиск по категории'></input><button className='icon-magnifying-glass'></button>
                </div>
                <div className='selectors__number-of-products-displayed selectors__display-and-search-point'>
                    <div>Отображать по</div><div className='selectors__choose-quantity'  onClick={this.toggleQuantityDropdown} onPointerLeave={() => this.setState({showQuantityDropdown: false})}>{this.state.quantity} шт
                        <div className='selectors__choose-quantity-dropdown' style={{display: this.state.showQuantityDropdown ? 'block' : 'none'}}>
                            <div className='selectors__choose-quantity-dropdown-point' onClick={() => this.changeQuantity(12)} style={{backgroundColor: this.state.quantity === 12 ? 'rgb(0, 75, 214)' : '', color: this.state.quantity === 12 ? '#fff' : ''}}>12 шт</div>
                            <div className='selectors__choose-quantity-dropdown-point' onClick={() => this.changeQuantity(24)} style={{backgroundColor: this.state.quantity === 24 ? 'rgb(0, 75, 214)' : '', color: this.state.quantity === 24 ? '#fff' : ''}}>24 шт</div>
                            <div className='selectors__choose-quantity-dropdown-point' onClick={() => this.changeQuantity(48)} style={{backgroundColor: this.state.quantity === 48 ? 'rgb(0, 75, 214)' : '', color: this.state.quantity === 48 ? '#fff' : ''}}>48 шт</div>
                            <div className='selectors__choose-quantity-dropdown-point' onClick={() => this.changeQuantity(96)} style={{backgroundColor: this.state.quantity === 96 ? 'rgb(0, 75, 214)' : '', color: this.state.quantity === 96 ? '#fff' : ''}}>96 шт</div>
                        </div>
                        <div className='selectors__up-down icon-sort-arrows-couple-pointing-up-and-down'></div>
                    </div>
                </div>
                <div className='selectors__order selectors__display-and-search-point'>
                    <div>Порядок</div>
                    <div className='selectors__choose-order' onClick={this.toggleOrderDropdown} onPointerLeave={() => this.setState({showOrderDropdown: false})}>{this.state.order}
                        <div className='selectors__choose-order-dropdown' style={{display: this.state.showOrderDropdown ? 'block' : 'none'}}>
                            <div className='selectors__choose-order-dropdown-point' onClick={() => this.changeOrder('По умолчанию')}>По умолчанию</div>
                            <div className='selectors__choose-order-dropdown-point' onClick={() => this.changeOrder('По популярности')} >По популярности</div>
                            <div className='selectors__choose-order-dropdown-point' onClick={() => this.changeOrder('По возрастанию цены')} >По возрастанию цены</div>
                            <div className='selectors__choose-order-dropdown-point' onClick={() => this.changeOrder('По убыванию цены')} >По убыванию цены</div>
                            <div className='selectors__choose-order-dropdown-point' onClick={() => this.changeOrder('По новинкам')} >По новинкам</div>
                            <div className='selectors__choose-order-dropdown-point' onClick={() => this.changeOrder('По скидкам')} >По скидкам</div>
                            <div className='selectors__choose-order-dropdown-point' onClick={() => this.changeOrder('По алфавиту')} >По алфавиту</div>
                        </div>
                        <div className='selectors__up-down icon-sort-arrows-couple-pointing-up-and-down'></div>
                        </div>
                </div>
                </div>
            </div>
        )
    }
}
