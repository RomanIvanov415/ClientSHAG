import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
                <div className='container'>
                    <div className='footer__information'>
                        <div className='footer__contacts footer__information-section'>
                            <div className='footer__contacts-title footer__section-title'>Контакты</div>
                            <div className='footer__contacts-main footer__section-main'>
                            <a className='footer__contacts-phone-number footer__contacts-point' href='tel:+380123456789'>+38-012-345-67-89</a>
                            <a className='e-mail footer__contacts-point' href='mailto:adr@mail.ru'><div className='icon-email'></div>adr@mail.ru</a>
                            <div className='footer__adress footer__contacts-point'><div className='icon-pin'></div>Санкт-Петербург, ул. Пушкина 36 </div>
                            <div className='footer__work-time footer__contacts-point'><div className='icon-clock'></div>Пн-Пт: 10:00 - 20:00</div>
                            </div>
                        </div>
                        <div className='footer__catalog footer__information-section'>
                            <div className='footer__catalog-title footer__section-title'>Каталог</div>
                            <div className='footer__catalog-main footer__section-main'>
                                <div className='footer__catalog-point'>Электроника</div>
                                <div className='footer__catalog-point'>Мебель</div>
                                <div className='footer__catalog-point'>Верхняя одежда</div>
                                <div className='footer__catalog-point'>Правильное питание</div>
                            </div>
                        </div>
                        <div className='footer__social-networks footer__information-section'>
                            <div className='footer__social-networks-title footer__section-title'>Мы в соц.сетях</div>
                            <div className='footer__social-networks-main footer__section-main'>
                                <div className='footer__social-networks-point footer__social-networks-vk icon-vk'></div>
                                <div className='footer__social-networks-point footer__social-networks-inst icon-instagram'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
