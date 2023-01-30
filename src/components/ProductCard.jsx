import { Card, Button, Form, Row, Col } from "react-bootstrap";

const ProductCard = (props) => {
  const products = props.product;
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
        </Card.Body>
        <Card.Text>${product.price}</Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card>
    </div>
  );
};

export default ProductCard;
