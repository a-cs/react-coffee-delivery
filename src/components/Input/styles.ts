import { styled } from 'styled-components'

interface InputContainerProps {
    containerWidth?: string
    isRequired?: boolean
}

export const InputContainer = styled.div<InputContainerProps>`
    display: flex;
    width: ${(props) => (props.containerWidth ? props.containerWidth : '100%')};
    align-items: center;
    position: relative;
    input {
        width: ${(props) =>
            props.containerWidth ? props.containerWidth : '100%'};
        padding: 0.75rem;
        border-radius: 4px;
        border: 1px solid ${(props) => props.theme['base-button']};
        background: ${(props) => props.theme['base-input']};
        font-size: 0.875rem;
        color: ${(props) => props.theme['base-text']};

        &::placeholder {
            color: ${(props) => props.theme['base-label']};
        }

        &:focus {
            border-color: ${(props) => props.theme['yellow-dark']};
        }
    }
    span {
        position: absolute;
        right: 0.75rem;
        font-size: 0.75rem;
        font-style: italic;
        color: ${(props) => props.theme['base-label']};
    }

    input:not(:placeholder-shown) + span {
        display: none;
    }

    input:focus + span {
        display: none;
    }
`
