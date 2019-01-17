import React from 'react';
import {connect} from 'react-redux';
import {getpopularmovies} from '../actions';

//components
/*
____________________________
|      || poster slide| act|
|      ||             |  or|
|title ||_____________|    |
|      ||  movie info |    |
|______||_____________|____|
*/

import PopularMovieTable from './PopularMovieTable';
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
    this.props.getpopularmovies();
  }

  render() {
    return (
      <div className = 'container-fluid main'>

        {//popular movies title table
          <div className = 'col-md-4'>
            <PopularMovieTable/>
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
            </div>
          }
          </div>
        }

        {
          //actor information
          <div className = 'col-md-2'>
          </div>
        }

        </div>
    );
  }
}

export default connect(null, {getpopularmovies})(App);