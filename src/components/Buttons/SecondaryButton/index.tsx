import { SecondaryButtonContainer } from './styles'
import { Trash } from '@phosphor-icons/react'

export function SecondaryButton() {
    return (
        <SecondaryButtonContainer>
            <Trash size={16} />
            <span>remover</span>
        </SecondaryButtonContainer>
    )
}

export default SecondaryButton
