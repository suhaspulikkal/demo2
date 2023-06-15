import React from "react";
import Navi from "./Navi";
import Banner from "./Banner";
import SkillsBox from "./SkillsBox";
import Footer from "./Footer";

function Home() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div>
      <Navi li1='Home' li2='Profile' li3="About"/>
      
     <Banner url="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220416200936/Top-10-Front-End-Developer-Skills-That-You-Need-in-2022.png"/>
   
      <SkillsBox 
      heading = "Programming languages"
      title1 = "Html" 
      title2 = "Css" 
      title3 = "JS"
      // url1 = "/images/html.png"
      // url2 = "/images/css.png"
      // url3 = "/images/js.png"
      url1 = {PF +"/images/html.png"}
      url2 = {PF +"/images/css.png"}
      url3 = {PF +"/images/js.png"}
      />
      
      {/* <Banner url ="/images/banner.jpg"/> */}
      <Banner url = {PF +"/images/banner.jpg"} />

      <SkillsBox 
      heading = "Frontend Framework"
      title1 = "React"
      url1 = "build/images/react.png"
      // url1 = {PF +"/images/react.png"}
      title2 = "JQuery"
      url2 = "build/images/jquery.jpg"
      // url2 = {PF +"/images/jquery.jpg"}
      title3 = "Bootstrap"
      url3 = "build/images/bootstrap.png"
      // url3 = {PF +"/images/bootstrap.png"}
      />

      <Footer />

    </div>


  )
}

export default Home;