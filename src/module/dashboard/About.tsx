import BaseTable from "react-base-table";
import "react-base-table/styles.css";

import * as React from "react";

export default class About extends React.Component {



  public render() {
    const generateColumns = (count = 10, prefix = 'column-', props: any) =>
      new Array(count).fill(0).map((column, columnIndex) => ({
        ...props,
        key: `${prefix}${columnIndex}`,
        dataKey: `${prefix}${columnIndex}`,
        title: `Column ${columnIndex}`,
        width: 150,
      }));

    const generateData = (columns: any[], count = 200, prefix = 'row-') =>
      new Array(count).fill(0).map((row, rowIndex) => {
        return columns.reduce(
          (rowData: any, column: any, columnIndex: any) => {
            rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`;
            return rowData;
          },
          {
            id: `${prefix}${rowIndex}`,
            parentId: null,
          }
        );
      });

    const columns = generateColumns(10, "'column-'", null);
    const data = generateData(columns, 200, 'row-');

    return <div>
      <BaseTable
        width={600}
        height={400}
        columns={columns}
        data={data}
        rowHeight={30}
        headerHeight={30}
      />
    </div>;
  }
}
