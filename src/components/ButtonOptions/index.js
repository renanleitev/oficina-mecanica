import React from "react";
import ButtonData from "../shared/ButtonData";
import { ButtonBar } from "./styled";
import ModalContainer from "../shared/ModalContainer";

export default function ButtonOptions(props) {
    const [open, setOpen] = React.useState(false);
    const [button, setButton] = React.useState('add');
    const handleOpen = (button) => {
        setOpen(true);
        setButton(button);
    };
    const handleClose = () => setOpen(false);
    return (
        <>
            <ButtonBar>
                <h4>{props.title}</h4>
                <ButtonData title={'add'} onClick={() => handleOpen('add')} />
                <ButtonData title={'edit'} onClick={() => handleOpen('edit')} />
                <ButtonData title={'delete'} onClick={() => handleOpen('delete')} />
                <ButtonData title={'export'} onClick={() => handleOpen('export')} />
            </ButtonBar>
            <ModalContainer
                open={open}
                handleClose={handleClose}
                title={props.title}
                button={button}
            />
        </>
    )
}