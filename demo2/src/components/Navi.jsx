import React from "react";
function Navi(props){
  return (
    <div className="navi">
        <ul>
          <a href="/"> <li>{props.li1}</li></a>
          <a href={props.li2}> <li>{props.li2}</li></a>
          <a href={props.li3}> <li>{props.li3}</li></a>
        </ul>
    </div>
  )
}

export default Navi;