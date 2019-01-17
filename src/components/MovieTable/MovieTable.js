//dependencies
import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ReactPaginate from 'react-paginate';
import filterFactory from 'react-bootstrap-table2-filter';
//config
import {selectRow, columns} from './config';

//redux
import {connect} from 'react-redux';
import {getipagemovies, setcurrentmovieid} from '../../actions';

class MovieTable extends React.Component{
    constructor(props)
    {
        super(props);

        this.handlePageClick = this.handlePageClick.bind(this);
    }

    handlePageClick(data){
        console.log('whwuyd');
        this.props.getipagemovies(data.selected + 1);
    }

    render(){
        return (
            <div className='container-fluid'>
                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
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
                    columns={ columns }
                    isloading={this.props.isloading}
                    filter={ filterFactory() }
                    selectRow={ selectRow(this) }
                />
            </div>
        );
    }
}

const mapStatetoProps  = ({movietable}) =>{
    return {
        popularmovies: movietable.popularmovies,
        total_movies: movietable.total_movies,
        isloading: movietable.isloading,
        currentpage: movietable.currentpage,
        currentselectedmovieid: movietable.currentselectedmovieid,
    }
}

export default connect(mapStatetoProps, {getipagemovies, setcurrentmovieid})(MovieTable);