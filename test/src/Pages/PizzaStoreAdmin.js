import React, { useState } from "react";
import { Card, Button, Form, Table, InputGroup } from "react-bootstrap";
import Header from "../Layout/header";
import Footer from "../Layout/footer";

function PizzaStoreAdmin() {
  const [cards, setCards] = useState([]);
  const [Price, setPrice] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [editingIndex, setEditingIndex] = useState(-1);

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleSubtitleChange = (event) => {
    setSubtitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleAddCard = () => {
    if (Price && subtitle && content && image) {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = () => {
        const newCard = { Price, subtitle, content, image: reader.result };
        if (editingIndex !== -1) {
          const updatedCards = [...cards];
          updatedCards[editingIndex] = newCard;
          setCards(updatedCards);
          setEditingIndex(-1);
        } else {
          setCards([...cards, newCard]);
        }
        setPrice("");
        setSubtitle("");
        setContent("");
        setImage(null);
      };
    }
  };

  const handleEditCard = (index) => {
    const cardToEdit = cards[index];
    setPrice(cardToEdit.Price);
    setSubtitle(cardToEdit.subtitle);
    setContent(cardToEdit.content);
    setImage(null);
    setEditingIndex(index);
  };

  const handleDeleteCard = (index) => {
    const updatedCards = cards.filter((_, i) => i !== index);
    setCards(updatedCards);
    setEditingIndex(-1);
  };

  return (
    <div>
      <Header />
      <Table bordered>
        <tbody>
          <tr>
            <td>Price</td>
            <td>
              <Form.Control
                type="text"
                value={Price}
                onChange={handlePriceChange}
                placeholder="Enter price"
              />
            </td>
          </tr>
          <tr>
            <td>Subtitle</td>
            <td>
              <Form.Control
                type="text"
                value={subtitle}
                onChange={handleSubtitleChange}
                placeholder="Enter subtitle"
              />
            </td>
          </tr>
          <tr>
            <td>Content</td>
            <td>
              <Form.Control
                as="textarea"
                rows={3}
                value={content}
                onChange={handleContentChange}
                placeholder="Enter content"
              />
            </td>
          </tr>
          <tr>
            <td>Image</td>
            <td>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </td>
          </tr>
        </tbody>
      </Table>
      <Button onClick={handleAddCard}>
        {editingIndex !== -1 ? "Save Card" : "Add Card"}
      </Button>{" "}
      <Button onClick={handleAddCard}>Add Another Card</Button>

      {/* Display cards */}
      {cards.map((card, index) => (
        <Card key={index} style={{ width: "18rem", margin: "10px" }}>
          <Card.Img variant="top" src={card.image} />
          <Card.Body>
            <Card.Title>{card.Price}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {card.subtitle}
            </Card.Subtitle>
            <Card.Text>{card.content}</Card.Text>
            <Button
              variant="primary"
              onClick={() => handleEditCard(index)}
            >
              Edit
            </Button>{" "}
            <Button
              variant="danger"
              onClick={() => handleDeleteCard(index)}
            >
              Delete
            </Button>
          </Card.Body>
        </Card>
      ))}
      <Footer />
    </div>
  );
}
export default PizzaStoreAdmin;
