import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import './../supports/css/navbar.css';
import logo from './../public/logoNannys.png'

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='fixed-top'>
      <Navbar color="light" light expand="md">
        <NavbarBrand>
            <img className='logo' alt='logo' src={logo} width={50} />
        </NavbarBrand>

        <NavbarBrand>
            <div className='navigation'>
                Nanny's Warehouse
            </div>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href='/'><div className='navigation-item'>Home</div></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#about'><div className='navigation-item'>About Us</div></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#products'><div className='navigation-item'>Products</div></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#contact'><div className='navigation-item'>Contact Us</div></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;