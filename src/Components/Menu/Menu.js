import React from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

class Menu extends React.Component {
    render() {
        return(
            <div>
                <Navbar>
                    <Nav>
                        <LinkContainer to="/">
                            <NavItem>Lista samochodów</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/AddCar">
                            <NavItem>Dodaj samochód</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar>;
            </div>
        )
    }
}

export default Menu