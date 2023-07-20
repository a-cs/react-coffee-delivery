import { AddToCartButtonContainer } from './styles'
import { ShoppingCart } from '@phosphor-icons/react'

interface AddToCartButtonProps {
    onAddToCart: () => void
}
export function AddToCartButton({ onAddToCart }: AddToCartButtonProps) {
    return (
        <AddToCartButtonContainer onClick={onAddToCart}>
            <ShoppingCart size={22} weight="fill" />
        </AddToCartButtonContainer>
    )
}

export default AddToCartButton
