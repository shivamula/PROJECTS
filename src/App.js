import React, { useState, useEffect } from "react";
import axios from "axios";
import { Loading } from "./Components/Loading";

import { Tours } from "./Components/Tours";
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
    console.log(newTours);
  };
  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }

    console.log(tours);
  };
  useEffect(() => {
    fetchTours();
  }, []);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const tours = await axios("https://course-api.com/react-tours-project");
  //     setTours(tours.data);
  //     console.log(tours.data);
  //   };
  //   fetchData();
  // }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <div className="App">
      {/* {tours.map((item) => {
        return (
          <div>
            <h1>{item.name}</h1>
            <h1>{item.id}</h1>
            <img src={item.image} />
            <p>{item.info}</p>
            <h5>{item.price}</h5>
          </div>
        );
      })} */}

      <Tours tours={tours} removeTour={removeTour} />
      <Loading />
    </div>
  );
}

export default App;
