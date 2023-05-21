import { Link } from 'react-router-dom'
import React from 'react'
import "../Css/Home.css"

export default function Home() {
  
return (
    <>
<div className='container'>
<Link to={`/wines/`}>
<h1 className='header'> Come on in and have a glass at Vintage Vineyards</h1>
</Link>

</div>
</>
)}
