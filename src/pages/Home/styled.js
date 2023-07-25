import { styled } from "styled-components";
import * as colors from '../../config';

export const ProductsContainer = styled.div`
    display: grid;
    /* Quantas colunas você deseja e o espaço entre colunas */
    grid-template-columns: repeat(4, 180px);      
    grid-auto-rows: 200px;     
    grid-gap: 50px;   
    margin-bottom: 100px;
    margin-top: 150px;
`;

export const ItemContainer = styled.div`
    padding: 50px;
    padding-bottom: 150px;
    border-radius: 20px;
    background-color: ${colors.primaryWhiteColor};
`;