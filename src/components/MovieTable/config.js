import React from 'react';
import { textFilter } from 'react-bootstrap-table2-filter';

const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
        Showing { from } to { to } of { size } Results
    </span>
);


function titleFormatter(column, colIndex, { sortElement, filterElement }) {
    return (
        <div style={ { display: 'flex', flexDirection: 'column' } }>
            { filterElement }
            { column.text }
            { sortElement }
        </div>
    );
}

export function generate_option(_self){
    const options = {
        paginationSize: 5,
        pageStartIndex: 1,
        // alwaysShowAllBtns: true, // Always show next and previous button
         withFirstAndLast: true, // Hide the going to First and Last page button
        // hideSizePerPage: true, // Hide the sizePerPage dropdown always
        // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
        firstPageText: '<<',
        prePageText: '<',
        nextPageText: '>',
        lastPageText: '>>',
        nextPageTitle: 'First page',
        prePageTitle: 'Pre page',
        firstPageTitle: 'Next page',
        lastPageTitle: 'Last page',
        showTotal: true,
        paginationTotalRenderer: customTotal,
        sizePerPageList: [{
            text: '20', value: 20
        }], // A numeric array is also available. the purpose of above example is custom the text
        totalSize: _self.props.total_movies,
        onPageChange: (page, sizePerPage) => {
                _self.props.getipagemovies(page);
            
            console.log('Newest page:' + page);
          }
    };

    return options;
}

export const columns = [{
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

export const CaptionElement = () => <h3 style={{ borderRadius: '0.25em', textAlign: 'center', color: 'purple', border: '1px solid purple', padding: '0.5em' }}>The most popular movies</h3>;