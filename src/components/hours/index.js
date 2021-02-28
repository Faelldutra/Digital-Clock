import { useEffect, useState } from 'react';

const Hours = ({ hours }) => {

  const [hours1, setHours1] = useState('');
  const [hours2, setHours2] = useState(0);

  useEffect(() => {

    if (hours >= 0 && hours <= 23) {
      if (hours >= 0 && hours <= 10) {
        setHours1(hours);
        setHours2(0);
      }
      if (hours >= 10 && hours <= 20) {
        setHours1(hours - 10);
        setHours2(1);
      }
      if (hours >= 20 && hours <= 23) {
        setHours1(hours - 20);
        setHours2(2);
      }
    }

  }, [hours]);

  return (
    <>
      <div className="clockConf">
        <div className="clock">
          <div className={`seconds1-${hours2}`}>
          </div>
          <div className={`seconds2-${hours2}`}>
          </div>
        </div>
        <div className="clock">
          <div className={`seconds1-${hours1}`}>
          </div>
          <div className={`seconds2-${hours1}`}>
          </div>
        </div>
      </div>
    </>
  );
}
export default Hours;