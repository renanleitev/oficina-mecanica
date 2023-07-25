import { styled } from "styled-components";
import * as colors from '../../config';

export const FooterContainer = styled.div`
    background-color: ${colors.primaryDarkColor};
    color: ${colors.primaryWhiteColor};
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
    padding: 10px;
`;