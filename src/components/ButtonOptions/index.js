import React from "react";
import Button from "../shared/Button";
import { ButtonBar } from "./styled";

export default function ButtonOptions(props){
    return (
        <ButtonBar>
            <h4>{props.title}</h4>
            <Button title={'add'}/>
            <Button title={'open'}/>
            <Button title={'delete'}/>
            <Button title={'export'}/>
        </ButtonBar>
    )
}