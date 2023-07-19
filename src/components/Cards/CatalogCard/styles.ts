import { styled } from 'styled-components'

export const CardContainer = styled.div`
    width: 16rem;
    height: 19.375rem;
    background-color: ${(props) => props.theme['base-card']};
    border-radius: 6px 36px;
    padding: 0 1.25rem;
`

export const CatalogCardContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        margin-top: -1.25rem;
        width: 7.5rem;
        height: 7.5rem;
    }
`

export const TagContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
`

export const Tag = styled.span`
    margin-top: 0.75rem;
    padding: 0.25rem 0.5rem;
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    border-radius: 100px;
    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;
`

export const Title = styled.h2`
    margin-top: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2';
    font-size: 1.25rem;
    font-weight: 700;
`

export const BottomContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const Description = styled.p`
    align-self: stretch;
    margin-top: 0.5rem;
    padding: 0.25rem 0.5rem;
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.3;
    text-align: center;
`

export const Footer = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.25rem;

    p {
        font-size: 0.875rem;

        span {
            font-family: 'Baloo 2';
            font-size: 1.5rem;
            font-weight: 800;
        }
    }
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
`
