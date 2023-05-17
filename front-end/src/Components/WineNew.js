import axios from "axios"
import { useState } from "react"
import { useNavigate, Link  } from "react-router-dom"

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
    rated: "",
    price: "",
    platform: "",
    release_date: "",
    // game_content: "",
    rating: "",
})

const handleTextChange = (event) => {
    setWine({...wine, [event.target.id]: event.target.value})
}

const handleSubmit = (event) => {
    event.preventDefault()
    addWine(wine)
}

  return (
    <div>
         <form onSubmit={handleSubmit}>
  <div class="form-group1">
    <label for="title">Wine Name: </label>
    <input 
    id="title" 
    type="text" 
    value={wine.wine_name} 
    onChange={handleTextChange} 
    placeholder="Name of wine"
    class="form-control" 
    required
    />


  </div>
  <div class="form-group">
    <label for="rated">Region: </label>
    <input   
    id="rated" 
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
    type="number" 
    value={wine.price} 
    onChange={handleTextChange} 
    placeholder="Price"
    class="form-control" 
    required
    />
  </div>


  <div class="form-group">
    <label for="platform">Grape Variety: </label>
    <input 
    id="platform" 
    type="text" 
    value={wine.grape_variety} 
    onChange={handleTextChange} 
    placeholder="What game console"
    class="form-control" 
    required
    />
  </div>


  <div class="form-group">
    <label for="release_date">Vintage </label>
    <input 
    id="release_date" 
    type="nummber" 
    value={wine.vintage} 
    onChange={handleTextChange}
    placeholder="Year" 
    class="form-control" 
    required
    />
  </div>


  {/* <div class="form-group">
    <label for="game_content">Game Description: </label>
    <input 
    id="game_content" 
    type="text" 
    value={wine.game_content} 
    onChange={handleTextChange} 
    placeholder="Description of game"
    class="form-control" 
    required
    />
  </div> */}


  <div class="form-group">
    <label for="score">Rating: </label>
    <input 
    id="score" 
    type="number" 
    value={wine.rating} 
    onChange={handleTextChange} 
    placeholder="Rating from 0-5"
    class="form-control" 
    required
    />
  </div>

<br></br>
<input type="submit" />
</form>
<Link to={`/wines`}>
        <button>Back to Wines</button>
      </Link>
    </div>
  )
}
