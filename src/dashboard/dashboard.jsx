import React, { Component } from 'react'
import Content from '../common/template/content';
import ContentHeader from '../common/template/contentheader';
import Row from '../common/layout/row';
import ValueBox from '../common/widget/valuebox';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { getSummary } from './dashbordAction'
import If from '../common/operador/If';


class DashBoard extends Component{

    componentWillMount(){
       
        this.props.getSummary()
    }
    
    render(){
        console.log(this.props.summary)
        const summary = this.props.summary
        return(
                <Row>
                    <If test={summary === undefined}>
                        <ContentHeader title='Dashbord' small='1.0' />
                        <Content>
                            <ValueBox cols='12 4' color='green' icon='bank' value={`R$ ${summary.credit}`}  text='Total de Créditos'/>
                            <ValueBox cols='12 4' color='red' icon='credit-card' value={`R$ ${summary.depts}`} text='Total de Débitos'/>
                            <ValueBox cols='12 4' color='blue' icon='money'  value={`R$ ${summary.redit - summary.depts}`}  text='Valor consolidado'/>
                        </Content>
                    </If>
                </Row>
            )
    }    
}

const mapStateToProps = state => ({
    summary: state.dashboard.summary,
    Api: state.Api
})

const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)

