import styled, { createGlobalStyle } from "styled-components";
import * as colors from '../config';
import { injectStyle } from "react-toastify/dist/inject-style";

injectStyle();

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: sans-serif;
        color: ${colors.primaryDarkColor};
        background-color: ${colors.primaryColor};
    }
    html, body, #root {
        height: 100%;
    }
    button {
        cursor: pointer;
        background: ${colors.primaryColor};
        border: none;
        color: ${colors.primaryWhiteColor};
        padding: 10px 20px;
        border-radius: 4px;
        font-weight: 700;
    }
    a {
        text-decoration: none;
    }
    a:hover{
        color: ${colors.infoColor};
    }
    ul {
        list-style: none;
    }
    body .Toastify .Toastify__toast-container .Toastify__toast--success {
        margin-top: 70px;
        background-color: ${colors.sucessColor};
        color: white;
    }
    body .Toastify .Toastify__toast-container .Toastify__toast--error {
        margin-top: 50px;
        background-color: ${colors.errorColor};
        color: white;
    }
`;

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 100vh;
`;

export const FlexRowContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const FlexColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Container = styled.section`
    max-width: 360px;
    background: ${colors.primaryWhiteColor};
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    img {
        width: 150px;
        margin-top: 100%;
    }
    img:hover{
        transform: scale(1.2);
        transition: all 300ms;
    }
`;

export const Form = styled.form`
    display: flex;
    background: ${colors.primaryWhiteColor};
    flex-direction: column;
    justify-content: center;
    width: auto;
    border-radius: 20px;
    padding: 30px;
    h1, h2{
        text-align: center;
        margin-bottom: 10px;
    }
    .link{
        margin-top: 10px;
        font-size: 12px;
    }
    .link:hover{
        color: ${colors.infoColor};
    }
    label {
        position: absolute;
        font-weight: bolder;
        font-size: 12px;
        text-align: left;
        margin: -7px auto;
        margin-left: 10px;
        padding: 1px;
        background-color: ${colors.primaryWhiteColor};
    }
    input {
        border: 1px solid ${colors.primaryDarkColor};
        width: 250px;
        padding: 20px;
    }
    /* Removendo as cores do background do input */
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active{
        -webkit-box-shadow: 0 0 0 30px ${colors.primaryWhiteColor} inset;
    }
    button {
        border-radius: 20px;
        margin: 20px auto;
    }
    button:hover{
        background-color: ${colors.infoColor};
    }
`;