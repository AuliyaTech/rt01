import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import client from "../config";
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import Carousel from "react-bootstrap/Carousel"
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
    .depthParameter(3)
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
        <Carousel>
          {this.state.articles.map( article =>{
            return (
              <Carousel.Item key={article.url.value}>
                <Link to={`/post/${article.url.value}`}>
                <img className="d-block w-100 transparent" src={article.image.value[0].url} />
                <Carousel.Caption>
                  <h1>{article.title.value}</h1>
                </Carousel.Caption>
                </Link>
              </Carousel.Item>
            )
          }
          )
        }
        <Carousel.Item>
                <img className="d-block w-100 transparent carousel-img" src={API.Carousel_img} />
                <Carousel.Caption>
                <Link to={`/blog`}>
                  <h1>View More Posts</h1>
                </Link>
                </Carousel.Caption>
              </Carousel.Item>
        </Carousel>
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