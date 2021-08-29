import React from 'react'
import { Switch, Route } from 'react-router'

import AdminHeader from './AdminHeader'
import AdminHomePage from './AdminHomePage'
import AdminProfile from './AdminProfile'
import AdminLogin from './AdminLogin'

export default function Admin() {
    return (
        <div className='admin'>
            <AdminHeader/>
            <Switch>
                <Route path='/admin'>
                    <AdminHomePage/>
                </Route>
                <Route path='/admin/profile'>
                    <AdminProfile/>
                </Route>
                <Route path='/admin/login'>
                    <AdminLogin/>
                </Route>
            </Switch>
        </div>
    )
}
