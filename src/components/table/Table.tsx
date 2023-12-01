import styled from "styled-components";

interface TableProps {
  borderWidth?: string;
  borderColor?: string;
  textAlign?: string;
  padding?: string;
  hoverColor?: string;
  textColor?: string;
}

export const Table = styled.table<TableProps>`
  border-collapse: collapse;
  width: 100%;
  th,
  td {
    border: ${(props) =>
      `${props.borderWidth || "1px"} solid ${props.borderColor || "black"}`};
    text-align: ${(props) => props.textAlign || "left"};
    color: ${(props) => props.textColor || "black"};
  }
  th,
  td,
  tr {
    padding: ${(props) => props.padding || "0.5rem"};
  }
  tr {
    &:hover {
      background-color: ${(props) => props.hoverColor || "#D9D9D9"};
    }
  }
`;
