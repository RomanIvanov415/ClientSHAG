import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

export default function AdminHeader(props) {
    const [burgerIsOpen, setBurgerIsOpen ] = useState(false)
    const [burgerDropdownIsOpen, setBurgerDropdownIsOpen ] = useState(false)
    const [burgerSubmenuIsOpen, setBurgerSubmenuIsOpen] = useState(false)
    const [burgerDropdownSubpoints, setBurgerDropdownSubpoints] = useState([])

    const subpoints = [
        {
            point: 'Заказы',
            links: [
                {
                    name: 'Все заказы',
                    path: ''
                },
                {
                    name: 'Отчеты о продажах',
                    path: ''
                },
                {
                    name: 'Отгрузки',
                    path: ''
                },
                {
                    name: 'Незавершенные покупки',
                    path: ''
                },
                {
                    name: 'Обратный звонок',
                    path: ''
                },
            ]
        },
        {
            point: 'Товары',
            links: [
                {
                    name: 'Категории',
                    path: ''
                },
                {
                    name: 'Товары',
                    path: ''
                },
                {
                    name: 'Характеристики',
                    path: ''
                },
                {
                    name: 'Фильтры',
                    path: ''
                },
                {
                    name: 'Опции',
                    path: ''
                },
                {
                    name: 'Отзывы',
                    path: ''
                },
            ]
        },
        {
            point: 'Покупатели',
            links: [
                {
                    name: 'Администраторы',
                    path: ''
                },
                {
                    name: 'Покупатели',
                    path: ''
                },
                {
                    name: 'Группы пользователей',
                    path: ''
                },
                {
                    name: 'Центр сообщений',
                    path: ''
                },
            ]
        },
        {
            point: 'Маркетинг',
            links: [
                {
                    name: 'Промо-акции и скидки',
                    path: ''
                },
                {
                    name: 'Рассылки',
                    path: ''
                },
                {
                    name: 'Подарочные сертификаты',
                    path: ''
                },
                {
                    name: 'Баннеры',
                    path: ''
                },
            ]
        },
        {
            point: 'Веб-сайт',
            links: [
                {
                    name: 'Блог',
                    path: ''
                },
                {
                    name: 'Отзывы',
                    path: ''
                },
                
            ]
        },
    ]
    const AdditionalModule = props.additionalModule

    useEffect(() => {
        if(burgerDropdownSubpoints.length > 0){
            setBurgerSubmenuIsOpen(true)
        }
        else{
            setBurgerSubmenuIsOpen(false)
        }
    }, [burgerDropdownSubpoints])
    useEffect(() => {
    },[])

    
    const toggleBurger = () => {
        setBurgerIsOpen(!burgerIsOpen)
    }
    const toggleBurgerDropdown = () => {
        setBurgerDropdownIsOpen(!burgerDropdownIsOpen)
        console.log('burger dropdown')
    }

    return (
        <header className='header'>
            <div className='container'>
                <nav className='header__navigation'>
                    <NavLink to='/' className='header__navigation_point'><div className='icon-home3'></div></NavLink>
                    <div className='header__navigation_point'>
                        <div className='header__navigation_point_name '>Заказы</div>
                        <div className='icon-down-arrow'></div>
                        <ul className='header__navigation_point_dropdown'>
                        <li className='header__navigation_point_dropdown_link'>
                            <NavLink to='/admin/orders/allorders'>
                                <span className='header__navigation_point_dropdown_link-title'>Все заказы</span>
                                <span className='header__navigation_point_dropdown_link-description'>Просмотр и оформление заказов, оформление счетов</span>
                            </NavLink>
                        </li>
                        <li className='header__navigation_point_dropdown_link'>
                            <NavLink to='/admin/orders/reports'>
                                <span className='header__navigation_point_dropdown_link-title'>Отчеты о продажах</span>
                                <span className='header__navigation_point_dropdown_link-description'>Детальная статистика продаж</span>
                            </NavLink>
                        </li>
                        <li className='header__navigation_point_dropdown_link'>
                            <NavLink to=''>
                                <span className='header__navigation_point_dropdown_link-title'>Отгрузки</span>
                                <span className='header__navigation_point_dropdown_link-description'>Просмотр и распечатка описей вложения к отгрузкам товаров</span>
                            </NavLink>
                        </li>
                        <li className='header__navigation_point_dropdown_link'>
                            <NavLink to=''>
                                <span className='header__navigation_point_dropdown_link-title'>Незавершенные покупки</span>
                                <span className='header__navigation_point_dropdown_link-description'>Просмотр незавершенных покупок и покупок в процессе</span>
                            </NavLink>
                        </li>
                        <li className='header__navigation_point_dropdown_link'>
                            <NavLink to=''>
                                <span className='header__navigation_point_dropdown_link-title'>Обратный звонок</span>
                                <span className='header__navigation_point_dropdown_link-description'>Просмотр и обработка заявок на обратный звонок</span>
                            </NavLink>
                        </li>
                    </ul>
                    </div>
                    
                    <div className='header__navigation_point'>
                        <div className='header__navigation_point_name'>Товары</div>
                        <div className=' icon-down-arrow'></div>
                        <ul className='header__navigation_point_dropdown'>
                        <li className='header__navigation_point_dropdown_link'>
                            <NavLink to=''>
                                <span className='header__navigation_point_dropdown_link-title'>Категории</span>
                                <span className='header__navigation_point_dropdown_link-description'>Просмотр, добавление и редактирование категорий товаров</span>
                            </NavLink>
                        </li>
                        <li className='header__navigation_point_dropdown_link'>
                            <NavLink to=''>
                                <span className='header__navigation_point_dropdown_link-title'>Товары</span>
                                <span className='header__navigation_point_dropdown_link-description'>Просмотр, добавление и редактирование товаров</span>
                            </NavLink>
                        </li>
                        <li className='header__navigation_point_dropdown_link'>
                            <NavLink to=''>
                                <span className='header__navigation_point_dropdown_link-title'>Характеристики</span>
                                <span className='header__navigation_point_dropdown_link-description'>Просмотр, добавление и редактирование дополнительных полей товаров</span>
                            </NavLink>
                        </li>
                        <li className='header__navigation_point_dropdown_link'>
                            <NavLink to=''>
                                <span className='header__navigation_point_dropdown_link-title'>Фильтры</span>
                                <span className='header__navigation_point_dropdown_link-description'>Фильтры товаров показываются в витрине и позволяют покупателям легко находить нужные товары</span>
                            </NavLink>
                        </li>
                        <li className='header__navigation_point_dropdown_link'>
                            <NavLink to=''>
                                <span className='header__navigation_point_dropdown_link-title'>Опции</span>
                                <span className='header__navigation_point_dropdown_link-description'>Просмотр, добавление и редактирование глобальных опций товаров и их вариантов</span>
                            </NavLink>
                        </li>
                        <li className='header__navigation_point_dropdown_link'>
                            <NavLink to=''>
                                <span className='header__navigation_point_dropdown_link-title'>Отзывы</span>
                                <span className='header__navigation_point_dropdown_link-description'>Отзывы покупателей о товарах</span>
                            </NavLink>
                        </li>
                    </ul>
                    </div>

                    <div className='header__navigation_point'>
                        <div className='header__navigation_point_name'>Покупатели</div>
                        <div className=' icon-down-arrow'></div>
                        <ul className='header__navigation_point_dropdown'>
                        <li className='header__navigation_point_dropdown_link'>
                            <NavLink to=''>
                                <span className='header__navigation_point_dropdown_link-title'>Администраторы</span>
                                <span className='header__navigation_point_dropdown_link-description'>Список администраторов магазина — зарегистрированных пользователей с учетной записью администратора</span>
                            </NavLink>
                        </li>
                        <li className='header__navigation_point_dropdown_link'>
                            <NavLink to=''>
                                <span className='header__navigation_point_dropdown_link-title'>Покупатели</span>
                                <span className='header__navigation_point_dropdown_link-description'>Список покупателей магазина —  зарегистрированных пользователей с учетной записью покупателя</span>
                            </NavLink>
                        </li>
                        <li className='header__navigation_point_dropdown_link'>
                            <NavLink to=''>
                                <span className='header__navigation_point_dropdown_link-title'>Группы пользователей</span>
                                <span className='header__navigation_point_dropdown_link-description'>Управление группами пользователей вашего магазина</span>
                            </NavLink>
                        </li>
                        <li className='header__navigation_point_dropdown_link'>
                            <NavLink to=''>
                                <span className='header__navigation_point_dropdown_link-title'>Центр сообщений</span>
                                <span className='header__navigation_point_dropdown_link-description'>Сообщения от покупателей</span>
                            </NavLink>
                        </li>
                    </ul>
                    </div>

                    <div className='header__navigation_point'>
                        <div className='header__navigation_point_name'>Маркетинг</div>
                        <div className=' icon-down-arrow'></div>
                        <ul className='header__navigation_point_dropdown'>
                        <li className='header__navigation_point_dropdown_link'>
                            <NavLink to=''>
                                <span className='header__navigation_point_dropdown_link-title'>Промо-акции и скидки</span>
                                <span className='header__navigation_point_dropdown_link-description'>Промо-акции и скидки на конкретные товары или в зависимости от деталей заказа</span>
                            </NavLink>
                        </li>
                        <li className='header__navigation_point_dropdown_link'>
                            <NavLink to=''>
                                <span className='header__navigation_point_dropdown_link-title'>Рассылки</span>
                                <span className='header__navigation_point_dropdown_link-description'>Создание и отправка рассылок покупателям</span>
                            </NavLink>
                        </li>
                        <li className='header__navigation_point_dropdown_link'>
                            <NavLink to=''>
                                <span className='header__navigation_point_dropdown_link-title'>Подарочные сертификаты</span>
                                <span className='header__navigation_point_dropdown_link-description'>Просмотр и редактирование приобретенных покупателями подарочных сертификатов</span>
                            </NavLink>
                        </li>
                        <li className='header__navigation_point_dropdown_link'>
                            <NavLink to=''>
                                <span className='header__navigation_point_dropdown_link-title'>Баннеры</span>
                                <span className='header__navigation_point_dropdown_link-description'>Создание графических и текстовых баннеров для размещения на витрине магазина</span>
                            </NavLink>
                        </li>
                    </ul>
                    </div>
                    
                    <div className='header__navigation_point'>
                        <div className='header__navigation_point_name '>Веб-сайт</div>
                        <div className='icon-down-arrow'></div>
                        <ul className='header__navigation_point_dropdown'>
                        <li className='header__navigation_point_dropdown_link'>
                            <NavLink to=''>
                                <span className='header__navigation_point_dropdown_link-title'>Блог</span>
                                <span className='header__navigation_point_dropdown_link-description'>Управление блогом</span>
                            </NavLink>
                        </li>
                        <li className='header__navigation_point_dropdown_link'>
                            <NavLink to=''>
                                <span className='header__navigation_point_dropdown_link-title'>Отзывы</span>
                                <span className='header__navigation_point_dropdown_link-description'>Просмотр и управление отзывами вашего магазина</span>
                            </NavLink>
                        </li>
                        
                    </ul>
                    </div>

                </nav>
                <div className='header__search'>
                        <input className='header__search-input' placeholder='Найти'></input>
                        <button className='header__search-button icon-magnifying-glass' type='submit'></button>
                </div>
            </div>
            <div className='admin__page-top'>
                <div className='container'>
                    <div className='admin__page-top-elements'>
                        <button className='admin__burger-button' onClick={toggleBurger}>
                            <div className='admin__burger-button-line'></div><div className='admin__burger-button-line'></div><div className='admin__burger-button-line'></div><div className='admin__burger-button-line'></div>
                        </button>
                        <h1 className='admin__page-title'>{props.title}</h1>
                        
                    </div>
                    <AdditionalModule/>
                    <div className={`admin__burger adm-burger ${burgerIsOpen ? 'adm-burger_opened' : ''}`}>
                       <div className='adm-burger__header'>
                           <div className={`adm-burger__email ${burgerDropdownIsOpen ? 'adm-burger__email_opened' : ''}`} onClick={toggleBurgerDropdown}>example@mail.ru<div className='icon-down-arrow '></div></div>
                           <div className='adm-burger__close-buttons'>
                                <button className={`adm-burger__close-button ${burgerSubmenuIsOpen ? '' : 'adm-burger__close-button_disabled'}`} onClick={() => setBurgerDropdownSubpoints([])}>Назад</button>
                                <button className='adm-burger__close-button' onClick={toggleBurger}>Закрыть</button>    
                            </div>
                       </div>
                       <div className='adm-burger__dropdown' style={{top: burgerDropdownIsOpen ? 50 : -25}}>
                           <NavLink to='/admin/profile' className='adm-burger__dropdown-point'>
                                Профиль
                           </NavLink>
                           <NavLink to='/admin/login' className='adm-burger__dropdown-point'>
                                Выйти
                           </NavLink>
                       </div>
                       <div className={`adm-burger__points ${burgerSubmenuIsOpen ? 'adm-burger__points_hiden' : ''}`}>
                            <div className='adm-burger__point' onClick={() => setBurgerDropdownSubpoints(subpoints[0].links)}>Заказы</div>
                            <div className='adm-burger__point' onClick={() => setBurgerDropdownSubpoints(subpoints[1].links)}>Товары</div>
                            <div className='adm-burger__point' onClick={() => setBurgerDropdownSubpoints(subpoints[2].links)}>Покупатели</div> 
                            <div className='adm-burger__point' onClick={() => setBurgerDropdownSubpoints(subpoints[3].links)}>Маркетинг</div>
                            <div className='adm-burger__point' onClick={() => setBurgerDropdownSubpoints(subpoints[4].links)}>Веб-сайт</div>
                            <div className='adm-burger__subpoints' >
                                {burgerDropdownSubpoints.map((subpoint, index) => {
                                    return(
                                        <NavLink to={subpoint.path} className='adm-burger__subpoint' key={index}>
                                            {subpoint.name}
                                        </NavLink>
                                    )
                                })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
