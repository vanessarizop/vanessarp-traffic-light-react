
import React, { useState } from "react";
import '../../styles/index.css';

const Hook=()=>{

let [color,setColor]=useState('red');

return(
 		<div className="d-flex justify-content-center align-items-center flex-column">
			<div className="soporteSemaforo"></div>
            <div className="semaforo rounded-2 d-flex justify-content-center align-items-center flex-column">
    
    <div>
      <button type="button" onClick={() => setColor("red")}
        className={`btn btn-danger btn-lg rounded-circle mb-3 ${color === "red" ? "glowred" : ""}`} style={{ width: "160px", height: "160px" }} >
      </button>
    </div>
    <div>
        <button type="button" onClick={()=> setColor("yellow")}
          className={`btn btn-warning btn-lg rounded-circle mb-3 ${color === "yellow" ? "glowyellow" : ""}`} style={{ width: "160px", height: "160px" }}>
         </button>
    </div>
    <div> 
        <button type="button" onClick={()=> setColor("green")}
        className={`btn btn-success btn-lg rounded-circle mb-3" ${color === "green"  ?  "glowgreen" : ""}`} style={{ width:"160px", height: "160px" }}>
        </button>
	</div>
   
</div>
</div>

	);

};


export default Hook;