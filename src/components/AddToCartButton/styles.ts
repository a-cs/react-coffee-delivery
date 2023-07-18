import { styled } from 'styled-components'

export const AddToCartButtonContainer = styled.button`
    border: none;
    border-radius: 6px;
    background: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme['base-card']};
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.1s;

    &:hover {
        background: ${(props) => props.theme.purple};
    }
`
