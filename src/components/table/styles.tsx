import styled from "styled-components";

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  th,
  td {
    border: 1px solid black;
    text-align: left;
  }
  th,
  td,
  tr {
    padding: 0.5rem;
  }
  tr {
    &:hover {
      background-color: green;
    }
  }
`;
