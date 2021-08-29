import React, { Component } from 'react'

export default class ExchangeAndReturn extends Component {
    render() {
        return (
            <div className='exchange-and-return'>
                <div className='container'>
                    <div className='exchange-and-return__breadcrumbs'>
                        <a className='exchange-and-return__breadcrumb'>Главная</a> / <a className='exchange-and-return__breadcrumb'>Условия обмена и возврата</a>
                    </div>
                    <div className='exchange-and-return__title'>Условия обмена и возврата</div>
                    <div className='exchange-and-return__content'>Содержание условий обмена и возврата</div>
                </div>
            </div>
        )
    }
}