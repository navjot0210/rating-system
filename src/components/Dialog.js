import logo from '../logo.svg';

function Dialog({ hideDialog }) {
  return (
    <div className='dialog'>
      <figure>
        <img src={logo} className='App-logo' alt='logo' />
      </figure>
      <button className='button close-button' onClick={hideDialog}>Close Dialog</button>
    </div>
  )
}

export default Dialog;