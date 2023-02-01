import { Button, Container, Navbar, Modal } from "react-bootstrap";

//
import { useState } from "react";
const NavbarComponent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="">
      <Navbar expand="sm">
        <Navbar.Brand href="/">E-commerce Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={handleShow}>Cart 0 items</Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
          <Modal.Body>This the products</Modal.Body>
        </Modal.Header>
      </Modal>
    </div>
  );
};

export default NavbarComponent;
