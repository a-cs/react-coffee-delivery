import { SelectButtonContainer } from './styles'

interface SelectButtonProps {
    icon: any
    text: string
    isSelected: boolean
    onSetValue: () => void
}

export function SelectButton({
    icon,
    text,
    isSelected,
    onSetValue, // onSelect,
}: SelectButtonProps) {
    return (
        <SelectButtonContainer
            onClick={onSetValue}
            isSelected={isSelected}
            type="button"
        >
            {icon}
            <span>{text}</span>
        </SelectButtonContainer>
    )
}

export default SelectButton
