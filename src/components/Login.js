import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Login() {
    return (
        <div className='login'>
            <div className='container'>
                <h1 className='login__title'>Вход в кабинет покупателя </h1>
                    <div className='login__form'> 
                        <input className='login__form-input'
                            id='login__form-email-or-number-input'
                            name='login__form-email-or-number-input'
                            type='text'
                            />
                        <label className='login__form-label'
                            htmlFor='login__form-email-or-number-input'
                            >Телефон или E-mail</label>
                    </div>
                    <div className='login__form'> 
                        <input className='login__form-input'
                            id='login__form-email-or-number-input'
                            name='login__form-email-or-number-input'
                            type='text'
                            />
                        <label className='login__form-label'
                            htmlFor='login__form-email-or-number-input'
                            >Пароль</label>
                    </div>
                    <button type='submit' className='login__button'>Войти</button>
                    <NavLink to='/changePassword' className='login__button'>Восстановить пароль</NavLink>
                    <NavLink to='/registration' className='login__button'>Зарегистривоваться</NavLink>
                    </div>
        </div>
    )
}
