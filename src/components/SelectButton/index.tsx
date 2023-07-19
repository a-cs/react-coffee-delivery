import { SelectButtonContainer } from './styles'

interface SelectButtonProps {
    icon: any
    text: string
    isSelected: boolean
}

export function SelectButton({ icon, text, isSelected }: SelectButtonProps) {
    return (
        <SelectButtonContainer isSelected={isSelected} type="button">
            {icon}
            <span>{text}</span>
        </SelectButtonContainer>
    )
}

export default SelectButton
