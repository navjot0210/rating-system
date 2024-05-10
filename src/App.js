import Dialog from './components/Dialog';
import StarRating from './components/StarRating';
import { useState } from 'react';

function App() {
  const [isDialogShown, setIsDialogShown] = useState(false);

  const showDialog = () => {
    setIsDialogShown(true);
  };

  const hideDialog = () => {
    setIsDialogShown(false);
  };

  return (
    <main>
      <section>
        <StarRating />
      </section>
      {isDialogShown && <Dialog hideDialog={hideDialog} />}
      <button className='button open-button' onClick={showDialog}>Open Dialog</button>
    </main>
  );
}

export default App;
