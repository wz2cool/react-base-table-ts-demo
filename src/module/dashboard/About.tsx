import BaseTable, { Column } from "react-base-table";
import 'react-base-table'

import * as React from "react";

export default class About extends React.Component {
  public render() {
    return <div>
      <BaseTable width={600} height={400} data={1} rowHeight={30} headerHeight={30} rowKey="string">
        <Column key="col0" dataKey="col0" width={100} />
        <Column key="col1" dataKey="col1" width={100} />
      </BaseTable>
    </div>;
  }
}
