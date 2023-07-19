import { styled } from 'styled-components'

export const CheckoutContainer = styled.div`
    width: 100%;
    margin-top: 2.5rem;
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
`

export const LeftContainer = styled.div`
    display: flex;
    width: 40rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
    margin-bottom: 15rem;
`

export const RightContainer = styled.div`
    display: flex;
    width: 28rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
`

export const Title = styled.h2`
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 130%;
    margin-bottom: 0.9375rem;
`

export const PanelContainer = styled.div`
    display: flex;
    padding: 2.5rem;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 6px 44px;
    gap: 1.5rem;
    background: ${(props) => props.theme['base-card']};
    hr {
        width: 100%;
        border: 1px solid ${(props) => props.theme['base-button']};
    }
`

export const CartCardListContainer = styled.div`
    width: 100%;
    max-height: 19.75rem;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
`

export const RowContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme['base-text']};
    text-align: right;

    p {
        font-size: 0.875rem;
    }
    strong {
        font-size: 1.25rem;
        color: ${(props) => props.theme['base-subtitle']};
        font-weight: 700;
    }
`

export const ColumnContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
`
