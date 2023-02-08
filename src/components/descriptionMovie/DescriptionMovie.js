import React from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
const DescriptionMovie = ({ movie }) => {
  const params = useParams();
  console.log(params);
  // const movieId= params.id;
  const desc = movie.find((el) => el.id === Number(params.id));
  return (
    <div >
        <Card>
<Card.Body>
  <Card.Title> Movie name : {desc.titre} </Card.Title>
  <Card.Text> <p> Description: {desc.description}</p>
   </Card.Text>
   <Link to="/">
        {" "}
        <Button id="btn-back" variant="light">back</Button>{' '}
      </Link>
</Card.Body>
</Card>
      {/* <h2> </h2>
      <hr></hr>
      <p> Description: {desc.description}</p>
      */}
    </div>



  );
};

export default DescriptionMovie;
