import React from 'react'
import { useState } from 'react'
import Calendar from 'react-calendar'

export default function AdminHomePageHeader() {
    const [startPickedDate, setStartPickedDate] = useState(null)
    const [endPickedDate, setEndPickedDate] = useState(null)
    const [dateDropdownIsOpen, setDateDropdownIsOpen ] = useState(false)

    const toggleDateDropdownIsOpen = () => {
        setDateDropdownIsOpen(!dateDropdownIsOpen)
    }
   

    const pickStartDate = (value, event) => {
        setStartPickedDate({
            date: value,
            element: event.currentTarget
        })
        event.currentTarget.style.backgroundColor = 'rgb(0, 75, 214)'
        event.currentTarget.style.color = '#fff'
        if(startPickedDate){
            startPickedDate.element.style.backgroundColor = ''
            startPickedDate.element.style.color = '#000'
        }
    }
    const pickEndDate = (value, event) => {
        setEndPickedDate({
            date: value,
            element: event.currentTarget
        })
        event.currentTarget.style.backgroundColor = 'rgb(0, 75, 214)'
        event.currentTarget.style.color = '#fff'
        if(endPickedDate){
            endPickedDate.element.style.backgroundColor = ''
            endPickedDate.element.style.color = '#000'
        }
    }
    return (
            <>
                    <div className='header__date-selector date-selector' onClick={toggleDateDropdownIsOpen}>
                        08/02/2021 — 08/02/2021 <div className=' icon-down-arrow'></div>
                    </div>
                    <button className='header__date-selector-button' onClick={toggleDateDropdownIsOpen}><div className='icon-calendar'></div></button>
                    <div className='header__dropdown dropdown' style={{display: dateDropdownIsOpen ? 'flex' : 'none'}}>
                            <div className='dropdown__dropdown-calendars'>
                                <Calendar onClickDay={pickStartDate}/>
                                <Calendar onClickDay={pickEndDate}/>
                            </div>
                            <div className='dropdown__dropdown-sets'>
                                <div className='dropdown__dropdown-buttons'>
                                    <button className='dropdown__dropdown-button'>Сегодня</button>
                                    <button className='dropdown__dropdown-button'>Вчера</button>
                                    <button className='dropdown__dropdown-button'>Текущий месяц</button>
                                    <button className='dropdown__dropdown-button'>Последний месяц</button>
                                    <button className='dropdown__dropdown-button'>Текущий год</button>
                                    <button className='dropdown__dropdown-button'>Предыдущий год</button>
                                    <button className='dropdown__dropdown-button'>Пользовательский</button>
                                </div>
                                <div className='dropdown__dropdown-from-to'>
                                    <div className='dropdown__dropdown-from-to-inputs'>
                                        <div className='dropdown__dropdown-from-input'>
                                            <label htmlFor='dropdown__dropdown-from-input'>ОТ</label>
                                            <input type='text' id='dropdown__dropdown-from-input' name='dropdown__dropdown-from-input'/>
                                        </div>
                                        <div className='dropdown__dropdown-to-input'>
                                            <label htmlFor='dropdown__dropdown-to-input'>ДО</label>
                                            <input type='text' id='dropdown__dropdown-to-input' name='dropdown__dropdown-to-input'/>
                                        </div>
                                    </div>
                                    <div className='dropdown__dropdown-from-to-buttons'>
                                        <button className='dropdown__dropdown-from-to-button dropdown__dropdown-from-to-apply-button'>Применить</button>
                                        <button className='dropdown__dropdown-from-to-button dropdown__dropdown-from-to-cancel-button'>Отменить</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                </>
    )
}
