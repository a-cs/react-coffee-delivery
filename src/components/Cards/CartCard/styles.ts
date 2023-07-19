import { styled } from 'styled-components'

export const CartCardContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
    background-color: ${(props) => props.theme['base-card']};

    img {
        width: 4rem;
        height: 4rem;
    }

    span {
        font-weight: 700;
        white-space: nowrap;
    }
`
export const ColumnContainer = styled.div`
    margin-left: 1.25rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.5rem;
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
`
