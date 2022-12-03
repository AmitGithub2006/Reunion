import React from "react";
import { TbBed } from "react-icons/tb";
import { MdOutlineBathroom } from "react-icons/md";
import { BiCheckboxSquare } from "react-icons/bi";
import { GrFavorite } from "react-icons/gr";
import Card from "react-bootstrap/Card";

import "./Card.css";

function Cards({
  name,
  location,
  beds,
  bathrooms,
  price,
  area,
  img,
  favourite,
  setFavourite,
  isFav,
}) {

  // Initializing a variable to add values to the card 
  const cardDetails = {
    name,
    location,
    beds,
    bathrooms,
    price,
    area,
    img,
  };
  return (
    <>
    {/* Returning the card individually */}
      <div className="cards" key={name}>
        <Card style={{ width: "18rem" }} className="card"> 
          <Card.Img id="img" variant="top" src={img} />
          <Card.Body>
            <div className="rent-div">
              <div>
                <span className="rent">${price}</span>
                <span className="per-month">/month</span>
              </div>
              {isFav && (
                <span
                  id="favorite"
                  onClick={() => {
                    setFavourite([...favourite, cardDetails]);
                  }}
                >
                  <span id="heart">
                    <GrFavorite />
                  </span>
                </span>
              )}
            </div>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{location}</Card.Text>
            <div className="details">
              <span>
                <span className="icon">
                  <TbBed />
                </span>{" "}
                = {beds}
              </span>
              <span>
                <span className="icon">
                  <MdOutlineBathroom />
                </span>{" "}
                = {bathrooms}
              </span>
              <span>
                <span className="icon">
                  <BiCheckboxSquare />
                </span>{" "}
                = {area}m<sup>2</sup>
              </span>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Cards;
