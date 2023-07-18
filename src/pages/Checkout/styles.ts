import { styled } from 'styled-components'

export const CheckoutContainer = styled.div`
    width: 100%;
    margin-top: 2.5rem;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;
`

export const LeftContainer = styled.div`
    display: flex;
    width: 40rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
`

export const RightContainer = styled.div`
    display: flex;
    width: 40rem;
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
