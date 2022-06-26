import PropTypes from 'prop-types';
import {
  StyledTable,
  StyledTableBody,
  StyledTableCell,
  StyledTableCol,
  StyledTableHead,
} from './Styled';

function TransactionHistory({ items = [] }) {
  return (
    <StyledTable>
      <StyledTableHead>
        <StyledTableCol>
          <td className={'table-cell table-heading'}>Type</td>
          <td className={'table-cell table-heading'}>Amount</td>
          <td className={'table-cell table-heading'}>Currency </td>
        </StyledTableCol>
      </StyledTableHead>
      <StyledTableBody>
        {items.length > 0 && items.map((item, index) => {
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
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
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
