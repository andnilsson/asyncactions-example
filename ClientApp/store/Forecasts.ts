import { initRetreiveForecasts } from '../services/forecastService';
import { AsyncTypes, createAsyncAction } from '../domain/store';
import { Reducer } from 'redux';
import { WeatherForecast } from '../domain/WeatherForecast';
import { IAction } from "ClientApp/domain/store";

const FETCH_FORECASTS = 'FETCH_FORECASTS';

export interface IForecastsState {
    isLoading: boolean;
    error: string;    
    forecasts: WeatherForecast[];
}

export const actionCreators = {
    loadForecasts: createAsyncAction(FETCH_FORECASTS, async (index) => {
        return await initRetreiveForecasts(index);
    }),    
}

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