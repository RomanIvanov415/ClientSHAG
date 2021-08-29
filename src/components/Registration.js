import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Registration() {
    
    return (
        <div className='registration'>
            <div className='container'>
                <h1 className='registration__title'>Регистрация</h1>
                <div className='registration__form'>
                    
                    <input className='registration__form-input'
                    id='registration__form-contact-person-input'
                    name='registration__form-contact-person-input'
                    type='text'
                   
                    />
                    <label className='registration__form-label'
                    htmlFor='registration__form-contact-person-input'
                  >Контактное лицо (ФИО)</label>
                </div>
                <div className='registration__form'>
                    <input className='registration__form-input'
                    id='registration__form-contact-number-input'
                    name='registration__form-contact-number-input'
                    type='text'
                    />
                    <label className='registration__form-label' 
                    htmlFor='registration__form-contact-number-input'
                   >Контактный телефон</label>
                </div>
                <div className='registration__form'>
                    
                    <input className='registration__form-input'
                    id='registration__form-email-input'
                    name='registration__form-email-input'
                    type='text'
                   
                    />
                    <label className='registration__form-label'
                    htmlFor='registration__form-email-input'
                   >Email</label>
                </div>
                <div className='registration__form'>
                    
                    <input className='registration__form-input'
                    id='registration__form-password-input'
                    name='registration__form-password-input'
                    type='password'
                   
                   />
                   <label className='registration__form-label' 
                    htmlFor='registration__form-password-input'
                   >Пароль</label>
                </div>
                <div className='registration__form'>
                    
                    <input className='registration__form-input'
                    id='registration__form-repeat-password-input'
                    name='registration__form-repeat-password-input'
                    type='password'
                   
                    />
                    <label className='registration__form-label'
                    htmlFor='registration__form-repeat-password-input'
                    >Повторите пароль</label>
                </div>
                <button className='registration__button' type='submit'>Зарегистривоваться</button>
                <NavLink to='/login' className='registration__button'>У меня уже есть аккаунт</NavLink>
            </div>
        </div>
    )
}
