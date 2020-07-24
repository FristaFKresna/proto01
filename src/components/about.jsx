import React from 'react';
import logo from './../public/logoNannys.png'
import './../supports/css/about.css';

class AboutUs extends React.Component{
    render(){
        return(
            <div id='about' className="container content">
                <h2 className='about'>About Us</h2>
                <div className="row">
                    <div className="col-md">
                        <img className='logo-about' alt='logo-about' src={logo}/>
                    </div>
                    <div className="col-md about-desc">
                        <div className='text-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut finibus purus. Nullam aliquet quis sem nec ullamcorper. Cras non consequat augue. Praesent congue sapien in felis facilisis scelerisque. Vestibulum sed ipsum eu erat varius ultricies eu sed diam. Morbi eleifend massa vitae euismod rutrum. Nullam aliquam magna elit, ac commodo ante placerat et. Sed condimentum dolor dolor, sed porttitor lectus fringilla nec. Vestibulum non egestas arcu, vitae pretium odio. Etiam diam augue, hendrerit eget semper quis, iaculis nec lectus. Morbi pulvinar leo mauris, a suscipit augue commodo at. Curabitur suscipit placerat malesuada. Vivamus nec lectus sed mauris iaculis ultrices sit amet id massa. Donec semper, eros sit amet viverra rhoncus, felis quam scelerisque ex, vitae sollicitudin justo sem quis tortor. Fusce ac lobortis mi. Aliquam erat volutpat.</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutUs