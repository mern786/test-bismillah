

import styled from 'styled-components';


export const Grid = styled.div`

    display: grid;
    grid-template-rows: repeat( ${({ prop }) => ( prop <= 30 ? 4 : 6 )}, 150px );
    grid-auto-flow: column;
    justify-content: center;

    

`;