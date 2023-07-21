import { ReactNode, ButtonHTMLAttributes } from 'react'
import { PrimaryButtonContainer } from './styles'

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

export function PrimaryButton({ children, disabled }: PrimaryButtonProps) {
    return (
        <PrimaryButtonContainer disabled={disabled}>
            {children}
        </PrimaryButtonContainer>
    )
}

export default PrimaryButton
