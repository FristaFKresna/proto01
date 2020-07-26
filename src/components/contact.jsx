import React from 'react'
import './../supports/css/contact.css'
import logo1 from './../public/facebook.png'
import logo2 from './../public/instagram.png'
import { MapCompany } from './map'

class Contact extends React.Component{
    render(){
        return(
            <div id='contact' className="container-fluid d-flex flex-column wrapper">
                <h2 className='title'>Contact Us</h2>
                
                <div className="d-flex justify-content-center flex-lg-row flex-column wrapper-contact">
                    <span className='map-container'>
                        <MapCompany/>
                    </span>
                    <div className="d-flex flex-column wrapper-office">
                        <h3>Office :</h3>
                        <div className='content-office'>
                            <div>Jalan Trunojoyo no 11</div>
                            <div>Citarum, Kec. Bandung Wetan</div>
                            <div>Kota Bandung, Jawa Barat 40115</div>
                            <div>Email : ripoff80@gmail.com</div>
                            <div>Phone : +62-857-7702-6189</div>
                        </div>
                    </div>
                    {/* <img alt='map' className='location' src={sampel}/> */}
                    <div className="d-flex flex-column">
                        <h3>Social Media</h3>
                        <div className='row'>
                            <img alt='facebook' className='social-media' src={logo1} />
                            <img alt='instagram' className='social-media' src={logo2} />
                        </div>
                    </div>
                </div>

                <div className='container copyright'>
                    Copyright 2020 Ripoff. All Rights Reserved
                </div>
                
            </div>
        )
    }
}

export default Contact