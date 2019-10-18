import dashboard from '../dashboard/dashbordReducer'
import { combineReducers } from 'redux'
import TabReducer from '../common/tab/TabReducer';
import AuthReducer from '../auth/authReducer'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'
import billingCycleReducer from '../billingCycle/billingCycleReducer';

const rootReducer = combineReducers({
    dashboard: dashboard,
    tab: TabReducer,
    billingCycle: billingCycleReducer,
    form: formReducer,
    toastr: toastrReducer,
    auth: AuthReducer
})

export default rootReducer  