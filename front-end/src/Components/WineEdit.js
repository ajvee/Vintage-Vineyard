import axios from "axios"
import { useState, useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"

const API = process.env.REACT_APP_API_URL

export default function WineEdit() {

let {id} = useParams()
let navigate = useNavigate()

const [wine, setWine] = useState({
    wine_name: "",
    rating: "",
    region: "",
    vintage: "",
    grape: "",
    price: "",
    notes: "",
    img:""
})


const updateWine = (updatedWine) => {
    axios
    .put(`${API}/wines/${id}`, updatedWine)
    .then(() => {
        navigate(`/wines/${id}`)
    },
        (error) => console.error(error)
    )
    .catch((c) => console.warn("catch", c))
}

const handleTextChange = (event) => {
    setWine({...wine, [event.target.id]: event.target.value})
}

useEffect(() => {
    axios
    .get(`${API}/wines/${id}`)
    .then((response) => setWine(response.data),
    (error) => navigate(`/not-found`)
    )
}, [id, navigate])


const handleSubmit = (event) => {
    event.preventDefault()
    updateWine(wine, id)
}


function getColor(score) {
  let color = "";
  if (score > 4) {
    color = "green";
  } else if (score >= 3 && score <= 3) {
    color = "yellow";
  } else {
    color = "red";
  }
  return color;
}


  return (

    <>
    <div className="edit">
        <h1> {wine.wine_name}</h1>
         <h1> <span style={{ color: getColor(wine.rating) }}>{wine.rating}</span> </h1> 
         <br></br>
         <div><img className="wineImg" alt="wineCover" src={wine.img} width={100}></img></div>

    </div>



      <form onSubmit={handleSubmit}>

    <div className="form-group">
    <label htmlFor="img">Photo</label>
    <input 
    id="img" 
    type="varchar" 
    value={wine.img} 
    onChange={handleTextChange}
    placeholder="Add image URL here" 
    className="form-control" 
    required
    />


  </div>
  <div className="form-group">
    <label htmlFor="wine_name">Wine Name: </label>
    <input 
    id="wine_name" 
    type="text" 
    value={wine.wine_name} 
    onChange={handleTextChange} 
    className="form-control" 
    required
    />


  </div>
  

  <div className="form-group">
    <label htmlFor="grape">Grape Variety: </label>
    <input 
    id="grape" 
    type="text" 
    value={wine.grape} 
    onChange={handleTextChange} 
    className="form-control" 
    required
    />
  </div>


  <div className="form-group">
    <label htmlFor="price">Price: </label>
    <input 
    id="price" 
    type="varchar" 
    value={wine.price} 
    onChange={handleTextChange} 
    className="form-control" 
    required
    />
  </div>


  <div className="form-group">
    <label htmlFor="vintage">Vintage: </label>
    <input 
    id="vintage" 
    type="number" 
    value={wine.vintage} 
    onChange={handleTextChange} 
    className="form-control" 
    required
    />
  </div>


  <div className="form-group">
    <label htmlFor="region">Region: </label>
    <input 
    id="region" 
    type="text" 
    value={wine.region} 
    onChange={handleTextChange} 
    className="form-control" 
    required
    />
  </div>


  <div className="form-group">
    <label htmlFor="rating">Rating: </label>
    <input 
    id="rating" 
    type="number" 
    value={wine.rating} 
    onChange={handleTextChange} 
    className="form-control" 
    required
    />
  </div>

  <div className="form-group">
    <label htmlFor="notes">Notes: </label>
    <input 
    id="notes" 
    type="text" 
    value={wine.notes} 
    onChange={handleTextChange} 
    className="form-control" 
    required
    />
  </div>

<br></br>
<input type="submit" />
</form>
<Link to={`/wines/${id}`}>
        <button>Back to details</button>
      </Link>
    </>
  )
}
