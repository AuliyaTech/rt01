import React from "react";

function Services(props){
    return (
        <div className="service_card">
            <img src={props.img}/>
            <h1>{props.tag}</h1>
            </div>
    )
}

export default Services;