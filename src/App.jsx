// bootstrap
import NavbarComponent from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
// react-router-dom
import { Routes, Route } from "react-router-dom";

import Cancel from "./pages/Cancel";
import Store from "./pages/Store";
import Success from "./pages/Success";
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
