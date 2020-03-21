import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import client from "../config";
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {Row, Col} from "./Grid"
import Services from "./Services"
import Spinner from "react-bootstrap/Spinner"
import API from "../utils/API"


let unsubscribeSubject = new Subject();


class Blog_Carousel extends Component {
  constructor(props){
    super(props)

    this.state={
      loaded: false,
      articles: null
    };
  }

  fetchArticles() {
    client
    .items()
    .elementsParameter(['url', 'title', "image"])
    .toObservable()
    .pipe(takeUntil(unsubscribeSubject))
    .subscribe(res =>{
      console.log(res.items);
      this.setState({
        loaded: true,
        articles: res.items
      })
    });
  }

  componentDidMount() {
    this.fetchArticles();
  };

  unsubscribe() {
    unsubscribeSubject.next();
    unsubscribeSubject.complete();
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  
  render() {
    if(this.state.loaded){
      return(
        <Row id="all-post-holder">
          {this.state.articles.map( article =>{
            return (
              <Col size="md-4" key={article.url.value}>
                  <Link to={`/post/${article.url.value}`}>
                    <Services img={article.image.value[0].url} tag={article.title.value} desc=""/>
                  </Link>
              </Col>
            )
          }
          )
        }
        </Row>
      )
    }
  
    else{
      return (
        <div>
           <Spinner animation="border" variant="light" />
        </div>
      );
    }
  }
}

export default Blog_Carousel;