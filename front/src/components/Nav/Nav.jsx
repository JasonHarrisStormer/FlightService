import styled from "styled-components";

//styling for the nav bar

export const Nav = styled.nav`
    background-color: ${({backgroundColor}) => backgroundColor ?? '#640564'};
    color: ${({color}) => color ?? 'white'};
    font-size: 20px;
    padding: 1em 1.5em;
    display: flex;
    justify-content: space-around;
`;