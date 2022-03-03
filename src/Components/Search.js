import React, { useEffect, useState } from "react";
import Details from "./Details";

const Search = () => {
  const [data, setData] = useState([]);
  fetch(
    "https://hotels4.p.rapidapi.com/locations/v2/search?query=new%20york&locale=en_US&currency=USD",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "hotels4.p.rapidapi.com",
        "x-rapidapi-key": "f5349089a5mshe441359d794b838p1498b9jsn7771da995a68",
      },
    }
  )
    .then((response) => response.json())

    .then((data) => {
      console.log(data);
      setData(data);
    })
    .catch((err) => {
      console.error(err);
    });
  //   fetch(
  //     "https://travel-advisor.p.rapidapi.com/attractions/list-by-latlng?longitude=109.19553&latitude=12.235588&lunit=km&currency=USD&lang=en_US",
  //     {
  //       method: "GET",
  //       headers: {
  //         "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
  //         "x-rapidapi-key": "f5349089a5mshe441359d794b838p1498b9jsn7771da995a68",
  //       },
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data.data);
  //       setData(data);
  //     })

  //     .catch((err) => {
  //       console.error(err);
  //     });
  useEffect(() => {
    fetch();
  }, []);
  return (
    <div>
      {/* <Details tours={tours} /> */}
      {/* {data && Object.keys.length > 0
        ? data.data.map((item) => {
            <div>
              <li>{item.name}</li>
              <li>{item.latitude}</li>
            </div>;
          })
        : ""} */}
      {data.map((item) => (
        <li>
          <h1>{item.name}</h1>
        </li>
      ))}
      <h1>Search</h1>
    </div>
  );
};

export default Search;
