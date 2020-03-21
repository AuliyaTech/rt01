import React from "react"
import {Row, Col} from "./Grid"
import API from "../utils/API"

function Header (){
    return (
        <Row>
            <Col size="md-6">
            <h1  id="tagline">{API.tagline}</h1>
            </Col>
            <Col size="md-6">
                <img   src={API.first_img}/>
            </Col>
            
            
        </Row>
    )
}

export default Header;