### exempel med redux-actions
i [store.ts](https://github.com/andnilsson/asyncactions-example/blob/master/ClientApp/domain/store.ts) finns en async action creator:
```
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
```

Den bränner av actions
+ TYPE + '_STARTED'
+ TYPE + '_FAILED'
+ TYPE + '_SUCCEEDED'
+ TYPE + '_ENDED'
+ ASYNC_ACTION_ENDED
+ ASYNC_ACTION_FAILED


Den kan användas såhär [forecasts.ts](https://github.com/andnilsson/asyncactions-example/blob/master/ClientApp/store/Forecasts.ts):
```
export const actionCreators = {
    loadForecasts: createAsyncAction(FETCH_FORECASTS, async (index) => {
        return await initRetreiveForecasts(index);
    }),    
}
```

Kollar man i reducer-funktionen i forecasts.ts ser man att alla async-typerna kan hanteras:
```
export const reducer: Reducer<IForecastsState> = (state: IForecastsState = {
    isLoading: false,
    error: "",    
    forecasts: []
}, action: IAction) => {
    switch (action.type) {
        case FETCH_FORECASTS + AsyncTypes._STARTED:
            return {
                ...state,
                ...{
                    isLoading: false
                }
            }
        case FETCH_FORECASTS + AsyncTypes._ENDED:
            return {
                ...state,
                ...{
                    isLoading: false
                }
            }
        case FETCH_FORECASTS + AsyncTypes._FAILED:
            return {
                ...state,
                ...{
                    isLoading: false,
                    error: action.payload
                }
            }
        case FETCH_FORECASTS + AsyncTypes._SUCCEED:
            return {
                ...state,
                ...{
                    isLoading: false,
                    forecasts: action.payload
                }
            }        
        default: return state;
    }
}
```