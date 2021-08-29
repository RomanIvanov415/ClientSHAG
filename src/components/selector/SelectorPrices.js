import React, { Component } from 'react'
import SelectorHeader from './SelectorHeader'
import SelectorSlider from './SelectorSlider'

export default class SelectorPrices extends Component {
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
            <div className='selectors__prices selectors__section'>
                <SelectorHeader title='Цена' toggle={this.toggleSelector}/>
                <SelectorSlider isOpened={this.state.selectorIsOpened}/>
            </div>
        )
    }
}
