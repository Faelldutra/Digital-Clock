import { useState, useEffect } from 'react';
import Hours from './components/hours';
import Minutes from './components/minutes';
import Seconds from './components/seconds';
import { Content, DaysOfWeek } from './styledApp';

const App = () => {

  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [day, setDay] = useState('');

  function setDate() {

    const date = new Date();

    setHours(date.getHours());
    setMinutes(date.getMinutes());
    setSeconds(date.getSeconds());
    setDay(date.getDay());

  } 

  useEffect(()=>{
    setInterval(setDate, 1000);
  },[]);
  
  return (
    <>
      <Content>
        <Hours hours={hours} />
        <div>
          <p>:</p>
        </div>
        <Minutes minutes={minutes} />
        <div>
          <p>:</p>
        </div>
        <Seconds seconds={seconds} />
      </Content>
      <DaysOfWeek>
        <p className={day === 0 ? 'color' : ''}>SUN</p>
        <p className={day === 1 ? 'color' : ''}>MON</p>
        <p className={day === 2 ? 'color' : ''}>TUE</p>
        <p className={day === 3 ? 'color' : ''}>WED</p>
        <p className={day === 4 ? 'color' : ''}>THU</p>
        <p className={day === 5 ? 'color' : ''}>FRI</p>
        <p className={day === 6 ? 'color' : ''}>SAT</p>
       <button>asaoia</button>
      </DaysOfWeek>
    </>
  );
}
export default App;
