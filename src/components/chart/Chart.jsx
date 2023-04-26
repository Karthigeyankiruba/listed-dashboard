import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Chart = () => {
  const data = [
    {
      name: "Week 1",
      uv: 4000,
      pv: 2400,
      amt: 100,
    },
    {
      name: "Week 2",
      uv: 3000,
      pv: 1398,
      amt: 200,
    },
    {
      name: "Week 3",
      uv: 2000,
      pv: 9800,
      amt: 300,
    },
    {
      name: "Week 4",
      uv: 2780,
      pv: 3908,
      amt: 400,
    },
    {
      name: "Week 5",
      uv: 1890,
      pv: 4800,
      amt: 500,
    },
  ];
  return (
    <div className="chart">
      <div className="top">
        <div className="left">
          <div className="title">
            <h3>Activities</h3>
            <div className="date">
              <span>May June 2021</span>
              <KeyboardArrowDownIcon />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="guest">
            <div className="color blue"></div>
            <span>Guest</span>
          </div>
          <div className="user">
            <div className="color green"></div>
            <span>User</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <AreaChart
          className="areachart"
          width={1000}
          height={250}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" fill="#8884d8" />
          <Area type="monotone" dataKey="pv" fill="#4ed49a77" />
        </AreaChart>
      </div>
    </div>
  );
};

export default Chart;
