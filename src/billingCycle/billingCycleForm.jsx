import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { init } from './billingCycleAction'
import labelAndInput from '../common/form/labelAndInput'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Grid from '../common/layout/grid'
import Row from '../common/layout/row'
class BillingCycleForm  extends Component{

    render(){
        const { handleSubmit, init ,readOnly } = this.props
        
        return(
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' 
                           component={labelAndInput} readOnly={readOnly}
                           cols='12 4' label='Nome' 
                           placeholder='Informe o nome' 
                           type='text'/>

                    <Field name='month' 
                           component={labelAndInput} readOnly={readOnly}
                           cols='12 4' label='Mês' 
                           placeholder='Informe o mês' 
                           type='number'/>
                    <Field name='year' 
                           component={labelAndInput} readOnly={readOnly}
                           cols='12 4' label='Ano' 
                           placeholder='Informe o ano' 
                           type='number'/>
                </div>
                <div className='box-footer'>
                    <Row>
                        <Grid cols='2'>
                            <button type='submit' className='btn btn-primary'>submit</button>
                        </Grid>
                        <Grid cols='2'>
                            <button type='button' 
                                    onClick={init} 
                                    className='btn btn-danger '>Cancel</button>
                        </Grid>
                    </Row>
                </div>
            </form>
        )
    }    
}

BillingCycleForm = reduxForm({form:'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)

//const mapStateToProps = state => ({ })
const mapDispatchToProps = dispatch => bindActionCreators({ init },dispatch)

export default connect(null, mapDispatchToProps)(BillingCycleForm)