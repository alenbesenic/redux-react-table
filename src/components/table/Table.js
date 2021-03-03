import React, { useEffect, useMemo, useState } from 'react'
import { useTable, usePagination, useSortBy, useFilters } from 'react-table'
import { COLUMNS } from './columns'
import { useDispatch, useSelector } from 'react-redux'
import { getPaginatedUsers } from '../../redux/actions/users.actions/paginatedUsersActions'
import { getNumberOfAllUsers } from '../../redux/actions/users.actions/allUsersActions'
import TableHeader from './TableHeader'
import TableBody from './TableBody'
import TableFooter from './TableFooter'
import LoaderSpinner from '../loader/LoaderSpinner'
import './Table.scss'

const Table = () => {
    const dispatchAll = useDispatch()
    const dispatch = useDispatch()
    const [controlledPageCount, setControlledPageCount] = useState(0)
    const paginatedUsersList = useSelector(state => state.paginatedUsersList)
    const numberOfUsers = useSelector(state => state.numberOfAllUsers)
    const { numberOfAllUsersLoading, numberOfAllUsers }  = numberOfUsers
    const { paginatedUsersError, paginatedUsers } = paginatedUsersList
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => paginatedUsers, [paginatedUsers])
    const number = useMemo(() => numberOfAllUsers, [numberOfAllUsers])

    const { 
        getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        page, 
        prepareRow,
        pageCount,
        setPageSize,
        gotoPage,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        state: { pageIndex, pageSize }
    } = useTable({
        columns,
        data,
        initialState: { pageIndex: 0, pageSize: 10},
        manualPagination: true,
        pageCount: controlledPageCount,
        autoResetPage: false
    }, useFilters, useSortBy, usePagination)

    useEffect(() => {
        dispatchAll(getNumberOfAllUsers())
    }, [dispatchAll, number])

    useEffect(() => {
        setControlledPageCount(Math.ceil(number / pageSize))
    }, [number, pageSize])

    useEffect(() => {
        dispatch(getPaginatedUsers(pageIndex + 1, pageSize))
    }, [dispatch, pageIndex, pageSize])

    return (
        <>
            {
               numberOfAllUsersLoading ? 
                <LoaderSpinner />
                : paginatedUsersError ? paginatedUsersError.message 
                : 
                <>
                    <table className="table" id="table" {...getTableProps()}>
                        <TableHeader 
                            headerGroups={headerGroups}
                        />
                        <TableBody 
                            getTableBodyProps={getTableBodyProps}
                            page={page}
                            prepareRow={prepareRow}
                            pageIndex={pageIndex}
                            pageSize={pageSize}
                            dispatch={dispatch}
                        />
                    </table>
                    <TableFooter 
                        pageIndex={pageIndex}
                        gotoPage={gotoPage}
                        pageSize={pageSize}
                        setPageSize={setPageSize}
                        canPreviousPage={canPreviousPage}
                        previousPage={previousPage}
                        nextPage={nextPage}
                        canNextPage={canNextPage}
                        pageCount={pageCount}
                        number={number}
                    />
                </>
            }
        </>
    )
}

export default Table
