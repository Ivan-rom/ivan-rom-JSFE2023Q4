import { StatisticType } from '../../types';
import Page from '../Page';

export default class Statistic extends Page {
    data: StatisticType;

    constructor() {
        super({ className: 'statistic' });
        this.data = JSON.parse(localStorage.getItem('statistic')!);
    }
}
