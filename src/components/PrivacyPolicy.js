import React, { Component } from 'react'

export default class PrivacyPolicy extends Component {
    render() {
        return (
            <div className='privacy-policy'>
                <div className='container'>
                    <div className='privacy-policy__breadcrumbs'>
                        <a className='privacy-policy__breadcrumb'>Главная</a> / <a className='privacy-policy__breadcrumb'>Политика конфиденциальности и оферта</a>
                    </div>
                    <div className='privacy-policy__title'>Политика конфиденциальности и оферта</div>
                    <div className='privacy-policy__content'>Содержание политики конфиденциальности</div>
                </div>
            </div>
        )
    }
}
