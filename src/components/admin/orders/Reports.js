import React, {useState} from 'react'

export default function Reports() {
    const [selectorsIsOpened, setSelectorsIsOpened] = useState(false)
    return (
        <div className='reports'>
            <div className='container'>
                <div className='reports__main'>
                    <div className='reports__main-header'>
                        <div className='reporst__main-filters'>
                            <div className='reports__main-filter'>
                            Продажи товаров - Стоимость (ежемесячно)
                            </div>
                            <div className='reports__main-filter reports__main-filter_active'>
                            Продажи товаров по категориям - Стоимость (ежемесячно)
                            </div>
                            <div className='reports__main-filter'>
                            Районы с большей акивностью покупателей
                            </div>
                            <div className='reports__main-filter'>
                            Стоимость доставки за заказ 
                            </div>
                            <div className='reports__main-filter'>
                            Статусы заказов
                            </div>
                        </div>
                    </div>
                    <div className='reports__main-data'>
                        Здесь пока ничего нет
                    </div>
                </div>
                <div className={`reports__selectors mobile-toggle-sel ${selectorsIsOpened ? 'mobile-toggle-sel_opened' : ''}`}>
                    <div className='mobile-toggle' onClick={() => setSelectorsIsOpened(prev => !prev)}><div className='icon-left-arrow-angle-big-gross-symbol'></div></div>
                    <div className='reports__selectors-set'>
                        <div className='reports__selectors-option'>
                            Отчеты по заказам
                        </div>
                        <div className='reports__selectors-option reports__selectors-option_active'>
                            Топ 10 покупатели
                        </div>
                        <div className='reports__selectors-option'>
                            Топ 10 категории
                        </div>
                        <div className='reports__selectors-option'>
                            Топ 10 товары
                        </div>
                        <div className='reports__selectors-option'>
                            Способы оплаты
                        </div>
                    </div>
                    <div className='reports__search'>
                        <h1 className='reports__search-title'>Найти</h1>
                        <div className='reports__selector'>
                            <div className='reports__selector-title'>
                                Период:
                            </div>
                            <select>
                            <option>Все</option>
                            <optgroup label="=============">
                                <option>Сегодня</option>
                                <option>Текущая неделя</option>
                                <option>Текущий месяц</option>
                                <option>Текущий год</option>
                            </optgroup>
                            <optgroup label="=============">
                                <option>Вчера</option>
                                <option>Предыдущая неделя</option>
                                <option>Предыдущий месяц</option>
                                <option>Предыдущий год</option>
                            </optgroup>
                            <optgroup label="=============">
                                <option>Последние 24 часа</option>
                                <option>Последние 7 дней</option>
                                <option>Последние 30 дней</option>
                            </optgroup>
                            <optgroup label="=============">
                                <option>Другое</option>
                            </optgroup>
                            </select>
                            
                        </div>
                        <div className='reports__date-selector'>
                                <div className='reports__date-selector-title'>Выбрать даты:</div>
                                <div className='reports__date-selector-input'>
                                    <div className='icon-calendar'></div>
                                    <input type='text'/>
                                </div>
                                -
                                <div className='reports__date-selector-input'>
                                    <div className='icon-calendar'></div>
                                    <input type='text'/>
                                </div>
                            </div>
                            <button className='reports__search-button'>Найти</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
