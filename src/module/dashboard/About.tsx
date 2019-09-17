import BaseTable, { Column, RowEventHandlers, RowEventHandler, CellRenderProps } from "react-base-table";
import "react-base-table/styles.css";
import * as React from "react";
import { MockService } from "../../service/MockService";
import { Restaurant } from "../../model/Restaurant";
import { CSSProperties } from "react";

class CustomCell extends React.PureComponent<CellRenderProps<Restaurant>, {}> {

  public render() {
    // console.log(this.props);
    const cellColor: CSSProperties = {
      color: "red"
    };
    return (<div style={cellColor}>{this.props.rowData.province + " - " + this.props.rowData.city}</div>);
  }
}

// tslint:disable-next-line: max-classes-per-file
export default class About extends React.Component {
  private handleRowOnClick(param: RowEventHandler<Restaurant>) {
    // console.log(param);
  }

  private handleEndReached(param: any) {
    // console.log(param);
  }

  public render() {
    const rowEventHandlers: RowEventHandlers<Restaurant> = {
      onDoubleClick: this.handleRowOnClick,
    };

    const data = MockService.Instance.getRestaurants();

    return <div>
      <BaseTable<Restaurant>
        fixed={true}
        width={600}
        height={400}
        data={data}
        rowHeight={30}
        headerHeight={30}
        rowEventHandlers={rowEventHandlers}
        onEndReached={this.handleEndReached}
        onEndReachedThreshold={300}
      >
        <Column<Restaurant> key="name" width={200} dataKey="name" title="餐厅名称" frozen={true} />
        <Column<Restaurant> key="province" width={80} dataKey="province" title="省" />
        <Column<Restaurant> key="city" width={80} dataKey="city" title="市" />
        <Column<Restaurant> key="area" width={100} dataKey="area" title="地区" />
        <Column<Restaurant> key="smallCate" width={150} dataKey="smallCate" title="主营" />
        <Column<Restaurant> key="custom" width={80} title="自定义" cellRenderer={CustomCell} />
        <Column<Restaurant> key="custom2" width={80} title="自定义2" cellRenderer={(props) => <div>{props.rowData.province + props.rowData.city}</div>} />
        <Column<Restaurant> key="address" width={500} dataKey="address" title="主营" />
      </BaseTable>
    </div>;
  }
}
