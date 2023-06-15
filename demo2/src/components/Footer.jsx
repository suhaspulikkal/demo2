import React from "react";

function Footer(){
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="footer">
      <h5>Suhas Pulikkal {year}</h5>
    </div>
  )
}

export default Footer;