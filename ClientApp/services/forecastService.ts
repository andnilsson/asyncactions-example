import { addTask } from 'domain-task';
import { WeatherForecast } from 'ClientApp/domain/WeatherForecast';

export async function initRetreiveForecasts(startDateIndex: number) {
    return new Promise<WeatherForecast[]>((resolve, reject) => {
        let fetchTask = fetch(`/api/SampleData/WeatherForecasts?startDateIndex=${startDateIndex}`)
            .then(response => response.json() as Promise<WeatherForecast[]>)
            .then(data => resolve(data));

        addTask(fetchTask);
    });
}