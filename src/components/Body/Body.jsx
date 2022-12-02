import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

import "./Body.css";

function Body({ favo, setFavo }) {
  // Passing states to filter the cards
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);
  const [searched, setSearched] = useState({
    price: "",
    nameLocation: "",
    date: "",
    type: "",
    search: "",
  });
  const [filter, setFilter] = useState("");

  // Main code starts here

  // Fetching the data from API
  useEffect(() => {
    axios.get(`https://frozen-harbor-02472.herokuapp.com/oyo`).then((res) => {
      console.log(res.data);
      setData(...[res.data]);
      setSearch(res.data);
    });
  }, []);

  // Filteration of cards on click starts here...

  const handleSearch = () => {
    let splitRent = searched.price.split("-");
    console.log(searched);
    const filterCard = search.filter((value) => {
      let myDate = new Date(searched.date).getTime();
      let enteredDate = new Date(value.date).getTime();
      if (
        value.location
          .toLowerCase()
          .includes(searched.nameLocation.toLowerCase()) &&
        ((parseInt(splitRent[0]) <= value.price &&
          parseInt(splitRent[1]) >= value.price) ||
          searched.price === "") &&
        (value.type.toLowerCase() === searched.type.toLowerCase() ||
          searched.type === "") &&
        (myDate >= enteredDate || searched.date === "")
      ) {
        return value;
      }
    });
    setData(filterCard);
    console.log(filterCard);
  };

  // Fetching the value

  const handleFilter = (e) => {
    const value = e.target.value;
    setSearched({
      ...searched,
      [e.target.name]: value,
    });
  };

  return (
    <>
    {/* Section to filter cards on search */}
      <section className="section flex">
        <h2 id="heading">Search properties to rent</h2>
        <input
          type="text"
          id="search-properties"
          name="search"
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Search property by name..."
        />
      </section>
      {/* Section to filter the cards on click based on different conditions */}
      <div className="search flex">
        <div className="location">
          <h6>Location</h6>
          <input
            type="text"
            id="location"
            placeholder="Search location here..."
            name="nameLocation"
            onChange={handleFilter}
          />
        </div>
        <div className="date">
          <h6>When</h6>
          <input type="date" id="date" name="date" onChange={handleFilter} />
        </div>
        <div>
          <h6>Price</h6>
          <select id="price" name="price" onChange={handleFilter}>
            <option value="0-2000" name="price">
              0-2000
            </option>
            <option value="2001-4000" name="price">
              2001-4000
            </option>
            <option value="4001-6000" name="price">
              4001-6000
            </option>
            <option value="6001-8000" name="price">
              6001-8000
            </option>
            <option value="8001-10000" name="price">
              8001-10000
            </option>
          </select>
        </div>
        <div>
          <h6>Property Type</h6>
          <select id="property" name="type" onChange={handleFilter}>
            <option value="houses" name="type">
              House
            </option>
            <option value="commercial" name="type">
              Commercial
            </option>
            <option value="industrial" name="type">
              Industrial
            </option>
            <option value="land" name="type">
              Land
            </option>
            <option value="office" name="type">
              Office
            </option>
          </select>
        </div>
        <div>
          <button onClick={handleSearch} id="filter-btn">
            Filter
          </button>
        </div>
      </div>
      <div className="container flex">
        {data.filter((val) => {
                if (filter === "") {
                  return val;
                } else if (
                  val.name.toLowerCase().includes(filter.toLowerCase())
                ) {
                  return val;
                }
              }).map(
          ({ name, location, beds, bathrooms, price, area, img, date }) => (
            <div className="cont">
              <Card
                name={name}
                location={location}
                area={area}
                beds={beds}
                bathrooms={bathrooms}
                price={price}
                size={area}
                img={img}
                date={date}
                setFavo={setFavo}
                favo={favo}
                isFav={true}
              />
            </div>
          )
        )}
      </div>
    </>
  );
}

export default Body;
