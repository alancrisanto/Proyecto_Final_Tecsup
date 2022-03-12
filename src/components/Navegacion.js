import { Navbar, Nav, Container, NavLink, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

import imagenes from "../assets/imagenes";

export default function Navegacion() {
  const { user, signOut, signIn } = useContext(AuthContext);

  return (
    <Navbar expand="lg" className="absolute-top navbar-collapse">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img className="logo" src={imagenes.img23_logo} alt="Logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="bg-white bg-lg-transparent"
        >
          <Nav className="me-auto align-items-center mt-3 m-lg-0">
            <Link
              className="nav-link p-2  text-primary fw-lighter me-0 me-lg-3 mt-3 m-lg-0"
              to="/pagina2"
            >
              Publicacion
            </Link>
            <Link
              className="nav-link  p-2 text-primary fw-lighter me-0 me-lg-3 mt-3 m-lg-0"
              to="/pagina4"
            >
              Registro
            </Link>
         
            <Link
              className="nav-link p-2  text-primary fw-lighter me-0 me-lg-3 mt-3 m-lg-0"
              to="/pagina6View"
            >
              Publicar
            </Link>
          </Nav>
          <Nav>
            {user ? (
              <NavDropdown
                title={
                  <div className="d-inline">
                    <img
                      src={user.photoURL}
                      className="me-2"
                      alt="avatar"
                      style={{ borderRadius: "50%", width: "30px" }}
                    />
                    <span>{user.displayName}</span>
                  </div>
                }
              >
                <NavDropdown.Item onClick={signOut}> Salir </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Link
                className="nav.link  btn-primary rounded-circle-boton p-3 me-0 me-lg-4"
                to="/pagina3"
                style={{ color: "white" }}
              >
                Ingresar
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
