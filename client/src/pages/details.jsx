import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import CardDetails from "../components/Cards/CardDetails";

const Details = () => {
  const [detailsG, setdetailsG] = useState([]);
  const { id } = useParams();
  const url =`http://localhost:3001/videogames/${id}`;
  useEffect(() => {
    axios.get(url).then((res) => setdetailsG(res.data));
  },[url]);
  return (
    <>  
      {detailsG.length === 0 ? (
        <h1 style={{position:"relative" , top:"30vh" , fontSize:"5rem"}}>Loading</h1>
      ) : (
        detailsG.map((pos) => {
          return (
            <CardDetails
            key={pos.id}
              id={pos.id}
              name={pos.name}
              image={pos.image}
              genres={pos.genres}
              description={pos.description}
              released={pos.released}
              rating={pos.rating}
              platforms={pos.platforms}
            />
          );
        })
      )}
    </>
  );
};

export default Details;
