import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
    width: 100%;
    display: flex;
    margin: 2rem auto;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const RightContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
`

export const LocationContainer = styled.div`
    padding: 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    border-radius: 6px;
    background: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme.purple};
    span {
        color: ${(props) => props.theme['purple-dark']};
        font-size: 0.875rem;
    }
`
