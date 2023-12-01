import React from "react";
import { Table } from "./styles";

interface Column<T> {
  label: string;
  key: string;
  render?: (row: T) => React.ReactNode;
}

interface Row {}

interface Props<T> {
  columns: Column<T>[];
  rows: T[];
}

function TablePrimary<T extends Row>({ columns = [], rows = [] }: Props<T>) {
  return (
    <Table style={{ border: "1px solid red" }}>
      <thead>
        <tr>
          {columns?.map((item: Column<T>, idx) => (
            <th key={idx}>{item.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows?.map((row: T, index: number) => (
          <tr key={index}>
            {columns?.map((column: Column<T>, idx: number) => {
              const data = row?.[column?.key as keyof typeof row];
              return data ? (
                <td key={idx} className="fs-sm">
                  {column?.render ? column?.render(row) : <>{data}</>}
                </td>
              ) : null;
            })}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TablePrimary;
