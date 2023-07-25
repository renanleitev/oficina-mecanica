import React from "react";
import SearchBar from "../../components/SearchBar";
import { Table, Button } from 'rsuite';
import { mockUsers } from '../../utils/mock';
import { AdminContainer } from "./styled";

export default function Admin() {
    const { Column, HeaderCell, Cell } = Table;
    const data = mockUsers(20);
    return (
        <>
        <SearchBar/>
        <AdminContainer>

        <Table
            height={400}
            width={1100}
            data={data}
            onRowClick={rowData => {
                console.log(rowData.firstName);
            }}
            appearance="primary"
        >
            <Column width={60} align="center" fixed>
                <HeaderCell>Id</HeaderCell>
                <Cell dataKey="id" />
            </Column>

            <Column width={150}>
                <HeaderCell>First Name</HeaderCell>
                <Cell dataKey="firstName" />
            </Column>

            <Column width={150}>
                <HeaderCell>Last Name</HeaderCell>
                <Cell dataKey="lastName" />
            </Column>

            <Column width={100}>
                <HeaderCell>Gender</HeaderCell>
                <Cell dataKey="gender" />
            </Column>

            <Column width={100}>
                <HeaderCell>Age</HeaderCell>
                <Cell dataKey="age" />
            </Column>

            <Column width={150}>
                <HeaderCell>Postcode</HeaderCell>
                <Cell dataKey="postcode" />
            </Column>

            <Column width={300}>
                <HeaderCell>Email</HeaderCell>
                <Cell dataKey="email" />
            </Column>
            <Column width={80} fixed="right">
                <HeaderCell>...</HeaderCell>

                <Cell style={{ padding: '6px' }}>
                    {rowData => (
                        <Button appearance="link" onClick={() => alert(`id:${rowData.id}`)}>
                            Edit
                        </Button>
                    )}
                </Cell>
            </Column>
        </Table>
        </AdminContainer>
        </>
    );
};
