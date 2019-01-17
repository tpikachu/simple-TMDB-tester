import React from "react";
import {connect} from 'react-redux';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class MovieInformation extends React.Component {
    render() {
      const imoviedetails = this.props.imoviedetails;
      if(this.props.currentselectedmovieid)
      {
        return (
          <div>
            <label>adult:</label>
            <span>{imoviedetails.adult? 'true':'false'}</span>
            <br/>

            <label>budget:</label>
            <span>{imoviedetails.budget}</span>
            <br/>

            <label>homepage:</label>
            <span>{imoviedetails.homepage}</span>
            <br/>

            <label>status:</label>
            <span>{imoviedetails.status}</span>
            <br/>

            <label>release_date:</label>
            <span>{imoviedetails.release_date}</span>
            <br/>

            <label>runtime:</label>
            <span>{imoviedetails.runtime}</span>
            <br/>

            <label>revenue:</label>
            <span>{imoviedetails.revenue}</span>
            <br/>

            <label>vote_average:</label>
            <span>{imoviedetails.vote_average}</span>
            <br/>

            <label>vote_count:</label>
            <span>{imoviedetails.vote_count}</span>
            <br/>
          </div>
        );
      }

      return (
        <h1>Please, Select the movie title...</h1>
      )
    }
}
const mapStatetoProps  = ({movietable}) =>{
    return {
      imoviedetails:movietable.imoviedetails,
      isloading:movietable.isloading,
      currentselectedmovieid:movietable.currentselectedmovieid
    }
}


export default connect(mapStatetoProps, null)(MovieInformation);