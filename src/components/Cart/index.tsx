import { CartContainer } from './styles'
import { ShoppingCart } from '@phosphor-icons/react'

export function Cart() {
    return (
        <CartContainer>
            <ShoppingCart size={22} />
        </CartContainer>
    )
}

export default Cart
