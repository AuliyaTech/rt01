import React from "react";
import {Link} from "react-router-dom"
import Header from "../components/Header"
import StaticComponent from "../components/StaticComponent"
import Services from "../components/Services"
import Location from "../components/Locations"
import Blog_Carousel from "../components/Blog_Carousel"
import {Row, Col} from "../components/Grid"
import API from "../utils/API"


function MainPage () {
    const x = API.static_components;
    const y = API.services
    return (
        <div>
            <Row>
                <Col size="md-9"></Col>
                <Col size="md-3"><Link to="/blog"><h1 id="link2blog">Check out our Blog --></h1></Link></Col>
            </Row>
            <div className="header"><Header/></div>
                {
                    x.map( a =>{
                        return(
                            <div className="static">
                                <StaticComponent img={a.img} desc={a.desc} tag={a.tag}/>
                            </div>
                        )
                    })
                }
                <h1 className="services-we-offer forBlog">Latest Blog Posts...</h1>
                <Blog_Carousel/>
              <Row class="classes">
                    <Col size="md-4">
                        <h1 className="services-we-offer">Try a Class with Us...</h1>
                    </Col>
                    {
                       y.map( a =>{
                        return(
                            <Col size="md-4" key={a.id}>
                                <Services img={a.img} tag={a.tag}/>
                            </Col>
                        )
                    })
                    }
                </Row>
                <Location/>
        </div>
    )
}

export default MainPage;