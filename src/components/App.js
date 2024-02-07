import { useState } from 'react';
import FoodList from './FoodList';
import mockItems from '../mock.json';

function App() {
  const [items, setItems] = useState(mockItems);
  const [order, setOrder] = useState('createdAt');
  const sortedItems = items.sort((a, b) => b[order] - a[order]);
  const handleNewestClick = () => {
    setOrder('createdAt');
  };
  const handleBestClick = () => {
    setOrder('calorie');
  };
  const handleDelete = (id) => {
    const nextItems = items.filter((el) => el.id !== id);
    setItems(nextItems);
  };
  return (
    <div>
      <button type="button" onClick={handleNewestClick}>
        최신순
      </button>
      <button type="button" onClick={handleBestClick}>
        칼로리순
      </button>
      <FoodList items={sortedItems} onDelete={handleDelete} />
    </div>
  );
}

export default App;
