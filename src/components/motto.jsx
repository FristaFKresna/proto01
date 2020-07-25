import React from 'react'
import low from './../public/low.png'
import trusted from './../public/trust.png'
import box from './../public/package.png'
import secure from './../public/shield.png'
import './../supports/css/motto.css'
import Fade from 'react-reveal/Fade';

class Motto extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="d-flex justify-content-around">
                    <Fade top cascade delay={2500} >
                        <div className="d-flex flex-column align-items-center">
                            <img src={low} alt='low' className='pict-motto' />
                            <div>Low Price</div>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <img src={trusted} alt='trusted' className='pict-motto'/>
                            <div>Trusted</div>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <img src={box} alt='box' className='pict-motto'/>
                            <div>Good Packaging</div>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <img src={secure} alt='secure' className='pict-motto'/>
                            <div>Secure</div>
                        </div>
                    </Fade>
                </div>
            </div>
        )
    }
}

export default Motto