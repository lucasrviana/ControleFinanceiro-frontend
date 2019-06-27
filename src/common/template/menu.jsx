import React from 'react'
import MenuItem from './menuitem'
import MenuTree from './menutree'

export default prop => (
<ul className='sidebar-menu'>
    <MenuItem path='#/' label='Dashboard' icon='dashboard' />
    <MenuTree label='Cadastro' icon='edit'>
        <MenuItem path='#/billingcycle' label='Ciclos de Pagamentos' icon='usd'/>
    </MenuTree>
</ul>
)