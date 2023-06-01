import Paper from '@mui/material/Paper';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
} from '@devexpress/dx-react-chart-material-ui';
import { ValueScale } from '@devexpress/dx-react-chart';

interface IDataItem {
  month: string,
  sale: number,
  total: number,
}

const chartData: IDataItem[] = [
  { month: 'Jan', sale: 50, total: 987 },
  { month: 'Feb', sale: 100, total: 3000 },
  { month: 'March', sale: 30, total: 1100 },
  { month: 'April', sale: 107, total: 7100 },
  { month: 'May', sale: 95, total: 4300 },
  { month: 'June', sale: 150, total: 7500 },
];

export default () => {
    return (
      <Paper>
        <Chart
          data={chartData}
        >
          <ValueScale name="sale" />
          <ValueScale name="total" />

          <LineSeries
            name="Total Transactions"
            valueField="total"
            argumentField="month"
            scaleName="total"
          />
        </Chart>
      </Paper>
    );
}