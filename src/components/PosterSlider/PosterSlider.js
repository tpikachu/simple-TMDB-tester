import React from "react";
import {connect} from 'react-redux';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class PosterSlider extends React.Component {

    render() {
      
      const imovieimages = this.props.imoviedetails.images.backdrops;

      if(!this.props.isloading)
      {
        return (
          <Carousel  
            showThumbs={false}
            >
          {
            imovieimages.map(image => {
              return (
                  <img key={image.file_path} alt="no images" src={`https://image.tmdb.org/t/p/original/${image.file_path}`} />
              );
            })
          }
          </Carousel>
        );
      }

      return (
        <div><p>loading...</p></div>
      )
    }
}
const mapStatetoProps  = ({movietable}) =>{
    return {
      imoviedetails:movietable.imoviedetails,
      isloading:movietable.isloading,
    }
  }

export default connect(mapStatetoProps, null)(PosterSlider);
/*                  <Carousel.Caption>
                      <h3>{movie.original_title}</h3>
                      <p>{movie.overview}</p>
                  </Carousel.Caption> */