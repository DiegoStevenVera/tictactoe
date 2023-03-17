import './header.css';

function Header() {
  return (
    <div className="Header">
      <div >
        <img className='Logo' src='/tictactoe_logo.png' alt='logo'></img>
      </div>
      <ul className='Nav'>
        <li className='Contact'>
          <a href='https://www.linkedin.com/in/diegosverav/' 
          target='_blank' 
          rel='noreferrer'
          className='enlace'>
            Contact me
          </a>
        </li>
        <li className='Contact'>
          <a href='https://www.google.com' 
          target='_blank' 
          rel='noreferrer'
          className='enlace'>
            Portfolio
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;