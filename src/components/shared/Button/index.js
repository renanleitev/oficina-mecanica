import React, { useState, useEffect } from "react";
import PlusIcon from '@rsuite/icons/Plus';
import TrashIcon from '@rsuite/icons/Trash';
import FolderFillIcon from '@rsuite/icons/FolderFill';
import SendIcon from '@rsuite/icons/Send';
import StarIcon from '@rsuite/icons/legacy/Star';
import { IconButton } from 'rsuite';
import * as colors from '../../../config';

const buttonStyle = {
    backgroundColor: colors.secundaryColor, 
    color: colors.primaryWhiteColor
};

export default function Button(props) {
    const [icon, setIcon] = useState(<StarIcon style={buttonStyle}/>);
    useEffect(() => {
        switch (props.title) {
            case 'add':
                setIcon(<PlusIcon style={buttonStyle}/>);
                break;
            case 'delete':
                setIcon(<TrashIcon style={buttonStyle}/>);
                break;
            case 'open':
                setIcon(<FolderFillIcon style={buttonStyle}/>);
                break;
            case 'export':
                setIcon(<SendIcon style={buttonStyle}/>);
                break;
            default:
                setIcon(<StarIcon style={buttonStyle}/>);
                break;
        }
    }, [props.title]);
    return (
        <IconButton
            icon={icon}
            style={buttonStyle}>
            {props.title}
        </IconButton>
    )
}