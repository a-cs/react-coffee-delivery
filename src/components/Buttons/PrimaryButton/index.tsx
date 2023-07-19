import { ReactNode } from 'react'
import { PrimaryButtonContainer } from './styles'

interface PrimaryButtonProps {
    children: ReactNode
}

export function PrimaryButton({ children }: PrimaryButtonProps) {
    return <PrimaryButtonContainer>{children}</PrimaryButtonContainer>
}

export default PrimaryButton
