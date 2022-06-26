import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {dataPoints.map(({ label, value }) => (
        <ChartBar
          key={label}
          value={value}
          maxValue={totalMaximum}
          label={label}
        />
      ))}
    </div>
  );
};

export default Chart;
