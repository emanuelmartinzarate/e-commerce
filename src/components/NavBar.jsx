import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'
import CartWiget from './CartWiget'


function NavBar() {
    return (
        <Navbar className='navbar sticky-top navbar-expand-lg navbar-light'>
            <Container fluid>
                <NavLink className="nav-link" to="/">E-commerce</NavLink>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink className="nav-link" to="/category/A">Category A</NavLink>
                        <NavLink className="nav-link" to="/category/B">Category B</NavLink>
                    </Nav>
                    <Form className="d-flex">
                        <NavLink className="nav-link" to='/cart'><CartWiget/></NavLink>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar