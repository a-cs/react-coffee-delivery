import { useContext } from 'react'
import { CheckoutCartContainer } from './styles'
import { ShoppingCart } from '@phosphor-icons/react'
import CartContext from '../../contexts/CartContext'

export function CheckoutCart() {
    const { cartTotalQuantity } = useContext(CartContext)
    return (
        <CheckoutCartContainer
            spanWidth={10 + String(cartTotalQuantity).length * 10}
        >
            <ShoppingCart size={22} weight="fill" />
            {cartTotalQuantity ? <span>{cartTotalQuantity}</span> : ''}
        </CheckoutCartContainer>
    )
}

export default CheckoutCart
