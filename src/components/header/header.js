import './header.css';

function Header() {
  return (
    <div className="Header">
      <div className='Logo'>
        LOGO
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