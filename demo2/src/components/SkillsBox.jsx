import React from "react";
import Card from "./Card";

function SkillsBox(props){

  return(
    <div className="skillsbox">
    <p>{props.heading}</p>
    <div className="skillsflexbox">
    <Card title = {props.title1} url={props.url1} />
    <Card title = {props.title2} url={props.url2} />
    <Card title = {props.title3} url={props.url3} />

    </div>

    </div>
  )
}

export default SkillsBox;