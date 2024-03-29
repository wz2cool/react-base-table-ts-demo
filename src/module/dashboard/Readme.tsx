import * as React from "react";
import { MockService } from "../../service/MockService";
import BaseTable, { Column, AutoResizer } from "react-base-table";
import "react-base-table/styles.css";
import "./style.css";


export default class Readme extends React.Component {
  public render() {
    const data = MockService.Instance.getRestaurants();


    return <div className="container">
      <AutoResizer>
        {({ width, height }) => (
          <BaseTable
            fixed={true}
            width={width}
            height={height}
            data={data}
            rowHeight={30}
            headerHeight={30}
          >
            <Column key="name" width={200} dataKey="name" title="餐厅名称" frozen={true} />
            <Column key="province" width={80} dataKey="province" title="省" />
            <Column key="city" width={80} dataKey="city" title="市" />
            <Column key="area" width={100} dataKey="area" title="地区" />
            <Column key="smallCate" width={150} dataKey="smallCate" title="主营" />
            <Column key="address" width={500} dataKey="address" title="主营" />
          </BaseTable>
        )}
      </AutoResizer>

    </div>;
  }
}
