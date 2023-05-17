import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
// import Reviews from "./Reviews"
// import ModalDelete from "./ModalDelete"

const API = process.env.REACT_APP_API_URL

export default function WineDetails() {

const [wine, setWine] = useState([])
const { id } = useParams()
let navigate = useNavigate()

//fetch data 
useEffect(() => {
    axios
    .get(`${API}/wines/${id}`)
    .then((response) => {
        setWine(response.data)
    }).catch((e) => {
        console.warn("catch", e)
    })
}, [id,])

//delete func
const deleteWine = () => {
    axios.delete(`${API}/wines/${id}`)
    .then(() => {
        navigate(`/wines`)
    },
     (error) => console.error(error)
    )
    .catch((c) => console.warn("catch", c))
  
}


//handling the delete
const handleDelete = () => {
    deleteWine()
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

//rated, title, genre, platform, release_date, content
  return (

    <article className="details">
        
        {wine && (
        <div className="details">
        <h1>{wine.wine_name} </h1>
        <br></br>
        <h2>Wine Score - <span style={{ color: getColor(wine.rating) }}>{wine.rating}</span></h2>
          <div><img className="gameImg" alt="GameCover" src={wine.img} width={100}></img></div>
        <br></br>
      <h4>Region: {wine.region}</h4>
      <h4>Grape Blend: {wine.grape_variety}</h4>
      {/* <h4>: {wine.price}</h4> */}
      <h4>Vintage: {wine.vintage}</h4>
      <h4>Price:</h4>
      <p>{wine.price}</p>
            </div>
        )}
        
      <div className="showNavigation">

        <div>
          {" "}
          <Link to={`/wines`} >
          <button>Back</button>
          </Link> 
          
           <Link to={`/wines/${id}/edit`}>
          <button>Edit</button>
          </Link>
          {/* <ModalDelete handleDelete={handleDelete} />         */}
        </div>
    </div>
 {/* <Reviews />  */}
  </article> 
 )
 
}

