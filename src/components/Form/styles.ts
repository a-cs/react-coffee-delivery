import { styled } from 'styled-components'

interface HeaderProps {
    iconColor: string
}

export const FormContainer = styled.div`
    display: flex;
    padding: 2.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    align-self: stretch;
    border-radius: 6px;
    background: ${(props) => props.theme['base-card']};
`

export const Header = styled.header<HeaderProps>`
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    align-self: stretch;
    color: ${(props) => props.theme[props.iconColor]};

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
