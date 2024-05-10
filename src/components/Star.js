import { FaStar } from 'react-icons/fa';

function Star({ select, onSelect }) {
  return (
    <div className='star'>
      <FaStar onClick={onSelect} className={select ? 'yellow' : 'grey'} />
    </div>
  );
}

export default Star;