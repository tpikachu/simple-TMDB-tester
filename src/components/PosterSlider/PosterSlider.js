import React from "react";
import {Carousel} from 'react-bootstrap';
import {connect} from 'react-redux';

class PosterSlider extends React.Component {

    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null,
      };
    }
  
    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction
      });
    }
    componentWillMount(){
      this.setState({index:0})
    }
    render() {
      const { index, direction } = this.state;
      const imoveimages = this.props.imoveimages;
      console.log(imoveimages);
      return (
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
        {
          imoveimages.map(image => {
            return (
              <Carousel.Item key={image.file_path}>
                  <img alt="no images" src={`https://image.tmdb.org/t/p/original/${image.file_path}`} />
              </Carousel.Item>
            );
          })
        }
        </Carousel>
      );
    }
}
const mapStatetoProps  = ({movietable}) =>{
    return {
      popularmovies: movietable.popularmovies,
      currentselectedmovieid: movietable.currentselectedmovieid,
      imoveimages:movietable.imoveimages,
    }
  }

export default connect(mapStatetoProps, null)(PosterSlider);
/*                  <Carousel.Caption>
                      <h3>{movie.original_title}</h3>
                      <p>{movie.overview}</p>
                  </Carousel.Caption> */