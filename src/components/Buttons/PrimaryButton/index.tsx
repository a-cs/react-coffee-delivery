import { ReactNode, ButtonHTMLAttributes } from 'react'
import { PrimaryButtonContainer } from './styles'

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

export function PrimaryButton({ children }: PrimaryButtonProps) {
    return <PrimaryButtonContainer>{children}</PrimaryButtonContainer>
}

export default PrimaryButton
