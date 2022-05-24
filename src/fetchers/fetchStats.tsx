import axios from 'axios';
import { Stats } from '../interfaces/Stats';

export const fetchStats = async (userId: string): Promise<Stats> => {
    try {
        const response = await axios.get(`https://stackoverflow-stats-api.herokuapp.com/stats?userId=${userId}`)
        return response.data as Stats;
    } catch {
        const errorMsg = 'backend error, try again'
        return { status: '400', message: errorMsg }
    }
};