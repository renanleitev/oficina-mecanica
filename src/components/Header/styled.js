import styled from "styled-components";
import * as colors from '../../config';

export const HeaderContainer = styled.section`
    min-height: 100%;
    width: auto;
    background-color: ${colors.primaryWhiteColor};
    border-radius: 0;
    position: fixed;
    padding: 10px;
    z-index: 1;
`;

export const VerticalContainer = styled.div`
    display: flex;
    flex-direction: column;
    a{
        margin: 10px auto;
    }
`;