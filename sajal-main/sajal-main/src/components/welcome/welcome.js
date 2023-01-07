import React from "react";
import './welcome.css'
const Welcome=()=>{
    return(
        <div className="box">
            <div className="button">buttons</div>
        <div className="text">Book from <button type="button" className="san dropdown-toggle"  >
      San Francisco
    </button>to</div>
        <div className="container">
        <div className="cities">LAS VEGAS<br/><div className="subhead">NV(LAS)</div></div>
          <div className="cities">LOS ANGELES<br/><div className="subhead">CA(LAX)</div></div>
          <div className="cities">NEW YORK CITY<br/><div className="subhead">NY(NYC)</div></div>
          <div className="cities">PALM SPRINGS<br/><div className="subhead">CA(PSP)</div></div>
          <div className="cities">PORTLAND<br/><div className="subhead">OR(PDX)</div></div>
          <div className="cities">ALL CITIES</div>
        </div>
        </div>
    )

}
export default Welcome;