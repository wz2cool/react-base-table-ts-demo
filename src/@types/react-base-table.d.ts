declare module "react-base-table" {
    export default class BaseTable extends React.PureComponent {

    }

    interface IColumnProp {
        /**
         * Class name for the column cell, could be a callback to return the class name
         * The callback is of the shape of `({ cellData, columns, column, columnIndex, rowData, rowIndex }) => string`
         */
        className?: string;
        /**
         * Class name for the column header, could be a callback to return the class name
         * The callback is of the shape of `({ columns, column, columnIndex, headerIndex }) => string`
         */
        headerClassName?: string;
        /**
         * Title for the column header
         */
        title?: string;
        /**
         * Data key for the column cell, could be "a.b.c"
         */
        dataKey?: string
    }

    /**
     * Column for BaseTable
     */
    export class Column extends React.Component<IColumnProp, any> {

    }


}