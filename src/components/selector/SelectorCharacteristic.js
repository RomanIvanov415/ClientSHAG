import React, { Component } from 'react'
import SelectorHeader from './SelectorHeader'

export default class SelectorCharacteristic extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectorIsOpened: false,
        }
        this.toggleSelector = this.toggleSelector.bind(this)
    }
    toggleSelector(){
        this.setState({selectorIsOpened: !this.state.selectorIsOpened})
        console.log('selector')
    }
    render() {
        return (
            <div className='selectors__characteristics selectors__section'>
                <SelectorHeader title='Характеристика 1' toggle={this.toggleSelector}/>
                <div className='selectors__characteristics-body' style={{display: this.state.selectorIsOpened ? 'flex' : 'none'}}>
                    <div className='selectors__characteristics-checkbox' id='selectors__characteristics-checkbox'>
                        <input type='checkbox'/>
                        <label for='selectors__characteristics-checkbox'>
                            <div className='icon-check'></div>
                        </label>
                    </div>
                    <div className='selectors__characteristics-quantity'>00</div>
                </div>
            </div>
        )
    }
}
