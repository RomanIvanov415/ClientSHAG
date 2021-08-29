import React from 'react'
import { NavLink } from 'react-router-dom'

export default function changePassword() {
    return (
        <div className='change-password'>
            <div className='container'>
                <h1 className='change-password__title'>Вход в кабинет покупателя</h1>
                <div className='change-password__form'>
                        
                        <input className='change-password__form-input'
                        id='change-password__form-email-input'
                        name='change-password__form-email-input'
                        type='text'
                    
                    />
                    <label className='change-password__form-label' 
                        htmlFor='change-password__form-email-input'
                    >Пароль</label>
                </div>
                <button type='submit' className='change-password__button'>Восстановить пароль</button>
                <NavLink className='change-password__button' to='/login'>Я вспомнил(-а) пароль!</NavLink>
                </div>
        </div>
    )
}
