import React from "react";
import { Link } from "react-scroll";

export default function BackToTop() {
  return (
    <div style={{display:'flex', justifyContent:'center'}}>
      <Link to="main" spy={true} smooth={true} offset={0} duration={500}>
        <button className="nav-item registro">Back to top</button>
      </Link>
    </div>
  );
}
