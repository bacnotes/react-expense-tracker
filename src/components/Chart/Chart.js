import ChartBar from './ChartBar';

const Chart = (props) => {
  const dataValueArr = props.data.map(data => data.value)
  const maxValue = Math.max(...dataValueArr)
  return (
    <div className='chart'>
      {props.data.map((data) => (
        <ChartBar 
        key={data.label}
        value={data.value} 
        maxValue={maxValue} 
        label={data.label}/>
      ))}
    </div>
  );
};

export default Chart;
