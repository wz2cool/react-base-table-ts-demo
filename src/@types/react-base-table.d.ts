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
    }

    /**
     * Column for BaseTable
     */
    export class Column extends React.Component<IColumnProp, any> {

    }


}