import React, { Component } from 'react'
import Row from '../common/layout/row'
import ContentHeader from '../common/template/contentheader'
import Content from '../common/template/content'
import Tabs from '../common/tab/Tabs'
import TabsHeader from '../common/tab/TabsHeader'
import TabsContent from '../common/tab/TabsContent'
import TabHeader from '../common/tab/TabHeader';
import TabContent from '../common/tab/TabContent';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { selectTab, showTabs } from '../common/tab/TabActions'
import List from '../billingCycle/billingCycleList';
import Form from './billingCycleForm';
import Grid from '../common/layout/grid'
import { create, update, remove } from './billingCycleAction'

class billingCycles extends Component {

    
    componentWillMount() {
        this.props.selectTab('tabList')
        this.props.showTabs('tabList', 'tabCreate')
    }

    render() {
        return (
            <Row>
                <Grid cols='12'>
                    <ContentHeader title='Ciclo de Pagamento' small='Cadastro' />
                    <Content>
                        <Tabs>
                            <TabsHeader>
                                <TabHeader label='Listar' icon='bars' target='tabList' />
                                <TabHeader label='Incluir' icon='plus' target='tabCreate' />
                                <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
                                <TabHeader label='Exluir' icon='trash-o' target='tabDelete' />
                            </TabsHeader>
                            <TabsContent>
                                <TabContent id='tabList' >
                                    <ContentHeader title='Lista' small='' />
                                    <List />
                                </TabContent>
                                <TabContent id='tabCreate' > 
                                    <ContentHeader title='Incluir' small='' />
                                    <Form onSubmit={this.props.create}/>
                                </TabContent>
                                <TabContent id='tabUpdate' >
                                    <ContentHeader title='Alterar' small='' />
                                    <Form onSubmit={this.props.update}/>
                                </TabContent>
                                <TabContent id='tabDelete' >   
                                    <ContentHeader title='Remover' small='' />
                                    <Form readOnly={true} onSubmit={this.props.remove}/>
                                </TabContent>
                            </TabsContent>
                        </Tabs>
                    </Content>
                </Grid>
            </Row>
        )
    }
}
const mapStateToProps = state => ({ tab: state.tab })
const mapDispatchToProps = dispatch => bindActionCreators({ selectTab, showTabs, create, update, remove }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(billingCycles)