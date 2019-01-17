import React from "react";
import {connect} from 'react-redux';
import "react-responsive-carousel/lib/styles/carousel.min.css";
//https://image.tmdb.org/t/p/original/lhKObAfoVDU6as0FCgm6y2AAeCO.jpg

class ActorTable extends React.Component {
    render() {
        console.log(this.props.imoviecasts);
      return(
          <h1>I'm ActorTable</h1>
      );
    }
}
const mapStatetoProps  = ({movietable}) =>{
    return {
      isloading:movietable.isloading,
      imoviecasts:movietable.imoviecasts
    }
}


export default connect(mapStatetoProps, null)(ActorTable);