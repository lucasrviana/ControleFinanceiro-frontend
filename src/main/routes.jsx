import React from 'react'
import { HashRouter, Route, Redirect } from 'react-router-dom'

import DashBoard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'
export default props => (
    <HashRouter>
        <Route path='/' component={DashBoard} />
        <Route path='/billingCycle' component={BillingCycle} />
        <Redirect from='*' to='/' />
    </HashRouter>
)