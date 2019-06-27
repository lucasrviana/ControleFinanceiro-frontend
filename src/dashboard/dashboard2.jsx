import React, { Component } from 'react'
import Content from '../common/template/content';
import ContentHeader from '../common/template/contentheader';
import Row from '../common/layout/row';
import ValueBox from '../common/widget/valuebox';
import Axios from "axios";
const URL = 'http://localhost:3033/api'

class DashBoard2 extends Component{

    constructor(props){
        super(props)
        this.state = {credit: 0, depts: 0}
    }


    componentWillMount(){

        Axios.get(`${URL}/BillingCicles/summary`)
             .then(resp => this.setState(resp.data))
    }
    
    render(){
        const { credit, depts } = this.state
        return(
                <Row>
                    <ContentHeader title='Dashbord' small='2.0' />
                    <Content>
                        <ValueBox cols='12 4' color='green' icon='bank' value={`R$ ${credit}`}  text='Total de Créditos'/>
                        <ValueBox cols='12 4' color='red' icon='credit-card' value={`R$ ${depts}`} text='Total de Débitos'/>
                        <ValueBox cols='12 4' color='blue' icon='money'  value={`R$ ${credit - depts}`}  text='Valor consolidado'/>
                    </Content>
                </Row>
            )
    }    
}


export default DashBoard2

