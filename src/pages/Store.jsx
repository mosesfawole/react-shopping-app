// bootstrap
import { Row, Col } from "react-bootstrap";
// products data
import { productsArray } from "../productsStore";

const Store = () => {
  return (
    <div>
      <h1 align="center" className="p-3">
        Welcome to the store!
      </h1>
      <Row xs={1} md={3} className="g-4">
        {productsArray.map((product, index) => (
          <Col align="center" key={index}>
            <h1>{product.title}</h1>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Store;
