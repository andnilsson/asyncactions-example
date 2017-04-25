import { IForecastsState, actionCreators } from './../store/Forecasts';
import { CounterState } from './../store/Counter';
import { createAction } from 'redux-actions';

export interface IAction {
    type: string,
    payload?: any;
}

export interface IAsyncPayload {
    asyncExecTime: number;
    startedAt: Date,
    endedAt: Date,
    type: string
}

export const AsyncTypes = {
    _STARTED: '_STARTED',
    _FAILED: '_FAILED',
    _SUCCEED: '_SUCCEED',
    _ENDED: '_ENDED',
    GENERIC_ENDED: 'ASYNC_ACTION_ENDED',
    GENERIC_ERROR: 'ASYNC_ACTION_FAILED'
}

export function createAsyncAction(TYPE: string, executeAsync: any) {
    const TYPE_STARTED = TYPE + AsyncTypes._STARTED;
    const TYPE_FAILED = TYPE + AsyncTypes._FAILED;
    const TYPE_SUCCEED = TYPE + AsyncTypes._SUCCEED;
    const TYPE_ENDED = TYPE + AsyncTypes._ENDED;

    let actionCreators = {
        TYPE_STARTED: createAction(TYPE_STARTED),
        TYPE_FAILED: createAction(TYPE_FAILED),
        TYPE_SUCCEED: createAction(TYPE_SUCCEED),
        TYPE_ENDED: createAction(TYPE_ENDED),
        GENERIC_ERROR: createAction(AsyncTypes.GENERIC_ERROR),
        GENERIC_ENDED: createAction(AsyncTypes.GENERIC_ENDED)
    };

    function create(...args) {
        return async (dispatch, getState) => {
            let result;
            let startedAt = (new Date()).getTime();
            dispatch(actionCreators.TYPE_STARTED({ ...args }));
            try {
                result = await executeAsync(...args, dispatch, getState);
                dispatch(actionCreators.TYPE_SUCCEED(result));
            }
            catch (error) {
                dispatch(actionCreators.TYPE_FAILED({
                    errorMessage: error.message
                }));
                dispatch(actionCreators.GENERIC_ERROR({
                    errorMessage: error.message,
                    type: TYPE_FAILED
                }));
                throw error;
            }
            let endedAt = (new Date()).getTime();
            var ended = {
                asyncExecTime: endedAt - startedAt,
                startedAt: new Date(startedAt),
                endedAt: new Date(endedAt),
                type: TYPE_ENDED,
            } as IAsyncPayload

            dispatch(actionCreators.GENERIC_ENDED(ended));
            dispatch(actionCreators.TYPE_ENDED(ended));
            return result;
        };
    }
    Object.assign(create, {
        TYPE,
        STARTED: TYPE_STARTED,
        FAILED: TYPE_FAILED,
        SUCCEED: TYPE_SUCCEED,
        ENDED: TYPE_ENDED
    });
    return create;
}