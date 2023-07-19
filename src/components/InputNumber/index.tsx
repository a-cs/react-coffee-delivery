import { InputNumberContainer } from './styles'
import { Minus, Plus } from '@phosphor-icons/react'

interface InputNumberProps {
    value: number
}

export function InputNumber({ value }: InputNumberProps) {
    function handleChange() {
        return ''
    }
    return (
        <InputNumberContainer>
            <Minus size={14} />
            <input type="number" onChange={handleChange} value={value} />
            <Plus size={14} />
        </InputNumberContainer>
    )
}

export default InputNumber
