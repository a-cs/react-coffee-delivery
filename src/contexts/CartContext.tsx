import { ReactNode, createContext, useReducer } from 'react'
import { CartReducer, Coffee } from '../reducers/Cart/Reducer'
import {
    addNewItemAction,
    changeItemQuantityAction,
    removeAllItemsAction,
    removeItemAction,
} from '../reducers/Cart/Actions'

interface CartContextProviderProps {
    children: ReactNode
}

interface CartContextType {
    cart: Coffee[]
    cartTotalQuantity: number
    addItemToCart: (item: Coffee) => void
    changeItemQuantity: (itemName: string, quantity: number) => void
    removeItem: (itemName: string) => void
    removeAllItems: () => void
}

export const CartContext = createContext({} as CartContextType)
export function CartContextProvider({ children }: CartContextProviderProps) {
    const [cartState, dispatch] = useReducer(
        CartReducer,
        {
            cart: [],
        },
        (initialState) => {
            const storedStateAsJSON = localStorage.getItem(
                '@CoffeeDelivery:cartData',
            )
            if (storedStateAsJSON) return JSON.parse(storedStateAsJSON)
            return initialState
        },
    )
    const { cart } = cartState

    const cartTotalQuantity = cart.reduce(
        (accumulator, currentValue) => accumulator + currentValue.quantity,
        0,
    )

    function addItemToCart(item: Coffee) {
        dispatch(addNewItemAction(item))
    }

    function changeItemQuantity(itemName: string, quantity: number) {
        dispatch(changeItemQuantityAction(itemName, quantity))
    }

    function removeItem(itemName: string) {
        dispatch(removeItemAction(itemName))
    }
    function removeAllItems() {
        dispatch(removeAllItemsAction())
    }
    return (
        <CartContext.Provider
            value={{
                cart,
                cartTotalQuantity,
                addItemToCart,
                changeItemQuantity,
                removeItem,
                removeAllItems,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
