import { ActionTypes } from './Actions'

export interface Coffee {
    name: string
    tags: string[]
    description: string
    imageSrc: string
    price: number
    quantity?: number
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
        default:
            return state
    }
}
