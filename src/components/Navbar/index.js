import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';
import logo from '../Navbar/k4tech.png'
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>
                    <img src={logo} alt='k4tech' />
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to=''>
                        Home
                    </NavLink>
                    <NavLink to=''>
                        Our Projects
                    </NavLink>
                    <NavLink to=''>
                        About us
                    </NavLink>
                    <NavLink to=''>
                        Work with us
                    </NavLink>
                    <NavLink to=''>
                        Contact Us
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/italian'>
                        IT
                    </NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar;