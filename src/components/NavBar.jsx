import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'
import CartWiget from './CartWiget'


function NavBar() {
    return (
        <Navbar bg="ligth" expand="lg">
            <Container fluid>
                <NavLink to="/">E-commerce</NavLink>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink to="/category/A">Category A</NavLink>
                        <NavLink to="/category/B">Category B</NavLink>
                    </Nav>
                    <Form className="d-flex">
                        <NavLink to='/cart'><CartWiget/></NavLink>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar