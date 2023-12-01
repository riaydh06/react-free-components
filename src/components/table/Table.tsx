import styled from "styled-components";

export interface TableProps {
  bgColor?: string;
  borderWidth?: string;
  borderColor?: string;
  textAlign?: string;
  padding?: string;
  hoverColor?: string;
  textColor?: string;
}

export const Responsive = styled.div<TableProps>`
  overflow-x: auto;
`;

export const Table = styled.table<TableProps>`
  border-collapse: collapse;
  width: 100%;
  th,
  td {
    border: ${(props) =>
      `${props.borderWidth || "1px"} solid ${props.borderColor || "black"}`};
    text-align: ${(props) => props.textAlign || "left"};
    color: ${(props) => props.textColor || "black"};
    background-color: ${(props) => props.bgColor || "white"};
  }
  th,
  td,
  tr {
    padding: ${(props) => props.padding || "0.5rem 1rem"};
  }
  tr {
    &:hover {
      background-color: ${(props) => props.hoverColor || "#D9D9D9"};
    }
  }
`;
