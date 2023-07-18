import { styled } from 'styled-components'

export const CoffeeListContainer = styled.div`
    padding: 2rem 0;
    text-align: start;
    h1 {
        color: ${(props) => props.theme['base-subtitle']};
        font-family: 'Baloo 2';
        font-size: 2rem;
        color: var(--base-subtitle, #403937);
        font-weight: 800;
    }
`

export const CoffeeListWrapper = styled.div`
    margin-top: 3.375rem;
    margin-bottom: 9.8125rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    gap: 2.5rem 2rem;
`
