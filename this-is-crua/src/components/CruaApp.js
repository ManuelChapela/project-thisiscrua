import React from 'react'
import CruaBody from './CruaBody'
import CruaFooter from './CruaFooter'
import CruaHeader from './CruaHeader'

const CruaApp = () => {
    return (
        <div className='cruaApp__container_general'>
            <CruaHeader/>
            <CruaBody/>
            <CruaFooter/>
        </div>
    )
}


export default CruaApp