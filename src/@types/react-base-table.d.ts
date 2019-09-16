declare module "react-base-table" {

    interface IColumnProps {
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
        dataKey?: string;
        /**
         * Alignment of the column cell
         */
        align?: "left" | "center" | "right",
        /**
         * Flex grow style, defaults to 0
         */
        flexGrow?: number,
        /**
         * Flex shrink style, defaults to 1 for flexible table and 0 for fixed table
         */
        flexShrink?: number,
        /**
         * The width of the column, gutter width is not included
         */
        width: number,
        /**
         * Maximum width of the column, used if the column is resizable
         */
        maxWidth?: number,
        /**
         * Minimum width of the column, used if the column is resizable
         */
        minWidth?: number,
        /**
         * Whether the column is frozen and what's the frozen side
         */
        frozen?: "left" | "right" | true | false,
        /**
         * Whether the column is hidden
         */
        hidden?: boolean,
        /**
         * Whether the column is resizable, defaults to true
         */
        resizable?: boolean,
        /**
         * Whether the column is sortable, defaults to true
         */
        sortable?: boolean,
        /**
         * Custom column cell renderer
         * The renderer receives props `{ cellData, columns, column, columnIndex, rowData, rowIndex, container, isScrolling }`
         */
        cellRenderer?: React.ReactType | React.ReactElement,
        /**
         * Custom column header renderer
         * The renderer receives props `{ columns, column, columnIndex, headerIndex, container }`
         */
        headerRenderer?: React.ReactType | React.ReactElement,
    }

    /**
     * Column for BaseTable
     */
    export class Column extends React.Component<IColumnProps, {}> {

    }

    interface IBaseTableProps {
        /**
         * Prefix for table's inner className
         */
        classPrefix?: string,
        /**
         * Class name for the table
         */
        className?: string,
        /**
         * Custom style for the table
         */
        style?: any,
        /**
         * A collection of Column
         */
        children?: React.ReactNode,
        /**
         * Columns for the table
         */
        columns?: Column[],
        /**
         * The data for the table
         */
        data?: any,
        /**
         * The data be frozen to top, `rowIndex` is negative and started from `-1`
         */
        frozenData?: any,
        /**
         * The key field of each data item
         */
        rowKey?: "string" | "number",
        /**
         * The width of the table
         */
        width: number;
        /**
         * The height of the table, will be ignored if `maxHeight` is set
         */
        height?: number;
        /**
         * The max height of the table, the table's height will auto change when data changes,
         * will turns to vertical scroll if reaches the max height
         */
        maxHeight?: number,
        /**
         * The height of each table row
         */
        rowHeight: number,
        /**
         * The height of the table header, set to 0 to hide the header, could be an array to render multi headers.
         */
        headerHeight: number,
    }

    export default class BaseTable extends React.PureComponent<IBaseTableProps, {}> {

    }

}