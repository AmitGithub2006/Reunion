import React, {useState, useEffect} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import {TbBed} from "react-icons/tb";
import {MdOutlineBathroom} from "react-icons/md";
import {BiCheckboxSquare} from "react-icons/bi";
import {GrFavorite} from "react-icons/gr";

import "./Body.css";

function Body() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`https://frozen-harbor-02472.herokuapp.com/datas`)
        .then((res) => {
            console.log(res.data);
            setData(...[res.data]);
        })
    },[])

  return (
    <>
      <section className="section">
        <h2 id="heading">Search properties to rent</h2>
        <Form id="form">
          <Form.Control
            type="search"
            placeholder="Search room for rent..."
            className="me-2"
            aria-label="Search"
          />
        </Form>
      </section>
      <div className="container">
        {data.map((card) => (
          <div className="cards" key={card.id}>
            <Card style={{ width: "18rem" }} className="card">
              <Card.Img id='img' variant="top" src={card.img} />
              <Card.Body>
                <span className="rent">${card.price}</span>
                <span className="per-month">/month</span>
                <span>
                  <GrFavorite />
                </span>
                <Card.Title>{card.name}</Card.Title>
                <Card.Text>{card.location}</Card.Text>
                <span>
                  <TbBed /> = {card.beds}
                </span>
                <span>
                  <MdOutlineBathroom /> = {card.bathrooms}
                </span>
                <span>
                  <BiCheckboxSquare /> = {card.size}m<sup>2</sup>
                </span>
                <Button variant="primary">Add to Favourites</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}

export default Body;