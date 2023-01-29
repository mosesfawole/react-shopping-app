import { Button, Container, Navbar, Modal } from "react-bootstrap";
const NavbarComponent = () => {
  return (
    <div className="">
      <Navbar expand="sm">
        <Navbar.Brand href="/">Ecoomerce Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button>Cart 0 items</Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
