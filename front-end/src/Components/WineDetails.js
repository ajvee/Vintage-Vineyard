import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import "../Css/WineDetails.css";
import ModalDelete from "./ModalDelete"

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

  return (

    <article className="details">
        
        {wine && (
        <div className="details-container">
        <h1 style={{ fontStyle: 'italic'}}>{wine.wine_name} </h1>
        <br></br>
        <h2>Wine Score - <span style={{ color: getColor(wine.rating) }}>{wine.rating}</span></h2>
          <div><img className="wineImg" alt="wineCover" src={wine.img} width={100}></img></div>
        <br></br>
        <div className="section">
        <h4 className="section-title">Region:</h4>
        <p className="section-content">{wine.region}</p>
        </div>      
        <div className="section">
        <h4 className="section-title">Grape Blend:</h4>
        <p className="section-content">{wine.grape}</p>
        </div>
        <div className="section">
        <h4 className="section-title">Tasting Notes:</h4>
        <p className="section-content">{wine.notes}</p>
        </div>      
        <div className="section">
        <h4 className="section-title">Vintage:</h4>
        <p className="section-content">{wine.vintage}</p>
        </div>
        <div className="section">
        <h4 className="section-title">Price:</h4>
        <p className="section-content">{wine.price}</p>
        </div>
            </div>
        )}
        
      <div className="showNavigation">

        <div className="buttonContainer">
          {" "}
          <Link to={`/wines`} >
          <button>Back</button>
          </Link> 
          
           <Link to={`/wines/${id}/edit`}>
          <button>Edit</button>
          </Link>
          <ModalDelete handleDelete={handleDelete} />        
        </div>
    </div>
  </article> 
 )
 
}

