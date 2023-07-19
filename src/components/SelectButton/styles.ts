import { styled } from 'styled-components'

interface SelectButtonContainerProps {
    isSelected: boolean
}

export const SelectButtonContainer = styled.button<SelectButtonContainerProps>`
    width: 100%;
    border-radius: 6px;
    background: ${(props) =>
        props.isSelected
            ? props.theme['purple-light']
            : props.theme['base-button']};
    color: ${(props) => props.theme.purple};
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.75rem;
    cursor: pointer;
    transition: 0.1s;
    border: 1px solid
        ${(props) => (props.isSelected ? props.theme.purple : 'transparent')};

    &:hover {
        background: ${(props) => props.theme['base-hover']};
    }

    span {
        font-size: 0.75rem;
        line-height: 1.6;
        vertical-align: middle;
        text-transform: uppercase;
        color: ${(props) => props.theme['base-text']};
    }

    &:hover span {
        color: ${(props) => props.theme['base-subtitle']};
    }
`
