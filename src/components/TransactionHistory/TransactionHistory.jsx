import { useState } from 'react';
import PropTypes from 'prop-types';
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from 'react-icons/io';
import {
  StyledTable,
  StyledTableBody,
  StyledTableCell,
  StyledTableCol,
  StyledTableHead,
  StyledTablePrompt,
} from './Styled';

function TransactionHistory({ items }) {
  const [sortedTransactions, setSortedTransactions] = useState(() => items);

  const [sortDirection, setSortDirection] = useState('asc'); // "asc" | "desc"
  const [columnToSort, setColumnToSort] = useState('');

  const sortTransactionsByHeading = columnToSort => {
    let sorted = [];

    if (sortDirection === 'asc') {
      sorted = items.sort((a, b) => {
        if (columnToSort !== 'amount' && typeof a[columnToSort] !== 'number') {
          return b[columnToSort] < a[columnToSort] ? 1 : -1;
        } else {
          return b[columnToSort] - a[columnToSort] < 0 ? 1 : -1;
        }
      });
    }

    if (sortDirection === 'desc') {
      sorted = items.sort((a, b) => {
        if (columnToSort !== 'amount' && typeof a[columnToSort] !== 'number') {
          return a[columnToSort] < b[columnToSort] ? 1 : -1;
        } else {
          return a[columnToSort] - b[columnToSort] < 0 ? 1 : -1;
        }
      });
    }

    setSortedTransactions([...sorted]);
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    setColumnToSort(columnToSort);
  };

  const sortIndicator = sortDirection => {
    return (
      <span className="sort-indicator">
        {sortDirection === 'asc' ? (
          <IoMdArrowDropdownCircle />
        ) : (
          <IoMdArrowDropupCircle />
        )}
      </span>
    );
  };

  return (
    <>
      <StyledTablePrompt>
        Натисність на назву колонки, щоб сортувати
      </StyledTablePrompt>
      <StyledTable>
        <StyledTableHead>
          <StyledTableCol>
            <td
              className={'table-cell table-heading'}
              onClick={() => sortTransactionsByHeading('type')}
            >
              Type
              {columnToSort === 'type' && sortIndicator(sortDirection)}
            </td>
            <td
              className={'table-cell table-heading'}
              onClick={() => sortTransactionsByHeading('amount')}
            >
              Amount{' '}
              <span className="sort-indicator">
                {columnToSort === 'amount' && sortIndicator(sortDirection)}
              </span>
            </td>
            <td
              className={'table-cell table-heading'}
              onClick={() => sortTransactionsByHeading('currency')}
            >
              Currency
              {columnToSort === 'currency' && sortIndicator(sortDirection)}
            </td>
          </StyledTableCol>
        </StyledTableHead>
        <StyledTableBody>
          {sortedTransactions.map((item, index) => {
            return (
              <StyledTableCol key={item.id}>
                <StyledTableCell
                  className={`table-cell ${index % 2 === 1 ? 'darken' : ''}`}
                >
                  {item.type}
                </StyledTableCell>
                <StyledTableCell
                  className={`table-cell ${index % 2 === 1 ? 'darken' : ''}`}
                >
                  {item.amount}
                </StyledTableCell>
                <StyledTableCell
                  className={`table-cell ${index % 2 === 1 ? 'darken' : ''}`}
                >
                  {item.currency}
                </StyledTableCell>
              </StyledTableCol>
            );
          })}
        </StyledTableBody>
      </StyledTable>
    </>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ).isRequired,
};

export function TableCell({ children, className, onClick, ...restProps }) {
  return (
    <td className={className} {...restProps}>
      {children}
    </td>
  );
}

TableCell.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default TransactionHistory;
