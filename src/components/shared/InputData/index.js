import React, {useState, useCallback, useMemo} from 'react';
import {startCase} from 'lodash';
import { InputContainer } from './styled';

export default function InputData(props){
    const [type, setType] = useState('text');
    useMemo(() => {
        switch(props.keyName){
            case 'password':
                setType('password');
                break;
            case 'email':
                setType('email');
                break;
            default:
                setType('text');
                break;
        }
    }, [props.keyName]);
    const handleInput = useCallback((e) => {
        props.setData({
            ...props.data,
            [props.keyName]: e.currentTarget.value,
        });
    }, [props]);
    return (
        <InputContainer>
            <label htmlFor={props.keyName}>{startCase(props.keyName)}</label>
            <input
            type={type}
            defaultValue={props.keyValue}
            onChange={handleInput}
            placeholder={startCase(props.keyName)}
            />
        </InputContainer>
    );
}