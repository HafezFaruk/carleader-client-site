import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import useAuth from "../../hooks/useAuth";
import logo from "../../images/logo.png";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="/home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={Link} className="text-white" to="/home">
              Home
            </Nav.Link>

            <Nav.Link as={Link} className="text-white" to="/explore">
              Explore
            </Nav.Link>
            {user.email && (
              <>
                <Nav.Link as={Link} className="text-white" to="/dashboard">
                  Dashboard
                </Nav.Link>
                <Nav.Link as={Link} className="text-white" to="/AddReview">
                  AddReview
                </Nav.Link>
                <Nav.Link as={Link} className="text-white" to="/myorders">
                  MyOrder
                </Nav.Link>
                <Nav.Link as={Link} className="text-white" to="/manageorders">
                  ManageOrders
                </Nav.Link>
              </>
            )}
            <Navbar.Text className="text-dark">
              <a href="#login" className="text-white">
                {user?.displayName}
              </a>
            </Navbar.Text>
            {!user?.email ? (
              <Nav.Link as={Link} className="text-white" to="/login">
                Login
              </Nav.Link>
            ) : (
              <button onClick={logOut} variant="light">
                Logout
              </button>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
