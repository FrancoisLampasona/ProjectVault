import { useEffect, useState } from "react";
import CardProva from "./CardProva";
const URLAPI = "https://striveschool-api.herokuapp.com/api/agenda";

const CreatoreCard = function () {
  const [dataStato, setDataStato] = useState([]);

  useEffect(() => {
    fetch(URLAPI, {
      method: "GET",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("HTTP errore !");
      })
      .then((dataOttenuti) => {
        setDataStato(dataOttenuti);
      })
      .catch((error) => {
        console.error("Errore", error);
      });
  }, []);

  return (
    <div>
      {dataStato.map((element) => (
        <CardProva
          key={element._id}
          name={element.name}
          description={element.description}
          price={element.price}
          time={element.time}
        ></CardProva>
      ))}
    </div>
  );
};

export default CreatoreCard;
