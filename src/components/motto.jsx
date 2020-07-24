import React from 'react'
import low from './../public/low.png'
import trusted from './../public/trust.png'
import box from './../public/package.png'
import secure from './../public/shield.png'
import './../supports/css/motto.css'

class Motto extends React.Component{
    render(){
        return(
            <div className="container wrapper-motto">
                <div className="row pict-motto">
                        <img src={low} alt='low-price' className="pict"/>
                        <img src={trusted} alt='trusted' className="pict" />
                        <img src={box} alt='package' className="pict" />
                        <img src={secure} alt='secure' className="pict" />
                </div>
                    
                <div className="row text-motto-all">
                        <div className='low-price'>Low Price</div>
                        <div className='trusted'>Trusted</div>
                        <div className='package'>Good Packaging</div>
                        <div className='secure'>Secure</div>
                </div>
            </div>
        )
    }
}

export default Motto