import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Burger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            burgerIsOpened: false,
            submenuIsOpened: false,

        }
        this.openBurger = this.openBurger.bind(this)
        this.closeBurger = this.closeBurger.bind(this)
        this.openSubmenu = this.openSubmenu.bind(this)
        this.closeSubmenu = this.closeSubmenu.bind(this)
    }
    openBurger(){
        this.setState({
            burgerIsOpened: true
        })
    }
    closeBurger(){
        this.setState({
            burgerIsOpened: false
        })
    }
    openSubmenu(){
        this.setState({
            submenuIsOpened: true,
        })
    }
    closeSubmenu(){
        this.setState({
            submenuIsOpened: false,
        })
    }
    render() {
        return (
                <div className='burger'>
                                <button className='burger__button' onClick={this.openBurger}>
                                    <div className='burger__line'></div>
                                    <div className='burger__line'></div>
                                    <div className='burger__line'></div>
                                </button>
                                <div className='burger__func-buttons'>
                                    <NavLink className='burger__like icon-like' to='/favorites'></NavLink>
                                    <NavLink className='burger__cart icon-shopping-cart' to ='/cart'></NavLink>
                                    <NavLink className='burger__auth icon-user' to="/login"></NavLink>
                                </div>
                                <div className='burger__menu' style={{
                                    left: this.state.burgerIsOpened ? 0 : '-75%',
                                }}>
                                    <div className='icon-close' style={{
                                        display: this.state.submenuIsOpened ? 'block' : 'none',
                                    }} onClick={this.closeSubmenu}></div>
                                    <div className='burger__menu-title'>МЕНЮ</div>
                                    <div className='burger__menu-point icon-down-arrow' style={{
                                        left: (this.state.burgerIsOpened ? this.state.submenuIsOpened : false) ? '-100%' : 0 
                                    }} onClick={this.openSubmenu}>Пункт меню</div>
                                    <div className='burger__menu-subpoints' style={{
                                        left: this.state.submenuIsOpened ? 0 : '100%'
                                    }}>
                                        <div className='burger__menu-subpoint' >Подпункт</div>
                                        <div className='burger__menu-subpoint'>Подпункт</div>
                                        <div className='burger__menu-subpoint'>Подпункт</div>
                                        <div className='burger__menu-subpoint'>Подпункт</div>
                                        <div className='burger__menu-subpoint'>Подпункт</div>
                                        <div className='burger__menu-subpoint'>Подпункт</div>
                                    </div>
                                    <div className='burger__menu-point icon-down-arrow' style={{
                                        left: (this.state.burgerIsOpened ? this.state.submenuIsOpened : false) ? '-100%' : 0 
                                    }} onClick={this.openSubmenu}>Пункт меню
                                   
                                    </div>
                                    <div className='burger__menu-point icon-down-arrow' style={{
                                        left: (this.state.burgerIsOpened ? this.state.submenuIsOpened : false) ? '-100%' : 0 
                                    }} onClick={this.openSubmenu}>Пункт меню
                                   </div>
                                    <div className='burger__menu-point icon-down-arrow' style={{
                                        left: (this.state.burgerIsOpened ? this.state.submenuIsOpened : false) ? '-100%' : 0 
                                    }} onClick={this.openSubmenu}>Пункт меню
                                    </div>
                                    <div className='burger__menu-point icon-down-arrow' style={{
                                        left: (this.state.burgerIsOpened ? this.state.submenuIsOpened : false) ? '-100%' : 0 
                                    }} onClick={this.openSubmenu}>Пункт меню
                                   </div>
                                </div>
                                {this.state.burgerIsOpened && 
                                <div className='burger__shadow' onClick={this.closeBurger}></div>
                                }
                            
                        </div>
                       )
                   }
               }
            

