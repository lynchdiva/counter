import { useState } from 'react';
import '../../App.css';

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="card">
      <button onClick={handleClick}>Count is {count}</button>
    </div>
  );
}
