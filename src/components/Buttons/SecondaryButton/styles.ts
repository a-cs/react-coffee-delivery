import { styled } from 'styled-components'

export const SecondaryButtonContainer = styled.button`
    border: none;
    height: 32px;
    padding: 0px 8px;
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme.purple};
    gap: 0.25rem;
    border-radius: 6px;
    transition: 0.1s;
    cursor: pointer;

    span {
        color: ${(props) => props.theme['base-text']};
        font-size: 0.75rem;
        line-height: 160%;
        text-transform: uppercase;
    }

    &:hover {
        background-color: ${(props) => props.theme['base-hover']};
        span {
            color: ${(props) => props.theme['base-subtitle']};
        }
    }
`
