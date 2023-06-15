import React from "react";
function Banner(props){
  return(
    <div className="banner">
    <img alt="pic" src={props.url}></img>
    </div>
  )
}

export default Banner;