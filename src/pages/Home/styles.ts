import { styled } from 'styled-components'

export const HomeContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const MainWrapper = styled.div`
    padding: 5.875rem 0;
    flex-basis: 52.5;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Main = styled.main`
    margin-right: 3.5rem;
    h1 {
        color: ${(props) => props.theme['base-title']};
        font-family: 'Baloo 2';
        font-size: 3rem;
        font-weight: 800;
        margin-bottom: 1rem;
    }

    h2 {
        color: ${(props) => props.theme['base-subtitle']};
        font-size: 1.25rem;
    }
`

export const BulletPointsWrapper = styled.div`
    margin-top: 4.125rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
