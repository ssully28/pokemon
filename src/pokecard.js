import React from "react";
import Card from 'react-bootstrap/Card';

class Pokecard extends React.Component {
  render() {
    const { id, name, type, base_experience } = this.props;

    let img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return (
      <Card style={{ width: '18rem', border: 'solid 1px black'}}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {type}
          </Card.Text>
        </Card.Body>
      </Card>

    );
  }
}

export default Pokecard;