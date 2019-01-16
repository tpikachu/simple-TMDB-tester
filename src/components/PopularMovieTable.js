import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

import {connect} from 'react-redux';

const columns = [{
    dataField: 'id',
    text: 'Movie ID',
    },
    {
        dataField: 'title',
        text: 'Title',
    }, 
    {
        dataField: 'release_date',
        text: 'Release Date',
    }
];  


class PopularMovieTable extends React.Component{
    render(){
        return (
            <BootstrapTable keyField='id' data={ this.props.popularmovies } columns={ columns } pagination={ paginationFactory() } />
        );
    }
}



const mapStatetoProps  = (state) =>{
    return {
      popularmovies: state.popularmovies_information,
    }
}

export default connect(mapStatetoProps, null)(PopularMovieTable);