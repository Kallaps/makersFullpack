import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProductCard({ item, handleDelete, handleEdit }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          Price: {item.price} $ <br /> Description:{item.desc}
        </Card.Text>
        <Button onClick={() => handleDelete(item.id)} variant="primary">
          Delete
        </Button>
        <Button onClick={() => handleEdit(item.id)} variant="dark">
          Edit
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
