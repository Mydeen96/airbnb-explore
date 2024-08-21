import React from 'react'
// import ReactDOM from 'react-dom/cleint'
import Navbar from './Components/Navbar'
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import data from "./Components/data";


export default function App() {
  const cards = data.map( item => {
    return(
      <Card 
          key = {item.id}
          item = {item} 
      />
    )
  })
    return(
        <div className="conatiner">
          <Navbar />
          <Hero />
          <div className="card">
            {cards}
          </div>
        </div>
    )
}


