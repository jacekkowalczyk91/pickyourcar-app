import React from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import './Menu.css'

class Menu extends React.Component {
    render() {
        return(
            <div>
                <Navbar className='nav-menu'>
                    <Nav>
                        <LinkContainer exact to="/">
                            <NavItem>Lista samochodów</NavItem>
                        </LinkContainer>
                        <LinkContainer exact to="/AddCar">
                            <NavItem>Dodaj samochód</NavItem>
                        </LinkContainer>
                        <LinkContainer exact to='/SelectedCars'>
                            <NavItem>Wybrane samochody</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar>;
            </div>
        )
    }
}

export default Menu