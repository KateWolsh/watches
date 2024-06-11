import Clock from "./components/Clock";
import { useState } from 'react';
import TimeForm from "./components/TimeForm";

interface ClockData {
  name: string;
  timezone: number;
  id: number;
}

function App() {
    const [clocks, setClocks] = useState<ClockData[]>([]);
    const [nextId, setNextId] = useState(1);

    const handleAddClock = (name: string, timezone: number) => {
      setClocks([...clocks, { name, timezone, id: nextId }]);
      setNextId(nextId + 1);
  };

  const handleRemoveClock = (id: number) => {
    setClocks(clocks.filter(clock => clock.id !== id));
};

  return (
    <div>
      <div>
        <TimeForm onAdd={handleAddClock}/>
      </div>
      <div>
      {clocks.map(clock => (
                    <Clock
                        key={clock.id}
                        name={clock.name}
                        timezone={clock.timezone}
                        onRemove={() => handleRemoveClock(clock.id)}
                    />
                ))}
      </div>
    </div>
  )
}

export default App

