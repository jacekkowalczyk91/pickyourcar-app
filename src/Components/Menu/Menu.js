import React from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import './Menu.css'

class Menu extends React.Component {
    render() {
        return(
            <div>
                <Navbar className='nav-menu'>
                    <Navbar.Toggle/>
                    <Navbar.Collapse>
                    <Nav>
                        <LinkContainer exact to="/">
                            <NavItem>Car list</NavItem>
                        </LinkContainer>
                        <LinkContainer exact to="/AddCar">
                            <NavItem>Add car</NavItem>
                        </LinkContainer>
                        <LinkContainer exact to='/SelectedCars'>
                            <NavItem>Selected car</NavItem>
                        </LinkContainer>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Menu