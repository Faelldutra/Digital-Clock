import { useEffect, useState } from 'react';

const Seconds = ({ seconds }) => {

  const [seconds1, setSeconds1] = useState('');
  const [seconds2, setSeconds2] = useState(0);

  useEffect(() => {

    if (seconds >= 0 && seconds <= 59) {
      if (seconds >= 0 && seconds <= 10) {
        setSeconds1(seconds);
        setSeconds2(0);
      }
      if (seconds >= 10 && seconds <= 20) {
        setSeconds1(seconds - 10);
        setSeconds2(1);
      }
      if (seconds >= 20 && seconds <= 30) {
        setSeconds1(seconds - 20);
        setSeconds2(2);
      }
      if (seconds >= 30 && seconds <= 40) {
        setSeconds1(seconds - 30);
        setSeconds2(3);
      }
      if (seconds >= 40 && seconds <= 50) {
        setSeconds1(seconds - 40);
        setSeconds2(4);
      }
      if (seconds >= 50 && seconds <= 59) {
        setSeconds1(seconds - 50);
        setSeconds2(5);
      }
    }
  }, [seconds]);

  return (
    <>
      <div className="clockConf">
        <div className="clock">
          <div className={`seconds1-${seconds2}`}>
          </div>
          <div className={`seconds2-${seconds2}`}>
          </div>
        </div>
        <div className="clock">
          <div className={`seconds1-${seconds1}`}>
          </div>
          <div className={`seconds2-${seconds1}`}>
          </div>
        </div>
      </div>
    </>
  );
}
export default Seconds;