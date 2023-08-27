import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { UserContext } from "../../controllers/contexts";

const data = [
  {
    name: "Day A",
    value: 4000,
  },
  {
    name: "Day B",
    value: 3000,
  },
  {
    name: "Day C",
    value: 2000,
  },
  {
    name: "Day D",
    value: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Day E",
    value: 1890,
  },
  {
    name: "Day F",
    value: 2390,
  },
  {
    name: "Day G",
    value: 3490,
  },
];

export default function AccountChart() {
  const [chartState, setChartState] = React.useState<string>("Monthly");
  const user = React.useContext(UserContext);

  return (
    <div>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#82ca9d" />
      </LineChart>
      <div>
        <Button
          key="Daily"
          onClick={() => {
            setChartState("Daily");
          }}
          sx={{ my: 2, color: "Black" }}
        >
          <Typography textAlign="center">Daily</Typography>
        </Button>
        <Button
          key="Weekly"
          onClick={() => {
            setChartState("Weekly");
          }}
          sx={{ my: 2, color: "Black" }}
        >
          <Typography textAlign="center">Weekly</Typography>
        </Button>
        <Button
          key="Monthly"
          onClick={() => {
            setChartState("Monthly");
          }}
          sx={{ my: 2, color: "Black" }}
        >
          <Typography textAlign="center">Monthly</Typography>
        </Button>
      </div>
      <div>Account val {user.cashBalance + user.sharesBalance}</div>
      <div>{`${chartState} returns: ${(
        (data[data.length - 1].value / data[data.length - 2].value - 1) *
        100
      ).toFixed(2)}%`}</div>
    </div>
  );
}
