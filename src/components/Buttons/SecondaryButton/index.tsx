import { SecondaryButtonContainer } from './styles'
import { Trash } from '@phosphor-icons/react'

interface SecondaryButtonProps {
    onRemove: () => void
}

export function SecondaryButton({ onRemove }: SecondaryButtonProps) {
    return (
        <SecondaryButtonContainer onClick={onRemove}>
            <Trash size={16} />
            <span>remover</span>
        </SecondaryButtonContainer>
    )
}

export default SecondaryButton
