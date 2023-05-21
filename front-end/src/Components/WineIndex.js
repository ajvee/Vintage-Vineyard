import axios from "axios";
import { useState, useEffect } from "react";
import Wine from "./Wine";
import "../Css/WineIndex.css"

const API = process.env.REACT_APP_API_URL;


function Wines() {
  const [wines, setWines] = useState([]);

  useEffect(() => {
    axios.get(`${API}/wines`)
      .then((response) => setWines(response.data))
      .catch((err) => console.warn("catch", err));
  }, []);

  return (
    <div className="Wine">
      <table className="Wines">
        <thead>
          <tr>
            <th className="Wines-header">Wine Name</th>
            <th className="Wines-header">Grape Variety/Varietal</th>
            <th className="Wines-header">Price</th>
            <th className="Wines-header">Region</th>
            <th className="Wines-header">Vintage</th>
            <th className="Wines-header">Rating out of 5</th>
          </tr>
        </thead>
        <tbody>
          {wines
            ? wines.map((wine) => {
                return <Wine key={wine.id} wine={wine} />;
              })
            : null}
        </tbody>
      </table>
    </div>
  );

}

export default Wines;