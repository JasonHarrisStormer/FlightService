import styled from "styled-components";

//styling for the nav bar

export const Nav = styled.nav`
    background-color: ${({backgroundColor}) => backgroundColor ?? '#f7f0f7'};
    color: ${({color}) => color ?? 'white'};
    font-size: 20px;
    padding: 1em 1.5em;
    display: flex;
    justify-content: space-around;
`;