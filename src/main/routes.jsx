import React from 'react'
import AuthOrApp from './authOrApp'
import Messages from '../common/msg/mensages';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from '../common/template/header'
import Sidebar from '../common/template/Sidebar'
import Footer from '../common/template/footer'
import DashBoard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'
export default props => (
    <Router>
        <Header />
        <Sidebar />
        <div className='content-wrapper'>
            <Route path='/DashBoard' component={DashBoard} >
                {/* <DashBoard /> */}
            </Route>
            <Route path='/billingCycle' component={BillingCycle}>
                {/* <BillingCycle /> */}
            </Route>
        </div>
        <Footer />
        <Messages />



        {/* <Redirect from='*' to='/' />  */}
    </Router>
)