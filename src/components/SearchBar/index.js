import React from "react";
import { Input, InputGroup } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';

const styles = {
    marginBottom: 10
};

export default function SearchBar() {
    return (
        <InputGroup style={styles}>
            <InputGroup.Addon>
                <SearchIcon />
            </InputGroup.Addon>
            <Input />
        </InputGroup>
    )
}