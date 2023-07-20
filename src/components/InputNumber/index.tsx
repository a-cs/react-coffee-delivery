import { InputNumberContainer } from './styles'
import { Minus, Plus } from '@phosphor-icons/react'

interface InputNumberProps {
    value: number
    onIncrease: () => void
    onDecrease: () => void
    minValue: number
}

export function InputNumber({
    value,
    onIncrease,
    onDecrease,
    minValue,
}: InputNumberProps) {
    return (
        <InputNumberContainer>
            <button disabled={value === minValue} onClick={onDecrease}>
                <Minus size={14} />
            </button>
            <input type="number" readOnly value={value} />
            <button disabled={value >= 99} onClick={onIncrease}>
                <Plus size={14} />
            </button>
        </InputNumberContainer>
    )
}

export default InputNumber
