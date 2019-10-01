import React from 'react'
import ReduxToastr from 'react-redux-toastr'
import '../../../node_modules/react-redux-toastr/lib/css/react-redux-toastr.min.css'


export default prop => (
    <ReduxToastr 
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates={true}
        prosition='top-right'
        transitionIn='fadeIn'
        transitionOut='fadeOut'
        progressBar /> 

)