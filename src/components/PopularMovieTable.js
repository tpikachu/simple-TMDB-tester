import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import {connect} from 'react-redux';

const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      Showing { from } to { to } of { size } Results
    </span>
  );

function generate_option(length){
    const options = {
        paginationSize: 4,
        pageStartIndex: 0,
        // alwaysShowAllBtns: true, // Always show next and previous button
        // withFirstAndLast: false, // Hide the going to First and Last page button
        // hideSizePerPage: true, // Hide the sizePerPage dropdown always
        // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
        firstPageText: 'First',
        prePageText: 'Back',
        nextPageText: 'Next',
        lastPageText: 'Last',
        nextPageTitle: 'First page',
        prePageTitle: 'Pre page',
        firstPageTitle: 'Next page',
        lastPageTitle: 'Last page',
        showTotal: true,
        paginationTotalRenderer: customTotal,
        sizePerPageList: [{
            text: '5', value: 5
        }, {
            text: '10', value: 10
        }, {
            text: 'All', value: length
        }] // A numeric array is also available. the purpose of above example is custom the text
    };

    return options;
}

function titleFormatter(column, colIndex, { sortElement, filterElement }) {
    return (
        <div style={ { display: 'flex', flexDirection: 'column' } }>
            { filterElement }
            { column.text }
            { sortElement }
        </div>
    );
}

const columns = [{
    dataField: 'id',
    text: 'Movie ID',
    style: (cell, row, rowIndex, colIndex) => {
        if (rowIndex % 2 === 0) {
          return {
            backgroundColor: '#81c784'
          };
        }
        return {
          backgroundColor: '#c8e6c9'
        };
      }
    /*
    events: {
        onClick: (e, column, columnIndex, row, rowIndex) => {
        console.log(e);
        console.log(column);
        console.log(columnIndex);
        console.log(row);
        console.log(rowIndex);
        alert('Click on Product ID field');
        },
    }*/
    }, {
        dataField: 'title',
        text: 'Title',
        filter: textFilter(),
        headerFormatter: titleFormatter,

        style: (cell, row, rowIndex, colIndex) => {
            if (rowIndex % 2 === 0) {
              return {
                backgroundColor: '#81c784'
              };
            }
            return {
              backgroundColor: '#c8e6c9'
            };
          }
    }, 
    {
        dataField: 'popularity',
        text: 'popularity',
        style: (cell, row, rowIndex, colIndex) => {
            if (rowIndex % 2 === 0) {
              return {
                backgroundColor: '#81c784'
              };
            }
            return {
              backgroundColor: '#c8e6c9'
            };
          }
    }, 
    {
        dataField: 'release_date',
        text: 'Release Date',
        style: (cell, row, rowIndex, colIndex) => {
            if (rowIndex % 2 === 0) {
              return {
                backgroundColor: '#81c784'
              };
            }
            return {
              backgroundColor: '#c8e6c9'
            };
          }
    }
];  
const CaptionElement = () => <h3 style={{ borderRadius: '0.25em', textAlign: 'center', color: 'purple', border: '1px solid purple', padding: '0.5em' }}>The most popular 20 movies</h3>;

class PopularMovieTable extends React.Component{
    render(){
        return (
            <BootstrapTable keyField='id' data={ this.props.popularmovies } caption={<CaptionElement />} columns={ columns } pagination={ paginationFactory(generate_option(20)) } filter={ filterFactory() }/>
        );
    }
}

const mapStatetoProps  = ({movietable}) =>{
    return {
      popularmovies: movietable.popularmovies_information,
    }
}

export default connect(mapStatetoProps, null)(PopularMovieTable);