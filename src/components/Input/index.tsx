import { InputHTMLAttributes } from 'react'
import { InputContainer } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    containerWidth?: string
}

export function Input({ containerWidth, required, ...rest }: InputProps) {
    return (
        <InputContainer containerWidth={containerWidth}>
            <input {...rest} />
            {!required && <span>Opcional</span>}
        </InputContainer>
    )
}

export default Input
