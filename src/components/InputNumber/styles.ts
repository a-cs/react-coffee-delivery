import { styled } from 'styled-components'

export const InputNumberContainer = styled.div`
    display: inline-flex;
    height: 2rem;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    flex-shrink: 0;
    border-radius: 6px;
    background: ${(props) => props.theme['base-button']};

    input[type='number'] {
        border: none;
        width: 1.25rem;
        background-color: transparent;
        color: ${(props) => props.theme['base-title']};
        text-align: center;
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }

    button {
        border: none;
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        svg {
            color: ${(props) => props.theme.purple};
            transition: 0.1s;
            &:hover {
                color: ${(props) => props.theme['purple-dark']};
            }
        }

        &:disabled {
            cursor: not-allowed;
            svg {
                color: ${(props) => props.theme['base-label']};
            }
        }
    }
`
