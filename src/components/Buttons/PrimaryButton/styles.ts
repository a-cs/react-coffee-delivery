import { styled } from 'styled-components'

export const PrimaryButtonContainer = styled.button`
    border: none;
    width: 100%;
    display: flex;
    padding: 12px 8px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    align-self: stretch;
    border-radius: 6px;
    background: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.white};
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.6;
    transition: 0.1s;
    cursor: pointer;
    text-transform: uppercase;

    &:hover {
        background: ${(props) => props.theme['yellow-dark']};
    }
`
