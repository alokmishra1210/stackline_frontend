import React from 'react';
import { useSelector } from 'react-redux';
import { useTable, useSortBy } from 'react-table';

const SalesTable = () => {
  const data = useSelector(state => state.product.data[0].sales);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Week Ending',
        accessor: 'weekEnding'
      },
      {
        Header: 'Retail Sales',
        accessor: 'retailSales'
      },
      {
        Header: 'Wholesale Sales',
        accessor: 'wholesaleSales'
      },
      {
        Header: 'Units Sold',
        accessor: 'unitsSold'
      },
      {
        Header: 'Retailer Margin',
        accessor: 'retailerMargin'
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy);

  return (
    <div style={{ overflowX: 'auto' }}>
      <table {...getTableProps()} style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable;
