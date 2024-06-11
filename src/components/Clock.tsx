import { useState, useEffect } from 'react';

interface ClockProps {
    name: string;
    timezone: number;
    onRemove: () => void;
}
function Clock({ name, timezone, onRemove }: ClockProps) {
    const [time, setTime] = useState(new Date(Date.now().valueOf() + ((60) * timezone  + new Date().getTimezoneOffset()) * 60000));

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date(time.setSeconds(time.getSeconds() + 1)));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const timeString = `${hours}:${minutes}:${seconds}`;

    return (
        <div className='clock-wrapper'>
          <div className='container mb-5'> <h1 className='nameClock ml-1'>{name}</h1><div className='delete ml-32' onClick={onRemove}>X</div></div>
            <div className='clock'>{timeString}</div>
        </div>
    );
}

export default Clock

