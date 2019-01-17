import React from "react";
import {Carousel} from 'react-bootstrap';
import {connect} from 'react-redux';

class PosterSlider extends React.Component {

    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null
      };
    }
  
    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction
      });
    }
  
    render() {
      const { index, direction } = this.state;
  
      return (
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
        {
            this.props.popularmovies.map(movie => {
                return(
                    <Carousel.Item>
                        <img alt="480x320" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} />
                        <Carousel.Caption>
                            <h3>{movie.original_title}</h3>
                            <p>{movie.overview}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                );
            })
        }

        </Carousel>
      );
    }
}
const mapStatetoProps  = (state) =>{
    return {
      popularmovies: state.popularmovies_information,
    }
  }

export default connect(mapStatetoProps, null)(PosterSlider);