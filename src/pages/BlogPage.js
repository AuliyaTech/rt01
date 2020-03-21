import React, { Component } from 'react';
import Blog_Carousel from "../components/Blog_Carousel"
import Blog_AllPost from "../components/Blog_AllPost";
import {Link} from "react-router-dom"
import {Row, Col} from "../components/Grid"


class BlogPage extends Component {

  render() {
      return (
        <div>
          <Row>
            <Col size="md-9"></Col>
            <Col size="md-3"><Link to="/"><h1 id="link2blog">Back to Home --></h1></Link></Col>
          </Row>
          <h1 className="blog"> Auliya Caffeinated Blog</h1>
          <Blog_Carousel />
          <Blog_AllPost/>


        </div>
      
    );
  }
}

export default BlogPage;