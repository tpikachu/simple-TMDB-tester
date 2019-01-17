import React from 'react';
import { textFilter } from 'react-bootstrap-table2-filter';

function titleFormatter(column, colIndex, { sortElement, filterElement }) {
    return (
        <div style={ { display: 'flex', flexDirection: 'column' } }>
            { filterElement }
            { column.text }
            { sortElement }
        </div>
    );
}

export function selectRow(_self){
    const selectRow = {
        mode: 'radio',
        clickToSelect: true,
        style: { backgroundColor: '#c8e6c9' },
        onSelect: (row, isSelect, rowIndex, e) => {
            _self.props.getselectedmoviedetails(row.id);
            
        }
    }

    return selectRow;
}
export const columns = [{
    dataField: 'id',
    text: 'Movie ID',
    }, {
        dataField: 'title',
        text: 'Title',
        filter: textFilter(),
        headerFormatter: titleFormatter,
    }, 
    {
        dataField: 'popularity',
        text: 'popularity',
    }, 
    {
        dataField: 'release_date',
        text: 'Release Date',
    }
];  

export const CaptionElement = () => <h3 style={{ borderRadius: '0.25em', textAlign: 'center', color: 'purple', border: '1px solid purple', padding: '0.5em' }}>The most popular movies</h3>;