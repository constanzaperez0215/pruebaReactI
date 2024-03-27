
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function NavBar() {
  return (
    <Navbar expand="lg" className="bg-success">
      <Container fluid>
        <Navbar.Brand href="#"><i className="fa-solid fa-paw"></i></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Historia</Nav.Link>
            <Nav.Link href="#action2">Donaciones</Nav.Link>
            <NavDropdown title="Más" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action4">
                Adopta
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Apadrina a un Huachito
              </NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>



        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;