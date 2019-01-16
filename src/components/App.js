import React from 'react';
import {connect} from 'react-redux';
import {getpopularmovies} from '../actions';
import PopularMovieTable from './PopularMovieTable';
//components
/*
____________________________
|      || poster slide| act|
|      ||             |  or|
|title ||_____________|    |
|      ||  movie info |    |
|______||_____________|____|
*/
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
        <PopularMovieTable/>
      </div>
    );
  }
}

export default connect(null, {getpopularmovies})(App);