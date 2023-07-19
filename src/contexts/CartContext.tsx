import { ReactNode, createContext, useReducer } from 'react'
import { CartReducer, Coffee } from '../reducers/Cart/Reducer'
import { addNewItemAction } from '../reducers/Cart/Actions'

interface CartContextProviderProps {
    children: ReactNode
}

interface CartContextType {
    cart: Coffee[]
    addItemToCart: (item: Coffee) => void
}

export const CartContext = createContext({} as CartContextType)
export function CartContextProvider({ children }: CartContextProviderProps) {
    const [cartState, dispatch] = useReducer(CartReducer, {
        cart: [
            {
                name: 'Expresso Tradicional',
                tags: ['Tradicional'],
                description:
                    'O tradicional café feito com água quente e grãos moídos',
                imageSrc: 'src/assets/Type=Expresso.png',
                price: 9.9,
                quantity: 1,
            },
            {
                name: 'Expresso Americano',
                tags: ['Tradicional'],
                description:
                    'Expresso diluído, menos intenso que o tradicional',
                imageSrc: 'src/assets/Type=Americano.png',
                price: 9.9,
                quantity: 1,
            },
            {
                name: 'Expresso Cremoso',
                tags: ['Tradicional'],
                description: 'Café expresso tradicional com espuma cremosa',
                imageSrc: 'src/assets/Type=Expresso Cremoso.png',
                price: 9.9,
                quantity: 1,
            },
            {
                name: 'Expresso Gelado',
                tags: ['Tradicional', 'Gelado'],
                description:
                    'Bebida preparada com café expresso e cubos de gelo',
                imageSrc: 'src/assets/Type=Café Gelado.png',
                price: 9.9,
                quantity: 1,
            },
            {
                name: 'Café com Leite',
                tags: ['Tradicional', 'com leite'],
                description:
                    'Meio a meio de expresso tradicional com leite vaporizado',
                imageSrc: 'src/assets/Type=Café com Leite.png',
                price: 9.9,
                quantity: 1,
            },
        ],
    })
    const { cart } = cartState

    function addItemToCart(item: Coffee) {
        dispatch(addNewItemAction(item))
    }
    return (
        <CartContext.Provider value={{ cart, addItemToCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
