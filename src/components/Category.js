import React, { Component } from 'react'
import Selectors from './selector/Selectors'
import CategoryProducts from './CategoryProducts'

export default class Category extends Component {
    constructor(props){
        super(props)
        this.state ={
            showSelectors: false,
        }
        this.toOpenSelectors = this.toOpenSelectors.bind(this)
    }
    toOpenSelectors(){
        this.setState({showSelectors: true})
    }
    render() {
        return (

            <div className='container'>
            <div className='category'>
                <Selectors isOpened={this.state.showSelectors}/>
                <CategoryProducts toOpen={this.toOpenSelectors}/>
                <div className='category__shadow' style={{display: this.state.showSelectors ? 'block' : 'none'}} onClick={() => this.setState({ showSelectors: false})}></div>
            </div>
            </div>
        )
    }
}
