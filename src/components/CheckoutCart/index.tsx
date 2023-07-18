import { CheckoutCartContainer } from './styles'
import { ShoppingCart } from '@phosphor-icons/react'

export function CheckoutCart() {
    return (
        <CheckoutCartContainer>
            <ShoppingCart size={22} />
        </CheckoutCartContainer>
    )
}

export default CheckoutCart
