import dashboard from '../dashboard/dashbordReducer'
import { combineReducers } from 'redux'
import TabReducer from '../common/tab/TabReducer';

import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'
import billingCycleReducer from '../billingcycle/billingCycleReducer';

const rootReducer = combineReducers({
    dashboard: dashboard,
    tab: TabReducer,
    billingCycle: billingCycleReducer,
    form: formReducer,
    toastr: toastrReducer
})

export default rootReducer  