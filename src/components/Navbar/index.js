import React from 'react'
import {Nav, NavbarContainer, NavLogo} from './NavbarElements'

const Navbar = () => {
    return (
       <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>dollar</NavLogo>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <Navlinks to="about">About</Navlinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
       </>
    )
}

export default Navbar
