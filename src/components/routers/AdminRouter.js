import React from 'react'
import UserRouter from './UserRouter'
import { Switch, Route } from 'react-router-dom'

import AdminHeader from '../admin/Header/AdminHeader'
import AdminHomePageHeader from '../admin/Header/AdminHomePageHeader'
import AdminLogin from '../admin/AdminLogin'
import AdminProfile from '../admin/AdminProfile'
import AdminHomePage from '../admin/AdminHomePage'
import AllOrders from '../admin/orders/AllOrders'
import Reports from '../admin/orders/Reports'

export default function AdminRouter() {
    return (
        <Switch>
            <Route path='/admin' exact>
                <div className='admin'>
                    <AdminHeader additionalModule={AdminHomePageHeader} title='Панель инструментов'/>
                    <AdminHomePage/>
                </div>
            </Route>
            <Route path='/admin/orders/allorders' exact>
                <div className='admin'>
                    <AdminHeader additionalModule={AdminHomePageHeader} title='Все заказы'/>
                    <AllOrders/>
                </div>
            </Route>
            <Route path='/admin/orders/reports' exact>
                <div className='admin'>
                    <AdminHeader additionalModule={AdminHomePageHeader} title='Отчеты'/>
                    <Reports/>
                </div>
            </Route>
            <Route path='/admin/profile' exact>
                <div className='admin'>
                    <AdminHeader additionalModule={AdminHomePageHeader}/>
                    <AdminProfile/>
                </div>
            </Route>
            <Route path='/admin/login' exact>
                <div className='admin'>
                    <AdminHeader/>
                    <AdminLogin/>
                </div>
            </Route>
            <Route path='' exact>
                <UserRouter/>
            </Route>
            
        </Switch>
    )
}
