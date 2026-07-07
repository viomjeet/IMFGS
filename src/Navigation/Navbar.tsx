import { NavLink } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav, Container, NavDropdown } from 'react-bootstrap';

export default function Navbar() {
    return (
        <BootstrapNavbar expand="lg" className="bg-body-tertiary shadow-sm" style={{ position: 'sticky', top: 0, zIndex: 10 }}>
            <Container fluid>
                <BootstrapNavbar.Brand as={NavLink} to="/"><span style={{ fontWeight: "bold" }}>IMFGS</span></BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BootstrapNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/score">Score</Nav.Link>
                        <NavDropdown title="More Options" id="basic-nav-dropdown" align="end">
                            <NavDropdown.Item as={NavLink} to="/profile">Profile</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/settings">Settings</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={NavLink} to="/logout">Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
}