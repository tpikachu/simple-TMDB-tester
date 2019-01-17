import React from 'react';
import {connect} from 'react-redux';
import {initmovietable} from '../actions';

//components
/*
____________________________
|      || poster slide| act|
|      ||             |  or|
|title ||_____________|    |
|      ||  movie info |    |
|______||_____________|____|
*/

import MovieTable from './MovieTable/MovieTable';
import PosterSlider from './PosterSlider/PosterSlider';
import MovieInformation from './MovieInformation/MovieInformation';
import ActorTable from './ActorTable/ActorTable';

class App extends React.Component {
  constructor(props)
  {
    super(props);

    this.state = {

    }

  }

  componentDidMount()
  {
    this.props.initmovietable();
  }

  render() {
    return (
      <div className = 'container-fluid main'>

        {//popular movies title table
          <div className = 'col-md-4'>
            <MovieTable/>
          </div>
        }

        {//Movie Information
          <div className = 'col-md-6'>
          {//Poster slider
            <div className = 'row'>
              <PosterSlider/>
            </div>
          }

          {
            <div className = 'row'>
              <h3>{this.props.imoviedetails.original_title}</h3>
              <p>{this.props.imoviedetails.overview}</p>
              <MovieInformation/>
            </div>
          }
          </div>
        }

        {
          //actor information
          <div className = 'col-md-2'>
            <ActorTable />
          </div>
        }

        </div>
    );
  }
}

const mapStatetoProps  = ({movietable}) =>{
  return {
    imoviedetails:movietable.imoviedetails,
  }
}

export default connect(mapStatetoProps, {initmovietable})(App);