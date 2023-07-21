import { Coffee } from './Reducer'

export enum ActionTypes {
    ADD_NEW_ITEM = 'ADD_NEW_ITEM',
    CHANGE_ITEM_QUANTITY = 'CHANGE_ITEM_QUANTITY',
    REMOVE_ITEM = 'REMOVE_ITEM',
    REMOVE_ALL_ITEMS = 'REMOVE_ALL_ITEMS',
}

export function addNewItemAction(newItem: Coffee) {
    return {
        type: ActionTypes.ADD_NEW_ITEM,
        payload: {
            newItem,
        },
    }
}

export function changeItemQuantityAction(
    itemName: string,
    newQuantity: number,
) {
    return {
        type: ActionTypes.CHANGE_ITEM_QUANTITY,
        payload: {
            itemName,
            newQuantity,
        },
    }
}

export function removeItemAction(itemName: string) {
    return {
        type: ActionTypes.REMOVE_ITEM,
        payload: {
            itemName,
        },
    }
}

export function removeAllItemsAction() {
    return {
        type: ActionTypes.REMOVE_ALL_ITEMS,
    }
}
