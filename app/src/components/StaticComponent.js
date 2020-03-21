import React from "react";
import {Row, Col} from "./Grid"

function StaticComponent(props){
    return (
        <Row>
            <Col size="md-6">
                <img className="static-img" src={props.img}/>
            </Col>
            <Col size="md-6">
                <div className="static-txt">
                    <h1>{props.tag}</h1>
                    <p>{props.desc}</p>
                </div>
                
            </Col>
            

        </Row>
    )
}

export default StaticComponent;