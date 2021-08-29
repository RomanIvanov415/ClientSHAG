import React, {useState, useEffect, useCallback, useRef} from 'react'
import { NavLink } from 'react-router-dom'

export default function AllOrders() {
    const [searchOptionSubmenuIsOpened, setSearchOptionSubmenuIsOpened] = useState(false)
    const [advancedSearchPopupIsOpened, setAdvancedSearchPopupIsOpened] = useState(false)
    const [selectorsIsOpened, setSelectorsIsOpened] = useState(false)
    const statusPickerDropdownIsOpened = useRef(false)

    const openStatusPickerDropdown = () => {
        if(!statusPickerDropdownIsOpened){
            statusPickerDropdownIsOpened.current = !statusPickerDropdownIsOpened.current 
            return
        }
        let dropdown = document.querySelector('.tb-status-picker__dropdown_opened')
        document.addEventListener('click', (e) => {
            let target = e.target
            let ItsDropdown = target == dropdown
            if(!ItsDropdown){
                statusPickerDropdownIsOpened.current = !statusPickerDropdownIsOpened.current 
            }
            return document.removeEventListener('click', this)
        })
    }

    useEffect(() => {
        openStatusPickerDropdown()
        console.log('db', statusPickerDropdownIsOpened)
    }, [statusPickerDropdownIsOpened])
    return (
        <div className='all-orders'>
            <div className='container'>
                <div className='all-orders__table'>
                    <div className='all-orders__pagination all-orders__pagination_top'>
                        <button className='all-orders__pagination-button'><div className='icon-double-angle-pointing-to-right'></div></button>
                        <button className='all-orders__pagination-button'><div className='icon-left-arrow-angle-big-gross-symbol'></div></button>
                        <button className='all-orders__pagination-button'>10 из 38 <div className='icon-down-arrow'></div>
                        <ul className='all-orders__pagination-dropdown '>
                            <li className='all-orders__pagination-dropdown-point'>
                                10 на страницу
                            </li>
                            <li className='all-orders__pagination-dropdown-point'>
                                25 на страницу
                            </li>
                            <li className='all-orders__pagination-dropdown-point'>
                                50 на страницу
                            </li>
                            <li className='all-orders__pagination-dropdown-point'>
                                100 на страницу
                            </li>
                            <li className='all-orders__pagination-dropdown-point'>
                                250 на страницу
                            </li>

                        </ul>
                        </button>
                        <button className='all-orders__pagination-button'><div className='icon-left-arrow-angle-big-gross-symbol'></div></button>
                        <button className='all-orders__pagination-button'><div className='icon-double-angle-pointing-to-right'></div></button>
                    </div>
                    <table className='all-orders__list'>
                        <thead>
                            <tr>
                                <th width='5%'>
                                    <div className='th-status-picker'>
                                        <button className='th-status-picker__button'></button><div className='icon-down-arrow'></div>
                                        <ul className='th-status-picker__dropdown'>
                                            <li className='th-status-picker__dropdown-point'>
                                                Все
                                            </li>
                                            <li className='th-status-picker__dropdown-point'>
                                                Ни одного
                                            </li>
                                            <li className='th-status-picker__dropdown-point'>
                                                Обработан
                                            </li>
                                            <li className='th-status-picker__dropdown-point'>
                                                На удержании
                                            </li>
                                            <li className='th-status-picker__dropdown-point'>
                                                Ожидает звонка
                                            </li>
                                            <li className='th-status-picker__dropdown-point'>
                                                Аннулирован
                                            </li>
                                            <li className='th-status-picker__dropdown-point'>
                                                Отложен
                                            </li>
                                            <li className='th-status-picker__dropdown-point'>
                                                Отклонен
                                            </li>
                                            <li className='th-status-picker__dropdown-point'>
                                                Неудача
                                            </li>
                                            <li className='th-status-picker__dropdownv'>
                                                Открыт
                                            </li>
                                            <li className='th-status-picker__dropdown-point'>
                                                Выполнен
                                            </li>
                                            <li className='th-status-picker__dropdown-point'>
                                                Возращено
                                            </li>
                                            <li className='th-status-picker__dropdown-point'>
                                                Незавершенный
                                            </li>
                                        </ul>
                                    </div>
                                </th>
                                <th width='15%'>ID <div className='icon-down-arrow'></div></th>
                                <th width='15%'>Статус <div className='icon-down-arrow'></div></th>
                                <th width='15%'>Дата <div className='icon-down-arrow'></div></th>
                                <th width='15%'>Покупатель <div className='icon-down-arrow'></div></th>
                                <th width='15%'>Телефон <div className='icon-down-arrow'></div></th>
                                <th width='5%'></th>
                                <th width='15%'>Итого <div className='icon-down-arrow'></div></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td><div className='mobile-table-header'>ID</div><NavLink to=''>Заказ №1</NavLink></td>
                                <td><div className='mobile-table-header'>Статус</div><div className='tb-status-picker'>Открыт <div className='icon-down-arrow'></div>
                                <ul className='tb-status-picker__dropdown tb-status-picker__dropdown'>
                                <li className='tb-status-picker__dropdown-point'>
                                                Все
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Ни одного
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Обработан
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                На удержании
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Ожидает звонка
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Аннулирован
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Отложен
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Отклонен
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Неудача
                                            </li>
                                            <li className='tb-status-picker__dropdownv'>
                                                Открыт
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Выполнен
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Возращено
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Незавершенный
                                            </li>
                                </ul></div></td>
                                <td><div className='mobile-table-header'>Дата</div>05/30/2019, 09:04</td>
                                <td><div className='mobile-table-header'>Покупатель</div><NavLink to=''>@ Родионова Ксения</NavLink></td>
                                <td><div className='mobile-table-header'>Телефон</div><a href='tel:+79174453201'>+79174453201</a></td>
                                <td><div className='mobile-table-header'>Инструменты</div><div className='tb-settings'><div className='icon-settings'></div><div className='icon-down-arrow'></div><ul className='tb-settings__dropdown'>
                                    <li className='tb-settings__dropdown'><NavLink to=''>Просмотреть</NavLink></li>
                                    <li className='tb-settings__dropdown'><NavLink to=''>Редактировать</NavLink></li>
                                    <li className='tb-settings__dropdown'><NavLink to=''>Скопировать</NavLink></li>
                                    <li className='tb-settings__dropdown'><NavLink to=''>Удалить</NavLink></li>
                                </ul></div></td>
                                <td><div className='mobile-table-header'>Итого</div>1234 &#8381;</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><div className='mobile-table-header'>ID</div><NavLink to=''>Заказ №1</NavLink></td>
                                <td><div className='mobile-table-header' onClick={() => statusPickerDropdownIsOpened.current = !statusPickerDropdownIsOpened.current}>Статус</div><div className='tb-status-picker'>Открыт <div className='icon-down-arrow'></div>
                                <ul className={`tb-status-picker__dropdown ${statusPickerDropdownIsOpened.current ? 'tb-status-picker__dropdown_opened' : ''}`}>
                                <li className='tb-status-picker__dropdown-point'>
                                                Все
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Ни одного
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Обработан
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                На удержании
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Ожидает звонка
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Аннулирован
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Отложен
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Отклонен
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Неудача
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Открыт
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Выполнен
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Возращено
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Незавершенный
                                            </li>
                                            <li className='tb-status-picker__dropdown-option'>
                                                <div className='tb-status-picker__checkbox'>
                                                    <input type='checkbox' name='tb-status-picker__checkbox-inform' id='tb-status-picker__checkbox-inform'/>
                                                    <label htmlFor='tb-status-picker__checkbox-inform'><div className='icon-check'></div></label>
                                                </div>
                                                <span className='tb-status-picker__dropdown-option-title'>Информировать покупателя</span>
                                            </li>
                                            <li className='tb-status-picker__dropdown-option'>
                                                <div className='tb-status-picker__checkbox'>
                                                    <input type='checkbox' name='tb-status-picker__checkbox-notify' id='tb-status-picker__checkbox-notify'/>
                                                    <label htmlFor='tb-status-picker__checkbox-notify'><div className='icon-check'></div></label>
                                                </div>
                                                <span className='tb-status-picker__dropdown-option-notify'>Уведомить отдел оформления и обработки заказов</span>
                                            </li>
                                </ul></div></td>
                                <td><div className='mobile-table-header'>Дата</div>05/30/2019, 09:04</td>
                                <td><div className='mobile-table-header'>Покупатель</div><NavLink to=''>@ Родионова Ксения</NavLink></td>
                                <td><div className='mobile-table-header'>Телефон</div><a href='tel:+79174453201'>+79174453201</a></td>
                                <td><div className='mobile-table-header'>Инструменты</div><div className='tb-settings'><div className='icon-settings'></div><div className='icon-down-arrow'></div><ul className='tb-settings__dropdown'>
                                    <li className='tb-settings__dropdown'><NavLink to=''>Просмотреть</NavLink></li>
                                    <li className='tb-settings__dropdown'><NavLink to=''>Редактировать</NavLink></li>
                                    <li className='tb-settings__dropdown'><NavLink to=''>Скопировать</NavLink></li>
                                    <li className='tb-settings__dropdown'><NavLink to=''>Удалить</NavLink></li>
                                </ul></div></td>
                                <td><div className='mobile-table-header'>Итого</div>1234 &#8381;</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><div className='mobile-table-header'>ID</div><NavLink to=''>Заказ №1</NavLink></td>
                                <td><div className='mobile-table-header'>Статус</div><div className='tb-status-picker'>Открыт <div className='icon-down-arrow'></div>
                                <ul className='tb-status-picker__dropdown'>
                                <li className='tb-status-picker__dropdown-point'>
                                                Все
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Ни одного
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Обработан
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                На удержании
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Ожидает звонка
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Аннулирован
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Отложен
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Отклонен
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Неудача
                                            </li>
                                            <li className='tb-status-picker__dropdownv'>
                                                Открыт
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Выполнен
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Возращено
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Незавершенный
                                            </li>
                                </ul></div></td>
                                <td><div className='mobile-table-header'>Дата</div>05/30/2019, 09:04</td>
                                <td><div className='mobile-table-header'>Покупатель</div><NavLink to=''>@ Родионова Ксения</NavLink></td>
                                <td><div className='mobile-table-header'>Телефон</div><a href='tel:+79174453201'>+79174453201</a></td>
                                <td><div className='mobile-table-header'>Инструменты</div><div className='tb-settings'><div className='icon-settings'></div><div className='icon-down-arrow'></div><ul className='tb-settings__dropdown'>
                                    <li className='tb-settings__dropdown'><NavLink to=''>Просмотреть</NavLink></li>
                                    <li className='tb-settings__dropdown'><NavLink to=''>Редактировать</NavLink></li>
                                    <li className='tb-settings__dropdown'><NavLink to=''>Скопировать</NavLink></li>
                                    <li className='tb-settings__dropdown'><NavLink to=''>Удалить</NavLink></li>
                                </ul></div></td>
                                <td><div className='mobile-table-header'>Итого</div>1234 &#8381;</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><div className='mobile-table-header'>ID</div><NavLink to=''>Заказ №1</NavLink></td>
                                <td><div className='mobile-table-header'>Статус</div><div className='tb-status-picker'>Открыт <div className='icon-down-arrow'></div>
                                <ul className='tb-status-picker__dropdown'>
                                <li className='tb-status-picker__dropdown-point'>
                                                Все
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Ни одного
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Обработан
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                На удержании
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Ожидает звонка
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Аннулирован
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Отложен
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Отклонен
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Неудача
                                            </li>
                                            <li className='tb-status-picker__dropdownv'>
                                                Открыт
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Выполнен
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Возращено
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Незавершенный
                                            </li>
                                </ul></div></td>
                                <td><div className='mobile-table-header'>Дата</div>05/30/2019, 09:04</td>
                                <td><div className='mobile-table-header'>Покупатель</div><NavLink to=''>@ Родионова Ксения</NavLink></td>
                                <td><div className='mobile-table-header'>Телефон</div><a href='tel:+79174453201'>+79174453201</a></td>
                                <td><div className='mobile-table-header'>Инструменты</div><div className='tb-settings'><div className='icon-settings'></div><div className='icon-down-arrow'></div><ul className='tb-settings__dropdown'>
                                    <li className='tb-settings__dropdown'><NavLink to=''>Просмотреть</NavLink></li>
                                    <li className='tb-settings__dropdown'><NavLink to=''>Редактировать</NavLink></li>
                                    <li className='tb-settings__dropdown'><NavLink to=''>Скопировать</NavLink></li>
                                    <li className='tb-settings__dropdown'><NavLink to=''>Удалить</NavLink></li>
                                </ul></div></td>
                                <td><div className='mobile-table-header'>Итого</div>1234 &#8381;</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><div className='mobile-table-header'>ID</div><NavLink to=''>Заказ №1</NavLink></td>
                                <td><div className='mobile-table-header'>Статус</div><div className='tb-status-picker'>Открыт <div className='icon-down-arrow'></div>
                                <ul className='tb-status-picker__dropdown'>
                                <li className='tb-status-picker__dropdown-point'>
                                                Все
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Ни одного
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Обработан
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                На удержании
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Ожидает звонка
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Аннулирован
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Отложен
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Отклонен
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Неудача
                                            </li>
                                            <li className='tb-status-picker__dropdownv'>
                                                Открыт
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Выполнен
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Возращено
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Незавершенный
                                            </li>
                                </ul></div></td>
                                <td><div className='mobile-table-header'>Дата</div>05/30/2019, 09:04</td>
                                <td><div className='mobile-table-header'>Покупатель</div><NavLink to=''>@ Родионова Ксения</NavLink></td>
                                <td><div className='mobile-table-header'>Телефон</div><a href='tel:+79174453201'>+79174453201</a></td>
                                <td><div className='mobile-table-header'>Инструменты</div><div className='tb-settings'><div className='icon-settings'></div><div className='icon-down-arrow'></div><ul className='tb-settings__dropdown'>
                                    <li className='tb-settings__dropdown'><NavLink to=''>Просмотреть</NavLink></li>
                                    <li className='tb-settings__dropdown'><NavLink to=''>Редактировать</NavLink></li>
                                    <li className='tb-settings__dropdown'><NavLink to=''>Скопировать</NavLink></li>
                                    <li className='tb-settings__dropdown'><NavLink to=''>Удалить</NavLink></li>
                                </ul></div></td>
                                <td><div className='mobile-table-header'>Итого</div>1234 &#8381;</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><div className='mobile-table-header'>ID</div><NavLink to=''>Заказ №1</NavLink></td>
                                <td><div className='mobile-table-header'>Статус</div><div className='tb-status-picker'>Открыт <div className='icon-down-arrow'></div>
                                <ul className='tb-status-picker__dropdown'>
                                <li className='tb-status-picker__dropdown-point '>
                                                Все
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Ни одного
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Обработан
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                На удержании
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Ожидает звонка
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Аннулирован
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Отложен
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Отклонен
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Неудача
                                            </li>
                                            <li className='tb-status-picker__dropdownv'>
                                                Открыт
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Выполнен
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Возращено
                                            </li>
                                            <li className='tb-status-picker__dropdown-point'>
                                                Незавершенный
                                            </li>
                                </ul></div></td>
                                <td><div className='mobile-table-header'>Дата</div>05/30/2019, 09:04</td>
                                <td><div className='mobile-table-header'>Покупатель</div><NavLink to=''>@ Родионова Ксения</NavLink></td>
                                <td><div className='mobile-table-header'>Телефон</div><a href='tel:+79174453201'>+79174453201</a></td>
                                <td><div className='mobile-table-header'>Инструменты</div><div className='tb-settings'><div className='icon-settings'></div><div className='icon-down-arrow'></div><ul className='tb-settings__dropdown'>
                                    <li className='tb-settings__dropdown'><NavLink to=''>Просмотреть</NavLink></li>
                                    <li className='tb-settings__dropdown'><NavLink to=''>Редактировать</NavLink></li>
                                    <li className='tb-settings__dropdown'><NavLink to=''>Скопировать</NavLink></li>
                                    <li className='tb-settings__dropdown'><NavLink to=''>Удалить</NavLink></li>
                                </ul></div></td>
                                <td><div className='mobile-table-header'>Итого</div>1234 &#8381;</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='all-orders__total-container'>
                        <div className='all-orders__total'>
                            <div className='all-orders__total-sum'>
                                <span>Итого сумма:</span><span>1234 &#8381;</span>
                            </div>
                            <div className='all-orders__total-to-pay'><span>Итого к оплате:</span><span>1200 &#8381;</span></div>
                        </div>
                    </div>
                    <div className='all-orders__pagination all-orders__pagination_bottom'>
                        <button className='all-orders__pagination-button'><div className='icon-double-angle-pointing-to-right'></div></button>
                        <button className='all-orders__pagination-button'><div className='icon-left-arrow-angle-big-gross-symbol'></div></button>
                        <button className='all-orders__pagination-button'>10 из 38 <div className='icon-down-arrow'></div>
                        <ul className='all-orders__pagination-dropdown'>
                            <li className='all-orders__pagination-dropdown-point'>
                                10 на страницу
                            </li>
                            <li className='all-orders__pagination-dropdown-point'>
                                25 на страницу
                            </li>
                            <li className='all-orders__pagination-dropdown-point'>
                                50 на страницу
                            </li>
                            <li className='all-orders__pagination-dropdown-point'>
                                100 на страницу
                            </li>
                            <li className='all-orders__pagination-dropdown-point'>
                                250 на страницу
                            </li>

                        </ul>
                        </button>
                        <button className='all-orders__pagination-button'><div className='icon-left-arrow-angle-big-gross-symbol'></div></button>
                        <button className='all-orders__pagination-button'><div className='icon-double-angle-pointing-to-right'></div></button>
                    </div>
                </div>
                
                <div className={`all-orders__selectors mobile-toggle-sel ${selectorsIsOpened ? 'mobile-toggle-sel_opened' : ''}`}>
                    <div className='mobile-toggle' onClick={() => setSelectorsIsOpened((prev) => !prev)}><div className='icon-left-arrow-angle-big-gross-symbol'></div></div>
                    <div className='saved-search'>
                        <h1 className='saved-search__title'>Сохраненный поиск</h1>
                        <div className='saved-search__options'>
                            <ul className='saved-search__options-list'>
                                <li className='saved-search__options-list-point saved-search__options-list-point_picked'>
                                    Все <div className='saved-search__options-list-point-icons'><div className='icon-pushpin'><div className='icon-message'>Использовать по умолчанию</div></div><div className='icon-delete'><div className='icon-message'>Удалить</div></div></div>
                                </li>
                                <li className='saved-search__options-list-point'>
                                    Всё сделано <div className='saved-search__options-list-point-icons'><div className='icon-pushpin'><div className='icon-message'>Использовать по умолчанию</div></div><div className='icon-delete'><div className='icon-message'>Удалить</div></div></div>
                                </li>
                                <li className='saved-search__options-list-point'>
                                    Деньги получены <div className='saved-search__options-list-point-icons'><div className='icon-pushpin'><div className='icon-message'>Использовать по умолчанию</div></div><div className='icon-delete'><div className='icon-message'>Удалить</div></div></div>
                                </li>
                                <li className='saved-search__options-list-point'>
                                    Требуются действия <div className='saved-search__options-list-point-icons'><div className='icon-pushpin'><div className='icon-message'>Использовать по умолчанию</div></div><div className='icon-delete'><div className='icon-message'>Удалить</div></div></div>
                                </li>
                                <li className='saved-search__options-list-point'>
                                    Возникла проблема <div className='saved-search__options-list-point-icons'><div className='icon-pushpin'><div className='icon-message'>Использовать по умолчанию</div></div><div className='icon-delete'><div className='icon-message'>Удалить</div></div></div>
                                </li>
                                <li className={`saved-search__options-list-point ${searchOptionSubmenuIsOpened ? 'saved-search__options-list-point_opened' : ''}`} onClick={() => setSearchOptionSubmenuIsOpened(!searchOptionSubmenuIsOpened)}>
                                    Ещё <div className='icon-down-arrow'></div>
                                    <ul className='saved-search__options-list-subpoints'>
                                        <li className='saved-search__options-list-point'>
                                            Продажа не удалась <div className='saved-search__options-list-point-icons'><div className='icon-pushpin'><div className='icon-message'>Использовать по умолчанию</div></div><div className='icon-delete'><div className='icon-message'>Удалить</div></div></div>
                                        </li>
                                        <li className='saved-search__options-list-point'>
                                            Не назначен менеджер <div className='saved-search__options-list-point-icons'><div className='icon-pushpin'><div className='icon-message'>Использовать по умолчанию</div></div><div className='icon-delete'><div className='icon-message'>Удалить</div></div></div>
                                        </li>
                                    </ul>
                                </li>
                                <li className='saved-search__options-list-point'>
                                    Новый поиск <div className='saved-search__options-list-point-icons'><div className='icon-pushpin'><div className='icon-message'>Использовать по умолчанию</div></div><div className='icon-delete'><div className='icon-message'>Удалить</div></div></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='to-find'>
                        <h1 className='to-find__title'>Найти</h1>
                        <div className='to-find__inputs'>
                            <div className='to-find__input'>
                                <label htmlFor='to-find__customer-input'>Покупатель</label>
                                <input name='to-find__customer-input' id='to-find__customer-input' type='text'/>
                            </div>
                            <div className='to-find__input'>
                                <label htmlFor='to-find__email-input'>E-mail</label>
                                <input name='to-find__email-input' id='to-find__email-input' type='text'/>
                            </div>
                            <div className='to-find__input'>
                                <label htmlFor='to-find__phone-number-input'>Телефон</label>
                                <input name='to-find__phone-number-input' id='to-find__phone-number-input' type='text'/>
                            </div>
                            
                            <div className='to-find__price-inputs'>
                                <label htmlFor='to-find__start-price-input'>Итого (&#8381;)</label>
                                <div className='to-find__input'>
                                    <input name='to-find__start-price-input' id='to-find__start-price-input' type='text'/>
                                </div>
                                -
                                <div className='to-find__input'>
                                    <input name='to-find__end-price-input' id='to-find__end-price-input' type='text'/>
                                </div>
                            </div>
                        </div>
                        <div className='to-find__buttons'>
                            <button className='to-find__find'>Найти</button>
                            <div className='to-find__advanced-search' onClick={() => setAdvancedSearchPopupIsOpened(prev => !prev)}>Расширенный поиск</div>
                        </div>
                        <div className={`advanced-search ${advancedSearchPopupIsOpened ? 'advanced-search_opened' : ''}`}>
                            <div className='advanced-search__header'><h1 className='advanced-search__title'>Расширенный поиск</h1><div className='advanced-search__to-close icon-close' onClick={() => setAdvancedSearchPopupIsOpened(prev => !prev) }></div></div>
                            <div className='advanced-search__main-content'>
                                <div className='advanced-search__simple-search'>
                                    <div className='to-find__input'>
                                        <label htmlFor='to-find__customer-input'>Покупатель</label>
                                        <input name='to-find__customer-input' id='to-find__customer-input'/>
                                    </div>
                                    <div className='to-find__input'>
                                        <label htmlFor='to-find__email-input'>E-mail</label>
                                        <input name='to-find__email-input' id='to-find__email-input'/>
                                    </div>
                                    <div className='to-find__input'>
                                        <label htmlFor='to-find__phone-number-input'>Телефон</label>
                                        <input name='to-find__phone-number-input' id='to-find__phone-number-input'/>
                                    </div>
                                    
                                    <div className='to-find__price-inputs'>
                                        <label htmlFor='to-find__start-price-input'>Итого (&#8381;)</label>
                                        <div className='to-find__input'>
                                            <input name='to-find__start-price-input' id='to-find__start-price-input'/>
                                        </div>
                                        -
                                        <div className='to-find__input'>
                                            <input name='to-find__end-price-input' id='to-find__end-price-input'/>
                                        </div>
                                    </div>
                                </div>
                                <div className='advanced-search__manager'>
                                    <div className='to-find__input'>
                                        <label htmlFor='to-find__manager-input'>Менеджер</label>
                                        <input name='to-find__manager-input' id='to-find__manager-input'/>
                                    </div>
                                    <div className='advanced-search__no-manager'>
                                        <input type='checkbox' name='advanced-search__no-manager-input' id='advanced-search__no-manager-input'/>
                                        <label htmlFor='advanced-search__no-manager-input'><div className='icon-check'></div></label>
                                        <div className='advanced-search__no-manager-label'>Менеджер не назначен</div>
                                    </div>
                                </div>
                                <div className='advanced-search__period'>
                                    <div className='advanced-search__period-select'>
                                        <div className='advanced-search__period-label'>Период:</div>
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
                                    <div className='advanced-search__date-inputs'>
                                        <label htmlFor='advanced-search__start-date-input-label'>Выбрать даты:</label>
                                        <div className='advanced-search__start-date-input'><div className='icon-calendar'></div><input type='text' name='advanced-search__start-date-input' id='advanced-search__start-date-input'/></div>
                                        -
                                        <div className='advanced-search__end-date-input'><div className='icon-calendar'></div><input type='text' name='advanced-search__end-date-input' id='advanced-search__end-date-input'/></div>
                                    </div>
                                </div>
                                <div className='advanced-search__checkbox-group'>
                                    <h1 className='advanced-search__checkbox-group-title'>Статус заказа</h1>
                                    <div className='advanced-search__checkboxes'>
                                        <div className='advanced-search__checkbox'>
                                            <input type='checkbox' name='advanced-search__checkbox-period-1' id='advanced-search__checkbox-period-1'/>
                                            <label htmlFor='advanced-search__checkbox-period-1'><div className='icon-check'></div></label>
                                            <div className='advanced-search__checkbox-label'>Обработан</div>
                                        </div>
                                        <div className='advanced-search__checkbox'>
                                            <input type='checkbox' name='advanced-search__checkbox-period-2' id='advanced-search__checkbox-period-2'/>
                                            <label htmlFor='advanced-search__checkbox-period-2'><div className='icon-check'></div></label>
                                            <div className='advanced-search__checkbox-label'>На удержании</div>
                                        </div>
                                        <div className='advanced-search__checkbox'>
                                            <input type='checkbox' name='advanced-search__checkbox-period-3' id='advanced-search__checkbox-period-3'/>
                                            <label htmlFor='advanced-search__checkbox-period-3'><div className='icon-check'></div></label>
                                            <div className='advanced-search__checkbox-label'>Ожидает звонка</div>
                                        </div>
                                        <div className='advanced-search__checkbox'>
                                            <input type='checkbox' name='advanced-search__checkbox-period-4' id='advanced-search__checkbox-period-4'/>
                                            <label htmlFor='advanced-search__checkbox-period-4'><div className='icon-check'></div></label>
                                            <div className='advanced-search__checkbox-label'>Аннулирован</div>
                                        </div>
                                        <div className='advanced-search__checkbox'>
                                            <input type='checkbox' name='advanced-search__checkbox-period-5' id='advanced-search__checkbox-period-5'/>
                                            <label htmlFor='advanced-search__checkbox-period-5'><div className='icon-check'></div></label>
                                            <div className='advanced-search__checkbox-label'>Отложен</div>
                                        </div>
                                        <div className='advanced-search__checkbox'>
                                            <input type='checkbox' name='advanced-search__checkbox-period-6' id='advanced-search__checkbox-period-6'/>
                                            <label htmlFor='advanced-search__checkbox-period-6'><div className='icon-check'></div></label>
                                            <div className='advanced-search__checkbox-label'>Отклонен</div>
                                        </div>
                                        <div className='advanced-search__checkbox'>
                                            <input type='checkbox' name='advanced-search__checkbox-period-7' id='advanced-search__checkbox-period-7'/>
                                            <label htmlFor='advanced-search__checkbox-period-7'><div className='icon-check'></div></label>
                                            <div className='advanced-search__checkbox-label'>Неудача</div>
                                        </div>
                                        <div className='advanced-search__checkbox'>
                                            <input type='checkbox' name='advanced-search__checkbox-period-8' id='advanced-search__checkbox-period-8'/>
                                            <label htmlFor='advanced-search__checkbox-period-8'><div className='icon-check'></div></label>
                                            <div className='advanced-search__checkbox-label'>Открыт</div>
                                        </div>
                                        <div className='advanced-search__checkbox'>
                                            <input type='checkbox' name='advanced-search__checkbox-period-9' id='advanced-search__checkbox-period-9'/>
                                            <label htmlFor='advanced-search__checkbox-period-9'><div className='icon-check'></div></label>
                                            <div className='advanced-search__checkbox-label'>Выполнен</div>
                                        </div>
                                        <div className='advanced-search__checkbox'>
                                            <input type='checkbox' name='advanced-search__checkbox-period-10' id='advanced-search__checkbox-period-10'/>
                                            <label htmlFor='advanced-search__checkbox-period-10'><div className='icon-check'></div></label>
                                            <div className='advanced-search__checkbox-label'>Возвращено</div>
                                        </div>
                                        <div className='advanced-search__checkbox'>
                                            <input type='checkbox' name='advanced-search__checkbox-period-11' id='advanced-search__checkbox-period-11'/>
                                            <label htmlFor='advanced-search__checkbox-period-11'><div className='icon-check'></div></label>
                                            <div className='advanced-search__checkbox-label'>Незавершенный</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='advanced-search__details'>
                                    <div className='advanced-search__details-column'>
                                        <div className='advanced-search__details-select'>
                                            <div >Освобождение от налогов</div>
                                            <select>
                                                <option>--</option>
                                                <option>Да</option>
                                                <option>Нет</option>
                                            </select>
                                        </div>
                                        <div className='to-find__input'>
                                            <label htmlFor='to-find__order-number-input'>Номер заказа</label>
                                            <input name='to-find__order-number-input' id='to-find__order-number-input'/>
                                        </div>
                                        <div className='to-find__input'>
                                            <label htmlFor='to-find__company-input'>Компания</label>
                                            <input name='to-find__company-input' id='to-find__email-input'/>
                                        </div>
                                    <div/>
                                </div>
                                    <div className='advanced-search__details-column'>
                                        <div className='advanced-search__checkbox'>
                                            <div className='advanced-search__checkbox-label'>
                                                Имеет кредитовое извещение
                                            </div>
                                            <input type='checkbox' name='advanced-search__checkbox-credit' id='advanced-search__checkbox-credit'/>
                                            <label htmlFor='advanced-search__checkbox-credit'><div className='icon-check'></div></label>
                                        </div>
                                        <div className='to-find__input'>
                                            <label htmlFor='to-find__credit-input'>
                                                ID кредитового извещения
                                            </label>
                                            <input name='to-find__credit-input' id='to-find__credit-input'/>
                                        </div>
                                        <div className='advanced-search__checkbox'>
                                            <div className='advanced-search__checkbox-label'>
                                                Имеет счет
                                            </div>
                                            <input type='checkbox' name='advanced-search__checkbox-bank-account' id='advanced-search__checkbox-bank-account'/>
                                            <label htmlFor='advanced-search__checkbox-bank-account'><div className='icon-check'></div></label>
                                        </div>
                                        <div className='to-find__input'>
                                            <label htmlFor='to-find__bank-account-input'>
                                                Номер счета
                                            </label>
                                            <input name='to-find__bank-account-input' id='to-find__bank-account-input'/>
                                        </div>
                                    </div>
                            </div>
                                <div className='advanced-search__checkbox-group'>
                                    <h1 className='advanced-search__checkbox-group-title'>Доставка</h1>
                                    <div className='advanced-search__checkboxes'>
                                        <div className='advanced-search__checkbox'>
                                            <input type='checkbox' name='advanced-search__checkbox-delivery-1' id='advanced-search__checkbox-delivery-1'/>
                                            <label htmlFor='advanced-search__checkbox-delivery-1'><div className='icon-check'></div></label>
                                            <div className='advanced-search__checkbox-label'>Самовывоз</div>
                                        </div>
                                        <div className='advanced-search__checkbox'>
                                            <input type='checkbox' name='advanced-search__checkbox-delivery-2' id='advanced-search__checkbox-delivery-2'/>
                                            <label htmlFor='advanced-search__checkbox-delivery-2'><div className='icon-check'></div></label>
                                            <div className='advanced-search__checkbox-label'>Международное почтовое отправление</div>
                                        </div>
                                        <div className='advanced-search__checkbox'>
                                            <input type='checkbox' name='advanced-search__checkbox-delivery-3' id='advanced-search__checkbox-delivery-3'/>
                                            <label htmlFor='advanced-search__checkbox-delivery-3'><div className='icon-check'></div></label>
                                            <div className='advanced-search__checkbox-label'>Курьером «до двери»</div>
                                        </div>
                                        <div className='advanced-search__checkbox'>
                                            <input type='checkbox' name='advanced-search__checkbox-delivery-4' id='advanced-search__checkbox-delivery-4'/>
                                            <label htmlFor='advanced-search__checkbox-delivery-4'><div className='icon-check'></div></label>
                                            <div className='advanced-search__checkbox-label'>Почта России (pochta.ru)</div>
                                        </div>
                                        <div className='advanced-search__checkbox'>
                                            <input type='checkbox' name='advanced-search__checkbox-delivery-5' id='advanced-search__checkbox-delivery-5'/>
                                            <label htmlFor='advanced-search__checkbox-delivery-5'><div className='icon-check'></div></label>
                                            <div className='advanced-search__checkbox-label'>Обсудить с менеджером</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='advanced-search__checkbox-group'>
                                    <h1 className='advanced-search__checkbox-group-title'>Способ оплаты</h1>
                                    <div className='advanced-search__checkboxes'>
                                        <div className='advanced-search__checkbox'>
                                            <input type='checkbox' name='advanced-search__checkbox-payment-method-1' id='advanced-search__checkbox-payment-method-1'/>
                                            <label htmlFor='advanced-search__checkbox-payment-method-1'><div className='icon-check'></div></label>
                                            <div className='advanced-search__checkbox-label'>Банковская карта</div>
                                        </div>
                                        <div className='advanced-search__checkbox'>
                                            <input type='checkbox' name='advanced-search__checkbox-payment-method-2' id='advanced-search__checkbox-payment-method-2'/>
                                            <label htmlFor='advanced-search__checkbox-payment-method-2'><div className='icon-check'></div></label>
                                            <div className='advanced-search__checkbox-label'>Обсудить по телефону</div>
                                        </div>
                                        <div className='advanced-search__checkbox'>
                                            <input type='checkbox' name='advanced-search__checkbox-payment-method-3' id='advanced-search__checkbox-payment-method-3'/>
                                            <label htmlFor='advanced-search__checkbox-payment-method-3'><div className='icon-check'></div></label>
                                            <div className='advanced-search__checkbox-label'>Выставить счёт</div>
                                        </div>
                                        <div className='advanced-search__checkbox'>
                                            <input type='checkbox' name='advanced-search__checkbox-payment-method-4' id='advanced-search__checkbox-payment-method-4'/>
                                            <label htmlFor='advanced-search__checkbox-payment-method-4'><div className='icon-check'></div></label>
                                            <div className='advanced-search__checkbox-label'>Сбербанк</div>
                                        </div>
                                        <div className='advanced-search__checkbox'>
                                            <input type='checkbox' name='advanced-search__checkbox-payment-method-5' id='advanced-search__checkbox-payment-method-5'/>
                                            <label htmlFor='advanced-search__checkbox-payment-method-5'><div className='icon-check'></div></label>
                                            <div className='advanced-search__checkbox-label'>Яндекс Деньги p2p</div>
                                        </div>
                                        <div className='advanced-search__checkbox'>
                                            <input type='checkbox' name='advanced-search__checkbox-payment-method-6' id='advanced-search__checkbox-payment-method-6'/>
                                            <label htmlFor='advanced-search__checkbox-payment-method-6'><div className='icon-check'></div></label>
                                            <div className='advanced-search__checkbox-label'>Qiwi</div>
                                        </div>
                                        <div className='advanced-search__checkbox'>
                                            <input type='checkbox' name='advanced-search__checkbox-payment-method-7' id='advanced-search__checkbox-payment-method-7'/>
                                            <label htmlFor='advanced-search__checkbox-payment-method-7'><div className='icon-check'></div></label>
                                            <div className='advanced-search__checkbox-label'>WebMoney</div>
                                        </div>
                                        <div className='advanced-search__checkbox'>
                                            <input type='checkbox' name='advanced-search__checkbox-payment-method-8' id='advanced-search__checkbox-payment-method-8'/>
                                            <label htmlFor='advanced-search__checkbox-payment-method-8'><div className='icon-check'></div></label>
                                            <div className='advanced-search__checkbox-label'>Мобильный телефон</div>
                                        </div>
                                        <div className='advanced-search__checkbox'>
                                            <input type='checkbox' name='advanced-search__checkbox-payment-method-9' id='advanced-search__checkbox-payment-method-9'/>
                                            <label htmlFor='advanced-search__checkbox-payment-method-9'><div className='icon-check'></div></label>
                                            <div className='advanced-search__checkbox-label'>Кредит онлайн</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='advanced-search__ordered-goods'>
                                    <div className='advanced-search__ordered-goods-header'>
                                        <h1 className='advanced-search__ordered-goods-title'>Заказанные товары</h1>
                                        <button className='advanced-search__ordered-goods-add-button'><div className='icon-plus'></div> Добавить</button>
                                    </div>
                                    <div className='advanced-search__ordered-goods-quantity'><span>0</span> заданных товаров</div>
                                    <div className='advanced-search__ordered-goods-from-list'>или любой элемент осхраненного списка <select>
                                            <option>--</option>
                                            <option>Недавно добавленные</option>
                                        </select></div>
                                </div>
                                <div className='advanced-search__gift-certificate'>
                                    <div className='to-find__input'>
                                        <label htmlFor='advanced-search__gift-certificate-input'>Код подарочного сертификата:</label>
                                        <input type='text' name='advanced-search__gift-certificate-input' id='advanced-search__gift-certificate-input'/>
                                    </div>
                                    <select className='advanced-search__gift-certificate-select'>
                                        <option>--</option>
                                        <option>Куплен</option>
                                        <option>Использован</option>
                                    </select>
                                </div>
                            </div>
                            <div className='advanced-search__footer'>
                                <div className='advanced-search__footer-input'>
                                    <label htmlFor='advanced-search__footer-input'>Сохранить этот поиск как</label>
                                    <div>
                                        <input type='text' name='advanced-search__footer-input' id='advanced-search__footer-input'/>
                                        <button type='submit'>Сохранить</button>
                                    </div>
                                </div>
                                <div className='advanced-search__footer-buttons'>
                                    <button className='advanced-search__footer-cancel-button'>Отменить</button>
                                    <button className='advanced-search__footer-search-button' type='submit'>Найти</button>
                                </div>
                            </div>
                        </div>
                        <div className='popup__shadow'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
