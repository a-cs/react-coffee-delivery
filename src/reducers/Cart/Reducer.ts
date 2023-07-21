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
        case ActionTypes.ADD_NEW_ITEM:
            return {
                ...state,
                cart: [...state.cart, action.payload.newItem],
            }
        case ActionTypes.CHANGE_ITEM_QUANTITY:
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.name === action.payload.itemName
                        ? { ...item, quantity: action.payload.newQuantity }
                        : item,
                ),
            }
        case ActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cart: state.cart.filter(
                    (item) => item.name !== action.payload.itemName,
                ),
            }
        case ActionTypes.REMOVE_ALL_ITEMS:
            return {
                ...state,
                cart: [],
            }
        default:
            return state
    }
}
