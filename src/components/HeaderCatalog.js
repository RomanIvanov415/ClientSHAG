import React, { Component } from 'react'
import Catalog from './Catalog'

export default class HeaderCatalog extends Component {
    constructor(props){
        super(props)
        this.state = {
            showCatalog: false
        }
        this.toggleCatalog = this.toggleCatalog.bind(this)

    }
    toggleCatalog(){
        this.setState({
            showCatalog: !this.state.showCatalog,
        })

    }
    render() {
        return (
                <div className='header__main'>
                    <div className='container'>
                    <nav className='header__main-nav'>
                        <div className='header__main-point' onClick={this.toggleCatalog}><div>Каталог</div></div>
                    </nav>
                   
                    </div>
                    {this.state.showCatalog &&
                <div className='container' /*style={{
                    position: window.pageYOffset > 300 ? 'fixed' : 'static'
                }}*/>
                <Catalog/>
                </div>
            }
                   
                </div>


        )
    }
}
