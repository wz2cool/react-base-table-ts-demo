import BaseTable, { Column } from "react-base-table";

import * as React from "react";

export default class About extends React.Component {
  public render() {
    console.log(BaseTable);
    return <div><Column key={"123"} dataKey={"1213"} /></div>;
  }
}
