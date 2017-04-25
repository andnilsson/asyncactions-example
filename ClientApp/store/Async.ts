import { AsyncTypes, IAsyncPayload } from './../domain/store';
import { IAction } from 'ClientApp/domain/store';
import { Reducer } from 'redux';

export interface IAsyncState {
    asyncactions: IAsyncPayload[]
}

export const reducer: Reducer<IAsyncState> = (state: IAsyncState = {
    asyncactions: []
}, action: IAction) => {
    switch (action.type) {
        case AsyncTypes.GENERIC_ENDED:
            return {
                ...state,
                ...{
                    asyncactions: [...state.asyncactions, action.payload]
                }
            }
            default: return state
    }
}