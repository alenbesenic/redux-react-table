import { format } from 'date-fns'
import ColumnFilter from './ColumnFilter'

export const COLUMNS = [
    {
        Header: ' ',
        columns:[
            {
                Header:' ',
                accessor: 'picture',
                disableSortBy: true,
                Filter: ColumnFilter,
                disableFilters: true,
                Cell: ({value}) => { return(
                    <img 
                        src={value} 
                        alt="user"
                        className="user_image" 
                        style={{ 
                            borderRadius: '50%'
                        }}
                    />
                )} 
            },
            {
                Header: 'First Name',
                accessor: 'firstName',
                Filter: ColumnFilter
            },
            {
                Header: 'Last Name',
                accessor: 'lastName',
                Filter: ColumnFilter
            }
        ]
    },
    {
        Header: 'Date of Birth',
        accessor: 'dateOfBirth',
        Cell: ({ value }) => { return format(new Date(value), 'dd/MM/yyyy')},
        Filter: ColumnFilter
    },
    {
        Header: 'Age',
        accessor: 'age',
        Filter: ColumnFilter
    },
    {
        Header: 'Country',
        accessor: 'country',
        Filter: ColumnFilter
    }
]