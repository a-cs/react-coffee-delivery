import { InputHTMLAttributes } from 'react'
import { InputContainer } from './styles'
import { FieldValues, UseFormRegister } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    containerWidth?: string
    id: string
    register: UseFormRegister<FieldValues>
    errors: any
}

export function Input({
    id,
    containerWidth,
    required,
    register,
    errors,
    ...rest
}: InputProps) {
    return (
        <InputContainer error={errors[id]} containerWidth={containerWidth}>
            <input {...register(id)} {...rest} />
            {!required && <span>Opcional</span>}
        </InputContainer>
    )
}

export default Input
