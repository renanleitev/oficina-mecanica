import { styled } from "styled-components";
import { Container } from "../../styles";
import * as colors from '../../config';

export const SearchBarContainer = styled(Container)`
    background-color: ${colors.primaryDarkColor};
    color: ${colors.primaryWhiteColor};
    border-radius: 0;
    top: 0;
    position: fixed;
    min-width: 100%;
    
`;