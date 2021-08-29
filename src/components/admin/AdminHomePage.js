import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'


import { Line } from 'react-chartjs-2'


export default function AdminHomePage() {
    const data = {
        labels: ['July 12', 'July 19', 'July 26', 'Aug 2'],
        datasets: [
          {
            label: 'Продажи',
            data: [20000,18000,9000,13000,15000, 10000],
            fill: false,
            backgroundColor: 'rgb(0, 75, 214)',
            borderColor: 'rgba(0, 75, 214, 0.2)',
          },
        ],
      };
      
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: false,
              },
            },
          ],
        },
        animation: false,
      };


    

    return (
        <div className='admin__home-page home-page'>
            <div className='home-page__main'>
                <div className='container'>
                    <div className='home-page__cards'>
                        <div className='home-page__card home-page__money-card'>
                            <div className='home-page__card-title'>Продажи</div>
                            <div className='home-page__card-value'>0 &#8381;</div>
                            <div className='home-page__card-details'>0 &#8381;, &#8734;%</div>
                        </div>
                        <div className='home-page__card home-page__money-card'>
                            <div className='home-page__card-title'>Налоги</div>
                            <div className='home-page__card-value'>0 &#8381;</div>
                            <div className='home-page__card-details'>0 &#8381;, &#8734;%</div>
                        </div>
                        <div className='home-page__card'>
                            <div className='home-page__card-title'>Товары на витрине</div>
                            <div className='home-page__card-value'>325</div>
                        </div>
                        <div className='home-page__card'>
                            <div className='home-page__card-title'>Нет в наличии</div>
                            <div className='home-page__card-value'>15</div>
                        </div>
                        <div className='home-page__card'>
                            <div className='home-page__card-title'>Зарегистрированные покупатели</div>
                            <div className='home-page__card-value'>15</div>
                        </div>
                        <div className='home-page__card'>
                            <div className='home-page__card-title'>Категории</div>
                            <div className='home-page__card-value'>117</div>
                        </div>
                        <div className='home-page__card'>
                            <div className='home-page__card-title'>Магазины</div>
                            <div className='home-page__card-value'>1</div>
                        </div>
                        <div className='home-page__card'>
                            <div className='home-page__card-title'>Веб-страницы</div>
                            <div className='home-page__card-value'>1</div>
                        </div>
                    </div>
                    <div className='home-page__statistic'>
                        <div className='home-page__sales'>
                            <h1 className='home-page__sales-title'>Статистика</h1>
                            <div className='home-page__sales-selectors'>
                                <button className='home-page__sales-selector'>Продажи</button>
                            </div>
                            <div className='home-page__chart'>
                                <Line data={data} options={options} />
                            </div>
                        </div>
                        <div className='home-page__recent-orders'>
                            <div className='home-page__recent-orders-selectors'>
                                <button className='home-page__recent-orders-selector'>Все</button>
                                <button className='home-page__recent-orders-selector'>Обработан</button>
                                <button className='home-page__recent-orders-selector'>На удержании</button>
                                <button className='home-page__recent-orders-selector'>Ожидает звонка</button>
                                <button className='home-page__recent-orders-selector'>Аннулирован</button>
                                <button className='home-page__recent-orders-selector'>Отложен</button>
                                <button className='home-page__recent-orders-selector'>Отклонён</button>
                                <button className='home-page__recent-orders-selector'>Неудача</button>
                                <button className='home-page__recent-orders-selector'>Открыт</button>
                                <button className='home-page__recent-orders-selector'>Выполнен</button>
                                <button className='home-page__recent-orders-selector'>Возращено</button>
                            </div>
                            <div className='home-page__recent-orders-list'>
                                Здесь пока ничего нет
                            </div>
                        </div>
                        <div className='home-page__latest-events'>
                                <div className='home-page__latest-events-top'>
                                    <h1 className='home-page__latest-events-title'>Поселдние события</h1>
                                    <NavLink to='' className='home-page__latest-events-show-all'>Показать все</NavLink>
                                </div>
                                <div className='home-page__latest-events-list'>
                                    <div className='home-page__latest-events-point'>
                                        Пользователи(Сессия): <NavLink to='/admin/profile'>Администратор Главный; admin@example.com (#1)</NavLink><br/>
                                        <div className='home-page__latest-events-point-date'>08/04/2021, 17:25</div>
                                    </div>
                                </div>  
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
