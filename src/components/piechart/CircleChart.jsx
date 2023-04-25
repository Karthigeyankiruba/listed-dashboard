import "./circlechart.scss";
import { PieChart, Pie, Cell } from "recharts";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const CircleChart = () => {
  const data = [
    { name: "", value: 14 },
    { name: "", value: 55 },
    { name: "", value: 31 },
  ];

  const COLORS = ["#98D89E", "#F6DC7D", "#EE8484"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      ></text>
    );
  };

  return (
    <div className="piechart">
      <div className="top">
        <h3>Top Products</h3>
        <div className="date">
          <span>May June 2021</span>
          <KeyboardArrowDownIcon />
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <PieChart width={150} height={150}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={70}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div className="right">
          <div className="items">
            <div
              className="circle"
              style={{ backgroundColor: "#98D89E" }}
            ></div>
            <div>
              <p>Basic Tees</p>
              <span>55%</span>
            </div>
          </div>
          <div className="items">
            <div
              className="circle"
              style={{ backgroundColor: "#F6DC7D" }}
            ></div>
            <div>
              <p>Custom Short Pants</p>
              <span>31%</span>
            </div>
          </div>
          <div className="items">
            <div
              className="circle"
              style={{ backgroundColor: "#EE8484" }}
            ></div>
            <div>
              <p>Super Hoodies</p>
              <span>14%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircleChart;
