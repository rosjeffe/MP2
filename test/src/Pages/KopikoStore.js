import React from "react";
import Header from "../Layout/header";
// import Content from "../layout/content";
import Footer from "../Layout/footer";
import { Card } from "react-bootstrap";


const KopikoStore = (cards) =>{
    return(
      <div>
<Header></Header>
{cards.map((card, index) => (
        <Card key={index} style={{ width: "18rem", margin: "10px" }}>
          <Card.Img variant="top" src={card.image} />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {card.subtitle}
            </Card.Subtitle>
            <Card.Text>{card.content}</Card.Text>
          </Card.Body>
        </Card>
          ))}
<Footer />
      </div>
      

       
        
    )
};
export default KopikoStore;