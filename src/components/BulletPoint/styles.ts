import { styled } from 'styled-components'

interface IconContainerProps {
    backgroundColor: string
}

export const BulletPointContainer = styled.div`
    width: 100%;
    flex: 1 0 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1.25rem;
`

export const IconContainer = styled.div<IconContainerProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme[props.backgroundColor]};
    color: ${(props) => props.theme.background};
    padding: 0.5rem;
    border-radius: 50%;
`
