import { useEffect, useState } from 'react';

const Minutes = ({ minutes }) => {

  const [minutes1, setMinutes1] = useState('');
  const [minutes2, setMinutes2] = useState(0);

  useEffect(() => {

    if (minutes >= 0 && minutes <= 59) {
      if (minutes >= 0 && minutes <= 10) {
        setMinutes1(minutes);
        setMinutes2(0);
      }
      if (minutes >= 10 && minutes <= 20) {
        setMinutes1(minutes - 10);
        setMinutes2(1);
      }
      if (minutes >= 20 && minutes <= 30) {
        setMinutes1(minutes - 20);
        setMinutes2(2);
      }
      if (minutes >= 30 && minutes <= 40) {
        setMinutes1(minutes - 30);
        setMinutes2(3);
      }
      if (minutes >= 40 && minutes <= 50) {
        setMinutes1(minutes - 40);
        setMinutes2(4);
      }
      if (minutes >= 50 && minutes <= 59) {
        setMinutes1(minutes - 50);
        setMinutes2(5);
      }
    }
  }, [minutes]);

  return (
    <>
      <div className="clockConf">
        <div className="clock">
          <div className={`seconds1-${minutes2}`}>
          </div>
          <div className={`seconds2-${minutes2}`}>
          </div>
        </div>
        <div className="clock">
          <div className={`seconds1-${minutes1}`}>
          </div>
          <div className={`seconds2-${minutes1}`}>
          </div>
        </div>
      </div>
    </>
  );
}
export default Minutes;



