import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/TabActions'
import API from "../main/API"

const INITIAL_VALUE = {}

export function getList() {
    const request = axios.get(API.BillingCicles);
    return{
        type:'BILLING_CYCLE_FETCHED',
        payload: request
    }
}

export function showUpdate(BillingCicles) {
    return[ 
        showTabs('tabUpdate'), 
        selectTab('tabUpdate'), 
        initialize('billingCycleForm', BillingCicles)
    ]
}

export function showDelete(BillingCicles) {
    return[ 
        showTabs('tabDelete'), 
        selectTab('tabDelete'), 
        initialize('billingCycleForm', BillingCicles)
    ]
}



function submit(values, method){
    return dispatch => {
        const url = values._id ? API.BillingCicles +'/'+values._id : API.BillingCicles
       
        axios[method](url, values)
            .then(resp => {
                toastr.success('Sucesso','Operação Realizada com sucesso')
                dispatch(init(url))
            }).catch(e => {
                console.log(e)
                    e.response.data.errors.forEach(error => {
                        toastr.error('Erro', error )
                    });
            });
    
    }
}

export function create(Values) {
    return submit(Values, 'post')
}

export function update(Values) {
    return submit(Values, 'put')
}

export function remove(Values) {
    return submit(Values, 'delete')
}

export function init() {
    return[
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUE)
    ]
}