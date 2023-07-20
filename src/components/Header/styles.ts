import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: ${(props) => props.theme.background};
`

export const HeaderDiv = styled.div`
    max-width: 70rem;
    width: 100%;
    display: flex;
    margin: 2rem auto 1rem;
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
