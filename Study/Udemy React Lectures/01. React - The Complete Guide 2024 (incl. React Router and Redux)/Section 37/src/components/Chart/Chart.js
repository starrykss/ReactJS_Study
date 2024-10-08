import ChartBar from './ChartBar';

import classes from './Chart.module.css';

export function Chart({ dataPoints }) {
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className={classes.chart}>
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.id}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
