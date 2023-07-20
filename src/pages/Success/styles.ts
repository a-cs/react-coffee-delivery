import { styled } from 'styled-components'

export const SucessContainer = styled.div`
    flex: 1;
    width: 100%;
    margin-top: 5rem;
    h1 {
        color: ${(props) => props.theme['yellow-dark']};
        font-family: 'Baloo 2';
        font-size: 2rem;
        font-weight: 800;
        line-height: 130%;
    }
    h2 {
        color: ${(props) => props.theme['base-subtitle']};
        font-family: Roboto;
        font-size: 1.25rem;
    }
`

export const RowWrapper = styled.div`
    padding: 5rem 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const LeftPanel = styled.div`
    background: ${(props) => props.theme.background};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 2.5rem;
    border: 1px solid transparent;
    border-radius: 6px 36px;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: -2px;
        left: -2px;
        background: linear-gradient(135deg, #dbac2c, #8047f8);
        padding: 1px;
        border-radius: 6px 36px;
        border: 1px solid transparent;
        z-index: -1;
    }
`
