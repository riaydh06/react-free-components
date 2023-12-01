# react-free-table 

This is a react free component

## Setup

```bash
yarn add react-free-table
```

```bash
npm install react-free-table
```

### How to use


```bash
import {TablePrimary} from 'react-free-table'

const columns = [
      {
        label: "Name",
        key: "name",
      },
      {
        label: "Age",
        key: "age",
      },
      {
        label: "Address",
        key: "address",
      },
      {
        label: "Tags",
        key: "tags",
        render: (data: any) => {
          console.log(data);
          return (
            <div
              style={{
                display: "flex",
                gap: "1rem",
              }}
            >
              {data?.tags?.map((item: string) => (
                <div
                  style={{
                    background: "red",
                    border: "1px solid black",
                    borderRadius: "0.5rem",
                    padding: "0.25rem",
                    color: "white",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          );
        },
      },
    ],

    const rows = [
      {
        id: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
        tags: ["nice", "developer"],
      },
      {
        id: "2",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park",
        tags: ["loser"],
      },
      {
        id: "3",
        name: "Joe Black",
        age: 32,
        address: "Sydney No. 1 Lake Park",
        tags: ["cool", "teacher"],
      },
    ],

export default function Table() {
  return (
    <TablePrimary
        columns={columns}
        rows={rows}
    />  
  );
}
```

