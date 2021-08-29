import React, {Component} from 'react'

import Burger from './Burger'
import { NavLink } from 'react-router-dom';
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authIsOpened: false,
        };
        this.toggleAuthForm = this.toggleAuthForm.bind(this)
      }
    toggleAuthForm(){
        this.setState({authIsOpened: !this.state.authIsOpened})
    }
    
    render(){
        return(
                <header className='header'>
                <Burger/>
                <div className='container'>
                    <div className='header__top'>
                        <nav className='header-top-point-list'>
                            <NavLink className='header-top-point-list__link' to='/privacypolicy'>Политика конфиденциальности и оферта</NavLink>
                            <NavLink className='header-top-point-list__link' to='/exchangeandreturn'>Обмен и возврат</NavLink>
                            <NavLink className='header-top-point-list__link' to='/blog'>Блог</NavLink>
                            <a className='header-top-point-list__link' href='#'>Обратная связь</a>
                        </nav>
                        <div className='header-top-social-networks'>
                            <div className='header-top-social-networks__item header-top-social-networks__item_vk icon-vk' ></div>
                            <div className='header-top-social-networks__item header-top-social-networks__item_inst icon-instagram'></div>
                        </div>
                    </div>
                </div>
                <div className='header__middle header-blocks container'>
                    <div className='header-blocks__block header-blocks__block_logo'>
                        <div><span>Clothes</span>
                        <span>Internet Shop</span></div>
                    </div>
                    <div className='header-blocks__block header-blocks__block_contacts'>
                        <div>
                        <a className='header-blocks__phone-number' href='tel:+380123456789' >+380123456789</a>
                        <a className='header-blocks__e-mail' href='mailto:adr@mail.ru'>adr@mail.ru</a></div>
                    </div>
                    <div className='header-blocks__block header-blocks__block_search'>
                        <div>
                        <input type='text' id='header-search' placeholder="Поиск по каталогу"/>
                        <button className='header-blocks__search-button icon-magnifying-glass'></button></div>
                    </div>
                    <div className='header-blocks__block header-blocks__block_func-elements'>
                        <NavLink to='/favorites' className='header-blocks_element'>
                            <div className='icon-like'></div>
                                <div>
                                    <div>Избранное</div>
                                    <div>Кол-во: 0</div>
                                </div>
                        </NavLink>
                        <NavLink to='/cart' className='header-blocks_element'>
                            <div className='icon-shopping-cart'></div>
                                <div>
                                    <div>Корзина</div>
                                    <div>5000₽</div>
                            </div>
                        </NavLink>
                        <div className='header-blocks_element' onClick={this.toggleAuthForm}>
                            <div className='icon-user'></div>
                                <div>
                                    <div>Войти/Новый</div>
                                    <div>Аккаунт<div className='icon-down-arrow'></div></div>
                            </div>

                        </div>
                    </div>
                    <div className='header__auth-form little-auth-form' style={{
                        display: this.state.authIsOpened ? 'block' : 'none'
                    }}>
                        <div className='little-auth-form__auth-inputs'>
                            <div className='little-auth-form__auth-input'>
                                <label htmlFor='little-auth-form__email'>Email</label>
                                <input type='text' placeholder='email@example.com' id='little-auth-form__email' name='little-auth-form__email'/>
                            </div>
                            <div className='little-auth-form__auth-input'>
                                <label htmlFor='little-auth-form__password'>Пароль</label>
                                <input type='text' placeholder='Пароль' id='little-auth-form__password' name='little-auth-form__password'/>
                            </div>
                            <button className='little-auth-form__submit' type='submit'>Вход</button>
                        </div>
                        <div className='little-auth-form__auth-buttons'>
                            <NavLink to='/registration' className='little-auth-form__auth-button'>Регистрация</NavLink>
                            <NavLink to='/changePasword' className='little-auth-form__auth-button'>Забыли пароль?</NavLink>
                        </div>
                        
                        
                    </div>
                </div>
                
                <div className='header__to-close' onClick={this.toggleAuthForm} style={{
                    display: this.state.authIsOpened ? 'block' : 'none'
                }}></div>
            </header>
           
        )
    }
}
