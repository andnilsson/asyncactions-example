import { IApplicationState } from '../store';
import * as React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as WeatherForecastsState from '../store/Forecasts';

type Props = IApplicationState & typeof WeatherForecastsState.actionCreators & { params: { startDateIndex: string } };

interface IState {
    index: number
}

class FetchData extends React.Component<Props, IState> {
    constructor(props: Props){
        super(props);
        this.state = {
            index: -1
        }
    }
    tryChangeIndex(index:number){
        if(index != this.state.index)
            this.setState({index: index}, () => this.props.loadForecasts(index));
    }
    componentDidMount() {        
        let startDateIndex = parseInt(this.props.params.startDateIndex) || 0;        
        this.tryChangeIndex(startDateIndex);
    }

    componentWillReceiveProps(nextProps: Props) {        
        let startDateIndex = parseInt(nextProps.params.startDateIndex) || 0;        
        this.tryChangeIndex(startDateIndex);
    }

    public render() {
        return <div>
            <h1>Weather forecast</h1>
            <p>This component demonstrates fetching data from the server and working with URL parameters.</p>
            { this.renderForecastsTable() }
            { this.renderPagination() }
        </div>;
    }

    private renderForecastsTable() {
        return <table className='table'>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>
            {this.props.forecast.forecasts.map(forecast =>
                <tr key={ forecast.dateFormatted }>
                    <td>{ forecast.dateFormatted }</td>
                    <td>{ forecast.temperatureC }</td>
                    <td>{ forecast.temperatureF }</td>
                    <td>{ forecast.summary }</td>
                </tr>
            )}
            </tbody>
        </table>;
    }

    private renderPagination() {
        return <p className='clearfix text-center'>
            <Link className='btn btn-default pull-left' to={ `/fetchdata/${ this.state.index - 5 }` }>Previous</Link>
            <Link className='btn btn-default pull-right' to={ `/fetchdata/${ this.state.index + 5 }` }>Next</Link>
            { this.props.forecast.isLoading ? <span>Loading...</span> : [] }
        </p>;
    }
}

export default connect(
    (state: IApplicationState) => state, // Selects which state properties are merged into the component's props
    WeatherForecastsState.actionCreators                 // Selects which action creators are merged into the component's props
)(FetchData);
