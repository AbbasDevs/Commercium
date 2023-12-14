import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap';
import {FaShoppingCart,FaUser} from 'react-icons/fa';
import logo from '../assets/logo.png';
const Header = () => {
  return (
    <header>
        <header>
      <Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect>
        <Container>
            <img src={logo} alt="logo"/>
        <Navbar.Brand href='/'>Commercium</Navbar.Brand>
        
        </Container>
      </Navbar>
    </header>
    </header>
  )
}

export default Header