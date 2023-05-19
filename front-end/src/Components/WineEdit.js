// import axios from "axios"
// import { useState, useEffect } from "react"
// import { useParams, Link, useNavigate } from "react-router-dom"

// const API = process.env.REACT_APP_API_URL

// export default function WineEdit() {

// let {id} = useParams()
// let navigate = useNavigate()

// const [wine, setWine] = useState({
//     wine_name: "",
//     rating: "",
//     region: "",
//     vintage: "",
//     grape_variety: "",
//     price: "",
// })


// const updateWine = (updatedWine) => {
//     axios
//     .put(`${API}/wines/${id}`, updatedWine)
//     .then(() => {
//         navigate(`/wines/${id}`)
//     },
//         (error) => console.error(error)
//     )
//     .catch((c) => console.warn("catch", c))
// }

// const handleTextChange = (event) => {
//     setWine({...wine, [event.target.id]: event.target.value})
// }

// useEffect(() => {
//     axios
//     .get(`${API}/wines/${id}`)
//     .then((response) => setWine(response.data),
//     (error) => navigate(`/not-found`)
//     )
// }, [id, navigate])


// const handleSubmit = (event) => {
//     event.preventDefault()
//     updateWine(wine, id)
// }


// function getColor(score) {
//   let color = "";
//   if (score > 4) {
//     color = "green";
//   } else if (score >= 3 && score <= 3) {
//     color = "yellow";
//   } else {
//     color = "red";
//   }
//   return color;
// }


//   return (

//     <>
//     <div className="edit">
//         <h1> {wine.wine_name}</h1>
//          <h1> <span style={{ color: getColor(wine.rating) }}>{wine.rating}</span> </h1> 
//     </div>


//       <form onSubmit={handleSubmit}>
//   <div className="form-group">
//     <label htmlFor="title">Wine Name: </label>
//     <input 
//     id="title" 
//     type="text" 
//     value={wine.wine_name} 
//     onChange={handleTextChange} 
//     className="form-control" 
//     required
//     />


//   </div>
  

//   <div className="form-group">
//     <label htmlFor="genre">Grape Variety: </label>
//     <input 
//     id="genre" 
//     type="text" 
//     value={wine.grape_variety} 
//     onChange={handleTextChange} 
//     className="form-control" 
//     required
//     />
//   </div>


//   <div className="form-group">
//     <label htmlFor="platform">Price: </label>
//     <input 
//     id="platform" 
//     type="text" 
//     value={wine.price} 
//     onChange={handleTextChange} 
//     className="form-control" 
//     required
//     />
//   </div>


//   <div className="form-group">
//     <label htmlFor="release_date">Vintage: </label>
//     <input 
//     id="release_date" 
//     type="text" 
//     value={wine.vintage} 
//     onChange={handleTextChange} 
//     className="form-control" 
//     required
//     />
//   </div>


//   <div className="form-group">
//     <label htmlFor="game_content">Region: </label>
//     <input 
//     id="game_content" 
//     type="text" 
//     value={wine.region} 
//     onChange={handleTextChange} 
//     className="form-control" 
//     required
//     />
//   </div>


//   <div className="form-group">
//     <label htmlFor="score">Rating: </label>
//     <input 
//     id="score" 
//     type="number" 
//     value={wine.rating} 
//     onChange={handleTextChange} 
//     className="form-control" 
//     required
//     />
//   </div>

// <br></br>
// <input type="submit" />
// </form>
// <Link to={`/wines/${id}`}>
//         <button>Back to the cellar</button>
//       </Link>
//     </>
//   )
// }
