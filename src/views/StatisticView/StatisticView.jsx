import CountdownTimers from 'components/CountdownTimers';

const StatisticView = () => {
  const threeDays = new Date().getTime() + 3 * 24 * 60 * 60 * 1000; // for Example

  return <CountdownTimers targetDate={threeDays} />;
};

export default StatisticView;