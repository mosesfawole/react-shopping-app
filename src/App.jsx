import NavbarComponent from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="">
      <Container>
        <Routes>
          <Route index element={<Store />} />
          <Route path="success" element={<Success />} />
          <Route path="cancel" element={<Cancel />} />
        </Routes>
        <NavbarComponent></NavbarComponent>
      </Container>
    </div>
  );
}

export default App;
