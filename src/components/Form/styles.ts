import { styled } from 'styled-components'

interface HeaderProps {
    iconColor: string
}

export const FormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
`

export const PanelContainer = styled.div`
    display: flex;
    padding: 2.5rem;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 6px;
    gap: 1rem;
    background: ${(props) => props.theme['base-card']};
`

export const Header = styled.header<HeaderProps>`
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    align-self: stretch;
    color: ${(props) => props.theme[props.iconColor]};
    margin-bottom: 1rem;

    div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        h2 {
            color: ${(props) => props.theme['base-subtitle']};
            font-family: Roboto;
            font-size: 1rem;
            font-style: normal;
            font-weight: 400;
            line-height: 130%;
        }
        h3 {
            height: 21px;
            color: ${(props) => props.theme['base-text']};
            font-family: Roboto;
            font-size: 0.875rem;
            font-style: normal;
            font-weight: 400;
            line-height: 130%;
        }
    }
`

export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 0.75rem;
`

interface InputProps {
    width?: string
}

export const Input = styled.input<InputProps>`
    display: flex;
    width: ${(props) => (props.width ? props.width : '100%')};
    padding: 0.75rem;
    align-items: center;
    gap: 4px;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme['base-button']};
    background: ${(props) => props.theme['base-input']};
`
