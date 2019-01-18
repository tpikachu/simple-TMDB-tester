import React from "react";
import {connect} from 'react-redux';
import {Grid, Row, Thumbnail, Button} from 'react-bootstrap';
//https://image.tmdb.org/t/p/original/lhKObAfoVDU6as0FCgm6y2AAeCO.jpg

class ActorTable extends React.Component {
    render() {
        console.log(this.props.imoviecasts);
        const imoviecasts = this.props.imoviecasts;
        return(
            <Grid>
            {
                imoviecasts.map(cast => {
                    return (
                        <Row key={cast.credit_id} style={{width:'20%'}}>
                            <Thumbnail key={cast.credit_id} src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`} alt="242x200">
                                <h3>{cast.character}</h3>
                                <p>{cast.name}</p>
                            </Thumbnail>
                        </Row>
                    );
                })
            }
            </Grid>
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