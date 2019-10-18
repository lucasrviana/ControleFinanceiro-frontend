import React, { Component } from 'react'
import { getList , showUpdate, showDelete } from './billingCycleAction'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Row from '../common/layout/row'
import Grid from '../common/layout/grid'

class billingCyclesList extends Component {

    componentDidMount(){
        this.props.getList();
        
    }

    renderRows() {
        const  list = this.props.list || []
        
        return list.map(bc => (    
            <tr key={bc._id}>
                <td>{bc.name}</td>
                <td>{bc.month}</td>
                <td>{bc.year}</td>
                <td>
                    <button className='btn btn-warning' 
                    onClick={() => this.props.showUpdate(bc)}>
                    <i className='fa fa-pencil' />
                    </button>
                    <button className='btn btn-danger' 
                        onClick={() => this.props.showDelete(bc)}>
                        <i className='fa fa-trash-o' />
                    </button>
                </td>
            </tr>
        ))
    }

    render() {
        // const { list } = this.props
        //console.log(list)
        return (
            <Row>
                <Grid cols='12'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Mês</th>
                                <th>Ano</th>
                                <th className='table-actions'>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </Grid>
            </Row>
        )
    }
}

 const mapStateToProps = state => ({ list: state.billingCycle.list})
 const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate, showDelete },dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(billingCyclesList)