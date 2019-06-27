import React from 'react'

export default prop => (
<li>
    <a href={prop.path}>
        <i className={`fa fa-${prop.icon}`}></i> {prop.label}
    </a>
</li>
)