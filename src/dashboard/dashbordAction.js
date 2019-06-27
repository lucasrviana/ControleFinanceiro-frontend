import Axios from "axios";
import API from "../main/API"


export function getSummary(){
    const request = Axios.get(API.summary)
    return{
        type:'BILLING_SUMMARY_FETCHED',
        payload: request
    }
}