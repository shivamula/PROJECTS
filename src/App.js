import React, { useEffect, useState } from "react";
import Search from "./Components/Search";
import "./index.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://hotels4.p.rapidapi.com/locations/v2/search?query=new%20york&locale=en_US&currency=USD",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "hotels4.p.rapidapi.com",
          "x-rapidapi-key":
            "f5349089a5mshe441359d794b838p1498b9jsn7771da995a68",
        },
      }
    )
      .then((response) => response.json())

      .then((data) => {
        console.log(data.suggestions);
        setData(data.suggestions);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div>
      {Object.keys.length > 0
        ? data.map((item, index) => {
            return (
              <div key={index}>
                <h5>{item.group}</h5>
                <div>
                  {item.entities.map((sub, index) => {
                    return (
                      <table>
                        <tr>
                          <th>Name</th>
                          <th>Type</th>
                          <th>geo id</th>
                          <th>Destination Id</th>
                          <th>landmarkCityDestinationId</th>
                          <th>latitude</th>
                          <th>longitude</th>
                        </tr>
                        <td>{sub.name}</td>
                        <td>{sub.type}</td>
                        <td>{sub.geoId}</td>
                        <td>{sub.destinationId}</td>
                        <td>{sub.landmarkCityDestinationId}</td>
                        <td>{sub.latitude}</td>
                        <td>{sub.longitude}</td>
                      </table>
                    );
                  })}
                </div>
              </div>
            );
          })
        : ""}
      {/* <div>
          <h1>{Object.keys}</h1>
        </div> */}
    </div>
  );
}

export default App;
