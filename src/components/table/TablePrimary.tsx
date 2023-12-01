import React from "react";
import { Responsive, Table, TableProps } from "./Table";

interface Column<T> {
  label?: string;
  key: string;
  renderHeader?: React.ReactNode;
  renderData?: (row: T) => React.ReactNode;
}

interface Row {}

interface Props<T> {
  columns: Column<T>[];
  rows: T[];
  tableStyle?: TableProps;
}

function TablePrimary<T extends Row>({
  columns = [],
  rows = [],
  tableStyle,
}: Props<T>) {
  return (
    <Responsive>
      <Table {...tableStyle}>
        <thead>
          <tr>
            {columns?.map((column: Column<T>, idx) => (
              <th key={idx}>
                {column.renderHeader ? column.renderHeader : column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows?.map((row: T, index: number) => (
            <tr key={index}>
              {columns?.map((column: Column<T>, idx: number) => {
                const data = row?.[column?.key as keyof typeof row];
                return data ? (
                  <td key={idx}>
                    {column?.renderData ? column?.renderData(row) : <>{data}</>}
                  </td>
                ) : null;
              })}
            </tr>
          ))}
        </tbody>
      </Table>
    </Responsive>
  );
}

export default TablePrimary;
