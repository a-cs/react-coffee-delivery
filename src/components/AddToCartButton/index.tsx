import { AddToCartButtonContainer } from './styles'
import { ShoppingCart } from '@phosphor-icons/react'

export function AddToCartButton() {
    return (
        <AddToCartButtonContainer>
            <ShoppingCart size={22} weight="fill" />
        </AddToCartButtonContainer>
    )
}

export default AddToCartButton
