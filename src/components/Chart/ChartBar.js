const ChartBar = (props) => {
  let barHeight = '0%';
  if (props.maxValue > 0) {
    barHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }
  return (
    <div className='chart-bar'>
      <span className='chart-bar__number'>${props.value.toLocaleString()}</span>
      <div className='chart-bar__inner'>
        <div className='chart-bar__fill' style={{ height: barHeight }}></div>
      </div>
      <div className='chart-bar__label'>{props.label}</div>
    </div>
  );
};

export default ChartBar;
