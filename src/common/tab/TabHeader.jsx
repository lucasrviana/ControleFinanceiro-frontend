import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { selectTab } from './TabActions'
import If from '../operador/If';

class tabHeader extends Component {
    render() {
        const selected = this.props.tab.selected === this.props.target
        const visible = this.props.tab.visible[this.props.target]
        return (

            <If test={visible}>
                <li className={selected ? 'active' : ''}>
                    
                    <div href="#"
                        data-toggle='tab'
                        onClick={() => this.props.selectTab(this.props.target)}
                        data-target={this.props.target}>
                        <i className={`fa fa-${this.props.icon}`}></i>{this.props.label}
                    </div> {this.props.tab.selectTab}
                </li>
            </If>
        )
    }
}

const mapStateToProps = state => ({ tab: state.tab })
const mapDispatchToProps = dispatch => bindActionCreators({ selectTab }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(tabHeader)