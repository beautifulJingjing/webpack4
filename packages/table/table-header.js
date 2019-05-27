/**
 * Created by caojingjing on 2019/3/21.
 */
export default {
    name: 'YhTableHeader',
    render(h) {
        return (
            <table
                class="el-table__header"
                cellspacing="0"
                cellpadding="0"
                border="0">
                <colgroup>
                    {
                        this._l(this.columns, column => <col name={ column.id } />)
                    }
                    {
                        this.hasGutter ? <col name="gutter" /> : ''
                    }
                </colgroup>
            </table>
        )
    },
    computed: {
        columns() {
            return this.store.states.columns;
        },
    }
}