import React from 'react'

export default prop => (
<li className='treeview'>
    <a href={prop.path}>
        <i className={`fa fa-${prop.icon}`}></i> {prop.label}
        <i className={`fa fa-angle-left pull-right`}></i> 
    </a>
    <ul className='treeview-menu'>
        {prop.children}
    </ul>
</li>

)