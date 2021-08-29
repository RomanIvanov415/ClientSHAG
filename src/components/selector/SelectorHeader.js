import React, { Component } from 'react'

export default class SelectorHeader extends Component{
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className='selectors__header' onClick={this.props.toggle}>
                <div className='selectors__header-title'>{this.props.title}</div>
                <div className='icon-down-arrow'></div>
            </div>
        )
    }
}
