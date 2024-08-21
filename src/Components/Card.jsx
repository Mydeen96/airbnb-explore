import React from "react";
// import ReactDOM from "react-dom/client";

export default function Card(props) {
    let badgesText ;
    if(props.item.openSpots === 0){
        badgesText = "SOLDOUT" 
    }
    else if(props.item.location === "Online"){
        badgesText = "ONLINE" 
    }
    return (
       
         <div className="product">
            <img className="image" src={`./images/${props.item.coverImg}`} alt="coveer-image" />
            { badgesText && <span className="sale" d> {badgesText}</span>}
            <div className="ratings">
                <img className="star" src="./images/star.png" alt="star" />
                <span className="star-rating">{props.item.stats.rating}
                    <span className="greys"> ({props.item.stats.reviewCount}).{props.item.location}</span>
                </span>
            </div>
            <p className="title">{props.item.title}</p>
            <p className="price">From {props.item.price} <span> / person</span></p>
         </div>
    )
}