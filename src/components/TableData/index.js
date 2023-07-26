import React from "react";
import { Table, IconButton, Pagination, Checkbox } from 'rsuite';
import CollaspedOutlineIcon from '@rsuite/icons/CollaspedOutline';
import ExpandOutlineIcon from '@rsuite/icons/ExpandOutline';
import { AdminContainer, PaginationContainer } from "./styled";
import SearchBar from "../SearchBar";
import ButtonOptions from "../ButtonOptions";

// https://rsuitejs.com/components/table/

const { Column, HeaderCell, Cell } = Table;
const rowKey = 'id';

const ExpandCell = ({ rowData, dataKey, expandedRowKeys, onChange, ...props }) => (
    <Cell {...props} style={{ padding: 5 }}>
        <IconButton
            appearance="subtle"
            onClick={() => {
                onChange(rowData);
            }}
            icon={
                expandedRowKeys.some(key => key === rowData[rowKey]) ? (
                    <CollaspedOutlineIcon />
                ) : (
                    <ExpandOutlineIcon />
                )
            }
        />
    </Cell>
);

const renderRowExpanded = rowData => {
    return (
        <div>
            <div
                style={{
                    width: 60,
                    height: 60,
                    float: 'left',
                    marginRight: 10,
                    background: '#eee'
                }}
            >
                <img src={rowData.avatar} style={{ width: 60 }} alt='' />
            </div>
            <p>Email: {rowData.email}</p>
            <p>Phone: {rowData.phone}</p>
        </div>
    );
};

const CheckCell = ({ rowData, onChange, checkedKeys, dataKey, ...props }) => (
    <Cell {...props} style={{ padding: 0 }}>
        <div style={{ lineHeight: '46px' }}>
            <Checkbox
                value={rowData[dataKey]}
                inline
                onChange={onChange}
                checked={checkedKeys.some(item => item === rowData[dataKey])}
            />
        </div>
    </Cell>
);

export default function TableData(props) {
    const defaultData = props.data;
    // Expandir linha
    const [expandedRowKeys, setExpandedRowKeys] = React.useState([]);
    const handleExpanded = (rowData) => {
        let open = false;
        const nextExpandedRowKeys = [];
        expandedRowKeys.forEach(key => {
            if (key === rowData[rowKey]) {
                open = true;
            } else {
                nextExpandedRowKeys.push(key);
            }
        });
        if (!open) {
            nextExpandedRowKeys.push(rowData[rowKey]);
        }
        setExpandedRowKeys(nextExpandedRowKeys);
    };
    // Paginação
    const [limit, setLimit] = React.useState(10);
    const [page, setPage] = React.useState(1);
    const handleChangeLimit = dataKey => {
        setPage(1);
        setLimit(dataKey);
    };
    const data = defaultData.filter((v, i) => {
        const start = limit * (page - 1);
        const end = start + limit;
        return i >= start && i < end;
    });
    // Ordenar por coluna
    const [sortColumn, setSortColumn] = React.useState();
    const [sortType, setSortType] = React.useState();
    const [loading, setLoading] = React.useState(false);
    const getData = () => {
        if (sortColumn && sortType) {
            return data.sort((a, b) => {
                let x = a[sortColumn];
                let y = b[sortColumn];
                if (typeof x === 'string') {
                    x = x.charCodeAt();
                }
                if (typeof y === 'string') {
                    y = y.charCodeAt();
                }
                if (sortType === 'asc') {
                    return x - y;
                } else {
                    return y - x;
                }
            });
        }
        return data;
    };
    const handleSortColumn = (sortColumn, sortType) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSortColumn(sortColumn);
            setSortType(sortType);
        }, 500);
    };
    // Checar itens por linha
    const [checkedKeys, setCheckedKeys] = React.useState([]);
    let checked = false;
    let indeterminate = false;
    if (checkedKeys.length === data.length) {
        checked = true;
    } else if (checkedKeys.length === 0) {
        checked = false;
    } else if (checkedKeys.length > 0 && checkedKeys.length < data.length) {
        indeterminate = true;
    }
    const handleCheckAll = (value, checked) => {
        const keys = checked ? data.map(item => item.id) : [];
        setCheckedKeys(keys);
    };
    const handleCheck = (value, checked) => {
        const keys = checked ? [...checkedKeys, value] : checkedKeys.filter(item => item !== value);
        setCheckedKeys(keys);
    };
    return (
        <AdminContainer>
            <PaginationContainer>
                <ButtonOptions title={props.title} />
                <SearchBar />
                <Pagination
                    prev
                    next
                    first
                    last
                    ellipsis
                    boundaryLinks
                    maxButtons={5}
                    size="xs"
                    layout={['total', '-', 'limit', '|', 'pager', 'skip']}
                    total={defaultData.length}
                    limitOptions={[10, 30, 50]}
                    limit={limit}
                    activePage={page}
                    onChangePage={setPage}
                    onChangeLimit={handleChangeLimit}
                />
            </PaginationContainer>
            <Table
                shouldUpdateScroll={false} // Prevent the scrollbar from scrolling to the top after the table content area height changes.
                height={400}
                width={800}
                style={{ borderRadius: '0px 0px 20px 20px' }}
                rowKey={rowKey}
                expandedRowKeys={expandedRowKeys}
                onRowClick={data => {
                    console.log(data);
                }}
                renderRowExpanded={renderRowExpanded}
                data={getData()}
                sortColumn={sortColumn}
                sortType={sortType}
                onSortColumn={handleSortColumn}
                loading={loading}
            >
                <Column width={70} align="center">
                    <HeaderCell style={{ padding: 0 }}>
                        <div style={{ lineHeight: '40px' }}>
                            <Checkbox
                                inline
                                checked={checked}
                                indeterminate={indeterminate}
                                onChange={handleCheckAll}
                            />
                        </div>
                    </HeaderCell>
                    <CheckCell dataKey="id" checkedKeys={checkedKeys} onChange={handleCheck} />
                </Column>
                <Column width={70} align="center">
                    <HeaderCell>#</HeaderCell>
                    <ExpandCell dataKey="id" expandedRowKeys={expandedRowKeys} onChange={handleExpanded} />
                </Column>
                <Column width={130} sortable>
                    <HeaderCell>First Name</HeaderCell>
                    <Cell dataKey="firstName" />
                </Column>
                <Column width={130} sortable>
                    <HeaderCell>Last Name</HeaderCell>
                    <Cell dataKey="lastName" />
                </Column>
                <Column width={100} sortable>
                    <HeaderCell>Gender</HeaderCell>
                    <Cell dataKey="gender" />
                </Column>
                <Column width={100} sortable>
                    <HeaderCell>Age</HeaderCell>
                    <Cell dataKey="age" />
                </Column>
                <Column width={200} sortable>
                    <HeaderCell>City</HeaderCell>
                    <Cell dataKey="city" />
                </Column>
            </Table>
        </AdminContainer>
    );
};
