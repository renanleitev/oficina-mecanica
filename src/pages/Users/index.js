import React from "react";
import { mockUsers } from '../../utils/mock';
import TableData from "../../components/TableData";
import { MainContainer } from "../../styles";

export default function Users() {
    return (
        <MainContainer>
            <TableData data={mockUsers(100)} title={'Users'} />
        </MainContainer>
    );
};

