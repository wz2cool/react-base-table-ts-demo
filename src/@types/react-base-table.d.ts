declare module "react-base-table" {

    /**
     * Sort order for BaseTable
     */
    export enum SortOrder {
        /**
         * Sort data in ascending order
         */
        ASC = "asc",
        /**
         * Sort data in descending order
         */
        DESC = 'desc',
    }


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
        width: number,
        /**
         * The height of the table, will be ignored if `maxHeight` is set
         */
        height?: number,
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
        /**
         * Whether the width of the columns are fixed or flexible
         */
        fixed?: boolean,
        /**
         * Whether the table is disabled
         */
        disabled?: boolean,
        /**
         * Custom renderer on top of the table component
         */
        overlayRenderer?: React.ReactType | React.ReactElement,
        /**
         * Custom renderer when the length of data is 0
         */
        emptyRenderer?: React.ReactType | React.ReactElement,
        /**
         * Custom footer renderer, available only if `footerHeight` is larger then 0
         */
        footerRenderer?: React.ReactType | React.ReactElement,
        /**
         * Custom header renderer
         * The renderer receives props `{ cells, columns, headerIndex }`
         */
        headerRenderer?: React.ReactType | React.ReactElement,
        /**
         * Custom row renderer
         * The renderer receives props `{ isScrolling, cells, columns, rowData, rowIndex, depth }`
         */
        rowRenderer?: React.ReactType | React.ReactElement,
        /**
         * Class name for the table header, could be a callback to return the class name
         * The callback is of the shape of `({ columns, headerIndex }) => string`
         */
        headerClassName?: string,
        /**
         * Class name for the table row, could be a callback to return the class name
         * The callback is of the shape of `({ columns, rowData, rowIndex }) => string`
         */
        rowClassName?: string,
        /**
         * Extra props applied to header element
         * The handler is of the shape of `({ columns, headerIndex }) object`
         */
        headerProps?: any,
        /**
         * Extra props applied to header cell element
         * The handler is of the shape of `({ columns, column, columnIndex, headerIndex }) => object`
         */
        headerCellProps?: any,
        /**
         * Extra props applied to row element
         * The handler is of the shape of `({ columns, rowData, rowIndex }) => object`
         */
        rowProps?: any,
        /**
         * Extra props applied to row cell element
         * The handler is of the shape of `({ columns, column, columnIndex, rowData, rowIndex }) => object`
         */
        cellProps?: any,

        expandIconProps?: any,
        /**
         * The key for the expand column which render the expand icon if the data is a tree
         */
        expandColumnKey?: string,
        /**
         * Default expanded row keys when initialize the table
         */
        defaultExpandedRowKeys?: (string | number)[],
        /**
         * Controlled expanded row keys
         */
        expandedRowKeys?: (string | number)[],
        /**
         * A callback function when expand or collapse a tree node
         * The handler is of the shape of `({ expanded, rowData, rowIndex, rowKey }) => *`
         */
        onRowExpand?: (param: { expanded: any, rowData: any, rowIndex: any, rowKey: any }) => void,
        /**
         * A callback function when the expanded row keys changed
         * The handler is of the shape of `(expandedRowKeys) => *`
         */
        onExpandedRowsChange?: (expandedRowKeys: any) => void,
        /**
         * The sort state for the table, will be ignored if `sortState` is set
         */
        sortBy?: {
            /**
             * Sort key
             */
            key: string,
            /**
             * Sort order
             */
            order: SortOrder.ASC | SortOrder.DESC,
        },
        /**
         * Multiple columns sort state for the table
         *
         * example:
         * ```js
         * {
         *   'column-0': SortOrder.ASC,
         *   'column-1': SortOrder.DESC,
         * }
         * ```
         */
        sortState?: any,
        /**
         * A callback function for the header cell click event
         * The handler is of the shape of `({ column, key, order }) => *`
         */
        onColumnSort?: (param: { column: any, key: any, order: any }) => void,
        /**
         * A callback function when resizing the column width
         * The handler is of the shape of `({ column, width }) => *`
         */
        onColumnResize?: (param: { column: any, width: any }) => void,
        /**
         * Adds an additional isScrolling parameter to the row renderer.
         * This parameter can be used to show a placeholder row while scrolling.
         */
        useIsScrolling?: boolean,
        /**
         * Number of rows to render above/below the visible bounds of the list
         */
        overscanRowCount?: number,
    }

    export default class BaseTable extends React.PureComponent<IBaseTableProps, {}> {
    }
}