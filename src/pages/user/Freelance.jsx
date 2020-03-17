import React from 'react'
import i4 from '../../sources/images/bg2.png'
import wonm from '../../sources/images/wonm.png'
import wom from '../../sources/images/wom.png'
import wsd from '../../sources/images/wsd.png'
import rnma from '../../sources/images/rnma.png'

import {Link as L} from 'react-router-dom'
import '../../styles/Pages.css'
const Freelance = () => {
    return (
        <div className='mnDiv'>
            <img src={i4} className="bannerImg" alt=""/>
            <h1>Freelance Work</h1>
            <h5 className="up20">Feel Free to <L to='/contact'>Contact Me</L> </h5>
            <div className="freeCont">
                <div className="freeContTp">
                <div className="freeContTpLt">
                    <img src={wonm}alt="freelance website only" className="imgTpLt imgFree"/>
                </div>
                <div className="freeContTpRt">
                    <img src={wom} alt="website managed" className="imgTpRt imgFree "/>
                </div>
                </div>
                <div className="freeContBt">
                <div className="freeContBtLt">
                    <img src={rnma} alt="react native mobile app" className="imgBtLt imgFree"/>
                </div>
                <div className="freeContBtRt">
                    <img src={wsd} alt="website design" className="imgBtRt imgFree"/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Freelance
