import axios from "axios"
import { useState } from "react"
import { useNavigate, Link  } from "react-router-dom"
import "../Css/WineNew.css"

const API = process.env.REACT_APP_API_URL

export default function WineNew() {
let navigate = useNavigate()

const addWine = (newWine) => {
    axios
      .post(`${API}/wines`, newWine)
      .then(
        () => {
          navigate(`/wines`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };
  

  const [wine, setWine] = useState({
    wine_name: "",
    region: "",
    price: "",
    grape: "",
    vintage: "",
    rating: "",
    notes: "",
    img:"",
});

const handleTextChange = (event) => {
    setWine({ ...wine, [event.target.id]: event.target.value})
};

const handleSubmit = (event) => {
    event.preventDefault()
    addWine(wine)
}

  return (
    <div>
  <form onSubmit={handleSubmit}>

  <div class="form-group1">
    <label for="wine_name">Wine Name: </label>
    <input 
    id="wine_name" 
    type="text" 
    value={wine.wine_name} 
    onChange={handleTextChange} 
    placeholder="Name of wine..."
    class="form-control" 
    required
    />
    <br></br>


  </div>
  <div class="form-group">
    <label for="region">Region: </label>
    <input   
    id="region" 
    type="text" 
    value={wine.region} 
    onChange={handleTextChange} 
    placeholder="Country, State, City, Town..."
    class="form-control" 
    required
    />
  </div>


  <div class="form-group">
    <label for="price">Price: </label>
    <input 
    id="price" 
    type="varchar" 
    value={wine.price} 
    onChange={handleTextChange} 
    placeholder="Price..."
    class="form-control" 
    required
    />
  </div>




  <div class="form-group">
    <label for="grape">Grape Variety: </label>
    <input 
    id="grape" 
    type="text" 
    value={wine.grape} 
    onChange={handleTextChange} 
    placeholder="..."
    class="form-control" 
    required
    />
  </div>


  <div class="form-group">
    <label for="vintage">Vintage: </label>
    <input 
    id="vintage" 
    type="number" 
    value={wine.vintage} 
    onChange={handleTextChange}
    placeholder="Year..." 
    class="form-control" 
    required
    />
  </div>

  <div class="form-group">
    <label for="rating">Rating: </label>
    <input 
    id="rating" 
    type="number" 
    value={wine.rating} 
    onChange={handleTextChange} 
    placeholder="Rating from 0-5..."
    class="form-control" 
    required
    />
  </div>

  <div class="form-group">
    <label for="notes">Tasting Notes: </label>
    <input 
    id="notes" 
    type="text" 
    value={wine.notes} 
    onChange={handleTextChange} 
    placeholder="..."
    class="form-control" 
    required
    />
  </div>

  <div class="form-group">
    <label for="img">Wine Photo</label>
    <input 
    id="img" 
    type="varchar" 
    value={wine.img} 
    onChange={handleTextChange} 
    placeholder="Add image URL here" 
    class="form-control" 
    />
  </div>
<br></br>

<input type="submit" />

</form>
<Link to={`/wines`}>
        <button className="back-btn" >Back to Wines</button>
</Link>
    </div>
  )
}
