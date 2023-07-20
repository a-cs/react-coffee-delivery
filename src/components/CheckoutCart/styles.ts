import { styled } from 'styled-components'

interface CheckoutCartContainerProps {
    spanWidth: number
}

export const CheckoutCartContainer = styled.button<CheckoutCartContainerProps>`
    border: none;
    border-radius: 6px;
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;

    span {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 20px;
        width: ${(props) => props.spanWidth}px;
        font-size: 1rem;
        line-height: 1rem;
        position: absolute;
        right: -${(props) => props.spanWidth / 2}px;
        top: -10px;

        background: ${(props) => props.theme['yellow-dark']};
        color: ${(props) => props.theme.white};
        border-radius: 50%;
    }
`
