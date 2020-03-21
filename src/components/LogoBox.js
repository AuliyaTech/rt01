import React from "react";
import API from "../utils/API"

function LogoBox (){
    return (
        <div>
            <img id="logo" src={API.logo}/>
        </div>
    )
}

export default LogoBox;