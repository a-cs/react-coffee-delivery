import { InputNumberContainer } from './styles'
import { Minus, Plus } from '@phosphor-icons/react'

export function InputNumber() {
    return (
        <InputNumberContainer>
            <Minus size={14} />
            <input type="number" value="1" />
            <Plus size={14} />
        </InputNumberContainer>
    )
}

export default InputNumber
