import React from "react";

function Card(props){
  return (
    <div className="card">

    <p>{props.title}</p>
    <img alt="pic" src={props.url} />

    </div>
  )
}

export default Card;