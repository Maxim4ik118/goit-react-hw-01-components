import styled from 'styled-components';
import { TableCell } from './TransactionHistory';

export const StyledTable = styled.table`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto 120px;
  max-width: 600px;
  .table-cell {
    background-color white;
    color: black;
    font-size: 24px;
    flex: 1 1 100%;
    border: 1px solid orange;
    padding: 15px;
    display: flex;
    align-items: center;
    &.darken {
      background-color: #b8b8b8;
    }
    &.table-heading {
      background-color: blue;
      color: white;
      user-select: none;
      cursor: pointer;
    }
    & .sort-indicator {
      display: flex;
      align-items: center;
      margin-left: auto;
    }
  }
`;
export const StyledTableCol = styled.tr`
  display: flex;
`;
export const StyledTableCell = styled(TableCell)``;

export const StyledTableHead = styled.thead``;

export const StyledTableBody = styled.tbody``;

export const StyledTablePrompt = styled.strong`
  text-align: center;
  display: block;
  font-size: 22px;
`;
