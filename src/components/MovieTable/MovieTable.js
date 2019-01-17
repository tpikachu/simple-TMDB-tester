import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory,{ PaginationProvider, SizePerPageDropdownStandalone, PaginationListStandalone} from 'react-bootstrap-table2-paginator';

import ReactPaginate from 'react-paginate';
import filterFactory from 'react-bootstrap-table2-filter';
import {connect} from 'react-redux';

import {getipagemovies} from '../../actions';
import {generate_option, columns, CaptionElement} from './config';

class MovieTable extends React.Component{
    constructor(props)
    {
        super(props);

        this.handlePageClick = this.handlePageClick.bind(this);
    }

    handlePageClick(data){
        console.log(data);
        this.props.getipagemovies(data.selected + 1);
    }
    render(){
        return (
            <div className='container-fluid'>
                <ReactPaginate
                    previousLabel={'<'}
                    nextLabel={'>'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={this.props.total_movies/20 + 1}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                />
                <BootstrapTable 
                keyField='id'
                data={ this.props.popularmovies }
                caption={<CaptionElement />}
                columns={ columns }
                isloading={this.props.isloading}
                filter={ filterFactory() }/>
            </div>
        );
    }
}

const mapStatetoProps  = ({movietable}) =>{
    return {
        popularmovies: movietable.popularmovies,
        total_movies: movietable.total_movies,
        isloading: movietable.isloading,
    }
}

export default connect(mapStatetoProps, {getipagemovies})(MovieTable);

/*pagination={ paginationFactory(generate_option(this)) } */