import { Coffee } from './Reducer'

export enum ActionTypes {
    ADD_NEW_ITEM = 'ADD_NEW_ITEM',
}

export function addNewItemAction(newItem: Coffee) {
    return {
        type: ActionTypes.ADD_NEW_ITEM,
        payload: {
            newItem,
        },
    }
}
