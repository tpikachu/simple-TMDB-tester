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
import PosterSlider from './PosterSlider';

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
              <h1>MovieInformation</h1>
            </div>
          }
          </div>
        }

        {
          //actor information
          <div className = 'col-md-2'>
            <h1>actor actress information</h1>
          </div>
        }

        </div>
    );
  }
}

export default connect(null, {initmovietable})(App);