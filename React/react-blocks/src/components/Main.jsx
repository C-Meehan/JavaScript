import React from 'react'
import Subcontent from './Subcontent';
import Advertisment from './Advertisment';
// import './Components.css';

const main = () => {
    return (
        <div className="main">
            <div className="subflex">
                <Subcontent/>
                <Subcontent/>
                <Subcontent/>
            </div>
            <div><Advertisment/></div>
        </div>
    )
}

export default main