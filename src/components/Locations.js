import React from "react"
import API from "../utils/API"
import {Row, Col} from "./Grid"

function Location(){
    const locations = API.locations;
    const diplay_locations =  locations.map( l => {
        return(
                <Row key={l.id}>
                    <Col size="md-5">
                        <iframe src={l.google_maps} width="300" height="300" frameBorder="0"  allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                    </Col>
                    <Col size="md-6">
                            <h1>{l.name}</h1>
                            <p>{l.streetname}</p>
                            <p>{l.city}</p>
                            <p>{l.postal}</p>
                            <p>{l.phonenumber}</p>
                            <p>{l.hours}</p>
                    </Col>     
                </Row>
        )
    })
    return (
        <div className="location">
            {diplay_locations}
        </div>
    )
}

export default Location;