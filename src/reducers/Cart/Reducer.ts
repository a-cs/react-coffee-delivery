import { ActionTypes } from './Actions'

export interface Coffee {
    name: string
    tags: string[]
    description: string
    imageSrc: string
    price: number
    quantity: number
}

interface CartState {
    cart: Coffee[]
}

export function CartReducer(state: CartState, action: any) {
    console.log('action:', action)
    console.log('state:', state)
    switch (action.type) {
        case ActionTypes.ADD_NEW_ITEM: {
            const newState = {
                ...state,
                cart: [...state.cart, action.payload.newItem],
            }
            localStorage.setItem(
                '@CoffeeDelivery:cartData',
                JSON.stringify(newState),
            )

            return newState
        }
        case ActionTypes.CHANGE_ITEM_QUANTITY: {
            const newState = {
                ...state,
                cart: state.cart.map((item) =>
                    item.name === action.payload.itemName
                        ? { ...item, quantity: action.payload.newQuantity }
                        : item,
                ),
            }
            localStorage.setItem(
                '@CoffeeDelivery:cartData',
                JSON.stringify(newState),
            )

            return newState
        }
        case ActionTypes.REMOVE_ITEM: {
            const newState = {
                ...state,
                cart: state.cart.filter(
                    (item) => item.name !== action.payload.itemName,
                ),
            }
            localStorage.setItem(
                '@CoffeeDelivery:cartData',
                JSON.stringify(newState),
            )

            return newState
        }
        case ActionTypes.REMOVE_ALL_ITEMS: {
            const newState = {
                ...state,
                cart: [],
            }
            localStorage.removeItem('@CoffeeDelivery:cartData')

            return newState
        }
        default:
            return state
    }
}
