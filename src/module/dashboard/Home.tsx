import BaseTable from "react-base-table";
import "react-base-table/styles.css";
import * as React from "react";

export default class Home extends React.Component {

  private handleEndReach(param: any) {
    console.log(param);
  }

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
    columns[0].frozen = "left";
    const data = generateData(columns, 200, 'row-');

    return <div>
      <BaseTable
        fixed={true}
        width={600}
        height={400}
        columns={columns}
        data={data}
        rowHeight={30}
        headerHeight={30}
        onEndReached={this.handleEndReach}
        onEndReachedThreshold={20}
      />
    </div>;
  }
}
