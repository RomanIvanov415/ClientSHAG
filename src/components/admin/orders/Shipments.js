import React from 'react'

export default function Shipments() {
    return (
        <div className='shipments'>
            <div className='container'>
                <div className='shipment__main'>
                    <div className='shipment__placeholder'>
                        Здесь пока ничего нет
                    </div>
                </div>
                <div className='shipment__selectors'>
                    <div className='shipment__search'>
                        <h1 className='shipment__search-title'>
                            Найти
                        </h1>
                        <div className='shipment__search-input'>
                            <label htmlFor='shipment__ID-search-input'>ID</label>
                            <input type='text' name='shipment__ID-search-input' id='shipment__ID-search-input'/>
                        </div>
                        <div className='shipment__search-input'>
                            <label htmlFor='shipment__name-search-input'>Имя</label>
                            <input type='text' name='shipment__name-search-input' id='shipment__name-search-input'/>
                        </div>
                        <div className='shipment__search-input'>
                            <label htmlFor='shipment__phone-numder-search-input'>Телефон</label>
                            <input type='text' name='shipment__phone-numder-search-input' id='shipment__phone-number-search-input'/>
                        </div>
                        <div className='shipment__search-buttons'>
                            <button className='shipment__to-find-button'>Найти</button>
                            <span className='shipment__advanced'>Расширенный поиск</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
