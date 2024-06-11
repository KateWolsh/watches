import { useState } from 'react';

interface TimeFormProps  {
    onAdd: (name: string, timezone: number) => void;
}

function TimeForm({ onAdd }: TimeFormProps ) {
    const [name, setName] = useState('');
    const [timezone, setTimezone] = useState('');

    const handleAdd = () => {
        const tz = parseInt(timezone, 10);
        if (name && !isNaN(tz)) {
            onAdd(name, tz);
            setName('');
            setTimezone('');
        }
    }

    return (
        <div className='formAdd'>
            <input 
                className='name border rounded w-150 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Name'
            />
            
            <input 
                className='timezone border rounded w-150 py-2 px-3 ml-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                value={timezone}
                onChange={(e) => setTimezone(e.target.value)}
                placeholder='Timezone'
            />
            <button className='btn btn-blue' onClick={handleAdd}>Добавить</button>
        </div>
    )
}

export default TimeForm